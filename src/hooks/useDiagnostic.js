import { useState, useCallback, useMemo } from "react";
import { propagateKnown, propagateUnknown, computeFrontier } from "../engine/belief.js";
import { RAW_NODES } from "../data/curriculum.js";

/**
 * Manages all diagnostic-mode state: belief map, quiz selection, and frontier.
 *
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @returns {{
 *   diagMode: boolean,
 *   setDiagMode: Function,
 *   belief: Record<string,"known"|"unknown">,
 *   quizNode: string|null,
 *   setQuizNode: Function,
 *   frontier: string[],
 *   handleDiagClick: (id:string, shiftKey:boolean) => boolean,
 *   handleQuizAnswer: (id:string, correct:boolean) => void,
 *   resetDiagnostic: () => void,
 * }}
 */
export function useDiagnostic(adjacency) {
  const [diagMode, setDiagMode] = useState(false);
  const [belief,   setBelief]   = useState({});
  const [quizNode, setQuizNode] = useState(null);

  const frontier = useMemo(
    () => diagMode ? computeFrontier(RAW_NODES, belief, adjacency) : [],
    [diagMode, belief, adjacency]
  );

  const handleDiagClick = useCallback((id, shiftKey) => {
    if (!diagMode) return false;
    const state = belief[id];

    if (shiftKey) {
      setBelief(prev => {
        if (prev[id] === "unknown") {
          const next = { ...prev };
          delete next[id];
          return next;
        }
        return propagateUnknown(id, prev, adjacency);
      });
      setQuizNode(null);
      return true;
    }

    if (state === "known") {
      setBelief(prev => { const next = { ...prev }; delete next[id]; return next; });
      setQuizNode(null);
      return true;
    }

    setQuizNode(id);
    return true;
  }, [diagMode, belief, adjacency]);

  const handleQuizAnswer = useCallback((id, correct) => {
    setBelief(prev =>
      correct
        ? propagateKnown(id, prev, adjacency)
        : propagateUnknown(id, prev, adjacency)
    );
    setQuizNode(null);
  }, [adjacency]);

  const resetDiagnostic = useCallback(() => {
    setBelief({});
    setQuizNode(null);
  }, []);

  return {
    diagMode, setDiagMode,
    belief,
    quizNode, setQuizNode,
    frontier,
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
  };
}
