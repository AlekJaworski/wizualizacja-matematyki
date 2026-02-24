import { useRef, useCallback } from "react";

/**
 * Manages dragging individual graph nodes.
 *
 * @param {Function} toCanvas  converts screen coords → canvas coords
 * @param {Array<{id:string, x:number, y:number}>} nodes
 * @param {Function} setPositions  setState setter for positions map
 * @returns {{
 *   draggingNode: React.MutableRefObject<string|null>,
 *   startNodeDrag: (id:string, clientX:number, clientY:number) => void,
 *   handleDragMove: (clientX:number, clientY:number) => boolean,
 *   handleDragEnd: () => void,
 * }}
 */
export function useNodeDrag(toCanvas, nodes, setPositions, setCursorStyle) {
  const draggingNode = useRef(null);
  const dragOffset   = useRef({ x: 0, y: 0 });

  const startNodeDrag = useCallback((id, clientX, clientY) => {
    const canvasPos = toCanvas(clientX, clientY);
    const node = nodes.find(n => n.id === id);
    if (!node) return;
    draggingNode.current = id;
    dragOffset.current = { x: canvasPos.x - node.x, y: canvasPos.y - node.y };
    setCursorStyle?.("grabbing");
  }, [toCanvas, nodes, setCursorStyle]);

  const handleDragMove = useCallback((clientX, clientY) => {
    if (!draggingNode.current) return false;
    const canvasPos = toCanvas(clientX, clientY);
    const id = draggingNode.current;
    setPositions(prev => ({
      ...prev,
      [id]: {
        x: canvasPos.x - dragOffset.current.x,
        y: canvasPos.y - dragOffset.current.y,
      },
    }));
    return true;
  }, [toCanvas, setPositions]);

  const handleDragEnd = useCallback(() => {
    draggingNode.current = null;
    setCursorStyle?.("grab");
  }, [setCursorStyle]);

  return { draggingNode, startNodeDrag, handleDragMove, handleDragEnd };
}
