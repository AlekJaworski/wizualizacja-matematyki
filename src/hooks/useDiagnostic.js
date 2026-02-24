import { useState, useCallback, useMemo } from "react";
import {
  propagateKnown,
  propagateUnknown,
  computeFrontier,
  pickNextQuestion,
  isSessionComplete,
} from "../engine/belief.js";
import { RAW_NODES } from "../data/curriculum.js";

/**
 * Manages all diagnostic-mode state: belief map, quiz selection, frontier,
 * next suggested question, and session completion.
 *
 * Active DAG model:
 *   - "known"        → classified as understood; propagated upward through prereqs
 *   - "unknown"      → classified as not understood; removed from active DAG along
 *                       with all descendants (propagated downward)
 *   - unclassified   → still in the active DAG; the algorithm asks about these
 *
 * The session is complete when no unclassified nodes remain in the active DAG
 * (every node is known, unknown, or cut off by an unknown ancestor).
 *
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 */
export function useDiagnostic(adjacency) {
  const [diagMode, setDiagMode] = useState(false);
  const [belief,   setBelief]   = useState({});
  const [quizNode, setQuizNode] = useState(null);

  // ── Derived state (all pure, recomputed on belief change) ────────

  const frontier = useMemo(
    () => diagMode ? computeFrontier(RAW_NODES, belief, adjacency) : [],
    [diagMode, belief, adjacency]
  );

  // Has the student classified at least one node?
  // Before that, showing the frontier floods the display with all root nodes.
  const hasStarted = useMemo(() => Object.keys(belief).length > 0, [belief]);

  // Frontier is only surfaced in the UI after the first classification.
  const visibleFrontier = hasStarted ? frontier : [];

  // Best next question: highest-degree unclassified node in the pruned DAG.
  // null means the active DAG is fully resolved → session complete.
  const nextSuggestedId = useMemo(
    () => diagMode ? pickNextQuestion(RAW_NODES, belief, adjacency) : null,
    [diagMode, belief, adjacency]
  );

  // Session is complete when all nodes are classified (no unclassified remain).
  const sessionComplete = useMemo(
    () => diagMode && hasStarted && isSessionComplete(RAW_NODES, belief),
    [diagMode, hasStarted, belief]
  );

  // ── Handlers ─────────────────────────────────────────────────────

  const handleDiagClick = useCallback((id, shiftKey) => {
    if (!diagMode) return false;

    // Ignore clicks on nodes that are already cut off (unknown)
    if (belief[id] === "unknown") return true;

    if (shiftKey) {
      // Shift+click: toggle unknown — marks node + descendants as unknown,
      // effectively removing them from the active DAG.
      setBelief(prev => propagateUnknown(id, prev, adjacency));
      setQuizNode(null);
      return true;
    }

    if (belief[id] === "known") {
      // Click a known node to un-classify it (remove the known mark only —
      // don't cascade, the student may want to re-test a specific node).
      setBelief(prev => { const next = { ...prev }; delete next[id]; return next; });
      setQuizNode(null);
      return true;
    }

    // Unclassified node → open its quiz
    setQuizNode(id);
    return true;
  }, [diagMode, belief, adjacency]);

  const handleQuizAnswer = useCallback((id, correct) => {
    setBelief(prev =>
      correct
        ? propagateKnown(id, prev, adjacency)
        : propagateUnknown(id, prev, adjacency)
    );
    // Auto-advance: the next quiz node is driven by the parent via nextSuggestedId.
    // We close the current quiz; CurriculumGraph will re-open with the suggestion
    // after a short delay so the student sees the result first.
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
    visibleFrontier,
    hasStarted,
    nextSuggestedId,
    sessionComplete,
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
  };
}
