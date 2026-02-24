import { useState, useCallback, useEffect, useRef } from "react";

/**
 * Manages SVG pan and zoom via wheel + mouse-drag + touch.
 *
 * Zoom is applied around the cursor position (not the SVG origin),
 * so scrolling over a node keeps that node under the cursor.
 *
 * @param {React.RefObject<SVGElement>} svgRef
 * @returns {{
 *   viewTransform: {x:number, y:number, scale:number},
 *   setViewTransform: Function,
 *   toCanvas: (cx:number, cy:number) => {x:number, y:number},
 *   isPanning: React.MutableRefObject<boolean>,
 *   panStart: React.MutableRefObject<{x:number, y:number}>,
 *   startPan: Function,
 *   handleMouseMove: Function,
 *   handleMouseUp: Function,
 *   handleWheel: Function,
 * }}
 */
export function usePanZoom(svgRef) {
  const [viewTransform, setViewTransform] = useState({ x: 40, y: 40, scale: 0.72 });
  const [cursorStyle, setCursorStyle]     = useState("grab");
  const isPanning  = useRef(false);
  const panStart   = useRef({ x: 0, y: 0 });

  // ── Touch state for pinch-zoom ──────────────────────────────────
  const lastTouchDist = useRef(null);
  const lastTouchMid  = useRef(null);

  // ── Wheel: zoom toward cursor ───────────────────────────────────
  const handleWheel = useCallback(e => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;

    setViewTransform(prev => {
      const newScale = Math.max(0.15, Math.min(5, prev.scale * factor));
      // Keep the point under the cursor fixed:
      // cursor_canvas = (cursor_screen - pan) / scale  must stay constant
      // newPan = cursor_screen - cursor_canvas * newScale
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      const newX = cursorX - ((cursorX - prev.x) / prev.scale) * newScale;
      const newY = cursorY - ((cursorY - prev.y) / prev.scale) * newScale;
      return { x: newX, y: newY, scale: newScale };
    });
  }, []);

  // ── Mouse pan ───────────────────────────────────────────────────
  const toCanvas = useCallback((cx, cy) => ({
    x: (cx - viewTransform.x) / viewTransform.scale,
    y: (cy - viewTransform.y) / viewTransform.scale,
  }), [viewTransform]);

  const startPan = useCallback((clientX, clientY) => {
    isPanning.current = true;
    setCursorStyle("grabbing");
    panStart.current = { x: clientX - viewTransform.x, y: clientY - viewTransform.y };
  }, [viewTransform]);

  const handleMouseMove = useCallback(e => {
    if (!isPanning.current) return false;
    setViewTransform(prev => ({
      ...prev,
      x: e.clientX - panStart.current.x,
      y: e.clientY - panStart.current.y,
    }));
    return true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isPanning.current = false;
    setCursorStyle("grab");
  }, []);

  // ── Touch handlers ──────────────────────────────────────────────
  const getTouchDist = (t1, t2) => {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getTouchMid = (t1, t2) => ({
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2,
  });

  const handleTouchStart = useCallback(e => {
    if (e.touches.length === 1) {
      // Single touch = pan
      isPanning.current = true;
      setViewTransform(prev => {
        panStart.current = {
          x: e.touches[0].clientX - prev.x,
          y: e.touches[0].clientY - prev.y,
        };
        return prev;
      });
      lastTouchDist.current = null;
      lastTouchMid.current  = null;
    } else if (e.touches.length === 2) {
      // Two-finger = pinch zoom
      isPanning.current = false;
      lastTouchDist.current = getTouchDist(e.touches[0], e.touches[1]);
      lastTouchMid.current  = getTouchMid(e.touches[0], e.touches[1]);
    }
  }, []);

  const handleTouchMove = useCallback(e => {
    e.preventDefault();
    if (e.touches.length === 1 && isPanning.current) {
      setViewTransform(prev => ({
        ...prev,
        x: e.touches[0].clientX - panStart.current.x,
        y: e.touches[0].clientY - panStart.current.y,
      }));
    } else if (e.touches.length === 2 && lastTouchDist.current !== null) {
      const newDist = getTouchDist(e.touches[0], e.touches[1]);
      const newMid  = getTouchMid(e.touches[0], e.touches[1]);
      const factor  = newDist / lastTouchDist.current;

      setViewTransform(prev => {
        const newScale = Math.max(0.15, Math.min(5, prev.scale * factor));
        const midX = lastTouchMid.current.x;
        const midY = lastTouchMid.current.y;
        const newX = midX - ((midX - prev.x) / prev.scale) * newScale;
        const newY = midY - ((midY - prev.y) / prev.scale) * newScale;
        return { x: newX, y: newY, scale: newScale };
      });

      lastTouchDist.current = newDist;
      lastTouchMid.current  = newMid;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    isPanning.current     = false;
    lastTouchDist.current = null;
    lastTouchMid.current  = null;
  }, []);

  // ── Register non-passive wheel + touch listeners ─────────────────
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.addEventListener("wheel",      handleWheel,      { passive: false });
    svg.addEventListener("touchstart", handleTouchStart, { passive: false });
    svg.addEventListener("touchmove",  handleTouchMove,  { passive: false });
    svg.addEventListener("touchend",   handleTouchEnd,   { passive: false });
    return () => {
      svg.removeEventListener("wheel",      handleWheel);
      svg.removeEventListener("touchstart", handleTouchStart);
      svg.removeEventListener("touchmove",  handleTouchMove);
      svg.removeEventListener("touchend",   handleTouchEnd);
    };
  }, [svgRef, handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    viewTransform,
    setViewTransform,
    toCanvas,
    isPanning,
    panStart,
    startPan,
    cursorStyle, setCursorStyle,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
  };
}
