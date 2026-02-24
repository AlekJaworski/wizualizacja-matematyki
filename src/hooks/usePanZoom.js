import { useState, useCallback, useEffect } from "react";

/**
 * Manages SVG pan and zoom via wheel + mouse-drag.
 *
 * @param {React.RefObject<SVGElement>} svgRef
 * @returns {{
 *   viewTransform: {x:number, y:number, scale:number},
 *   setViewTransform: Function,
 *   toCanvas: (cx:number, cy:number) => {x:number, y:number},
 *   isPanning: React.MutableRefObject<boolean>,
 *   panStart: React.MutableRefObject<{x:number, y:number}>,
 *   handleMouseMove: Function,
 *   handleMouseUp: Function,
 *   handleWheel: Function,
 * }}
 */
import { useRef } from "react";

export function usePanZoom(svgRef) {
  const [viewTransform, setViewTransform] = useState({ x: 40, y: 40, scale: 0.72 });
  const isPanning = useRef(false);
  const panStart  = useRef({ x: 0, y: 0 });

  const handleWheel = useCallback(e => {
    e.preventDefault();
    setViewTransform(prev => {
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      return { ...prev, scale: Math.max(0.15, Math.min(5, prev.scale * factor)) };
    });
  }, []);

  const toCanvas = useCallback((cx, cy) => ({
    x: (cx - viewTransform.x) / viewTransform.scale,
    y: (cy - viewTransform.y) / viewTransform.scale,
  }), [viewTransform]);

  const startPan = useCallback((clientX, clientY) => {
    isPanning.current = true;
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
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.addEventListener("wheel", handleWheel, { passive: false });
    return () => svg.removeEventListener("wheel", handleWheel);
  }, [svgRef, handleWheel]);

  return {
    viewTransform,
    setViewTransform,
    toCanvas,
    isPanning,
    panStart,
    startPan,
    handleMouseMove,
    handleMouseUp,
    handleWheel,
  };
}
