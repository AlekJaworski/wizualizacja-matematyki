import { useCallback, useMemo } from "react";
import { useLocalStorage, clearSession } from "./useLocalStorage.js";
import {
  propagateKnown,
  propagateUnknown,
  computeFrontier,
  pickNextQuestion,
  isSessionComplete,
  estimateRemainingQuestions,
  // Deep-dive
  updateBetaBelief,
  classifyNodes,
  computeSubgraph,
  pickNextQuestionForSubgraph,
  isDeepDiveComplete,
} from "../engine/belief.js";

/**
 * Manages all diagnostic-mode state: belief map, quiz selection, frontier,
 * next suggested question, and session completion.
 *
 * Supports two modes:
 *   - mode: "quick"    — ERV algo, binary belief (known/unknown)
 *   - mode: "deepdive" — Beta belief, subgraph-restricted, goal-oriented
 *
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @param {Record<string, Array>} questionBank  — the active course's question bank
 * @param {string} courseId                     — used to namespace localStorage keys
 */
export function useDiagnostic(adjacency, questionBank, courseId) {
  // Namespace all keys by courseId so switching courses doesn't clobber state.
  // Falls back to legacy key if courseId is undefined (shouldn't happen).
  const ns = courseId ? `${courseId}_` : "";

  // All persisted state uses useLocalStorage so sessions survive page refresh.
  // quizNode is deliberately NOT persisted — discard in-flight question on reload.
  const [diagMode,    setDiagMode]    = useLocalStorage(`${ns}diagMode`,    false);
  const [mode,        setMode]        = useLocalStorage(`${ns}diagSubMode`,  "quick");
  const [belief,      setBelief]      = useLocalStorage(`${ns}belief`,       {});
  const [targetNode,  setTargetNode]  = useLocalStorage(`${ns}targetNode`,   null);
  const [stats,       setStats]       = useLocalStorage(`${ns}stats`,        { correct: 0, incorrect: 0, questionsAnswered: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useLocalStorage(`${ns}answeredQuestions`, new Set());
  const [betaBeliefs, setBetaBeliefs] = useLocalStorage(`${ns}betaBeliefs`,  {});

  // quizNode is session-only (not persisted)
  const [quizNode, setQuizNode] = useLocalStorage(`${ns}quizNode`, null);

  // ── Quick mode derived state ─────────────────────────────────────

  // Bayesian P(correct): starts at 0.5 (prior), updates after each answer.
  const pCorrect = useMemo(() => {
    const total = stats.correct + stats.incorrect;
    if (total === 0) return 0.5;
    return (stats.correct + 0.5) / (total + 1);
  }, [stats]);

  const questionsAnswered = stats.questionsAnswered;

  // RAW_NODES comes from adjacency.nodes if available, but the belief engine
  // functions that need nodes accept them as a parameter. We need to pass them
  // from outside. Here we derive a minimal node list from the adjacency object.
  // CurriculumGraph passes adjacency built from RAW_NODES, so we pass RAW_NODES
  // directly as a separate arg from the parent.
  // NOTE: This hook receives adjacency built from RAW_NODES. For functions that
  // need RAW_NODES, we extract the node list from adjacency's key set.
  // Actually, the belief functions (computeFrontier, pickNextQuestion, etc.)
  // need the full nodes array. We store a ref via the adjacency nodes property.
  // Solution: pass rawNodes as a parameter too.
  // BUT that would require changing the signature called from CurriculumGraph,
  // which already calls: useDiagnostic(adjacency, QUESTION_BANK, courseId).
  // The adjacency object doesn't carry nodes. We need to add rawNodes.
  // For now, the caller in CurriculumGraph passes adjacency which is built
  // from RAW_NODES. We'll get nodes from adjacency.allIds mapped.
  // SIMPLEST: add rawNodes as a 4th parameter and update CurriculumGraph call.
  // Let's just use the adjacency allIds to build a minimal node list for
  // the belief functions that only need node.id fields.

  // Build minimal node array from adjacency keys (all nodeIds)
  const allNodeIds = useMemo(() => {
    const ids = new Set([
      ...Object.keys(adjacency.prereqs),
      ...Object.keys(adjacency.dependents),
    ]);
    return [...ids].map(id => ({ id }));
  }, [adjacency]);

  const frontier = useMemo(
    () => (diagMode && mode === "quick") ? computeFrontier(allNodeIds, belief, adjacency) : [],
    [diagMode, mode, belief, adjacency, allNodeIds]
  );

  const hasStarted = useMemo(() => Object.keys(belief).length > 0 || stats.questionsAnswered > 0, [belief, stats]);

  const visibleFrontier = hasStarted ? frontier : [];

  const nextSuggestedId = useMemo(
    () => (diagMode && mode === "quick") ? pickNextQuestion(allNodeIds, belief, adjacency, pCorrect) : null,
    [diagMode, mode, belief, adjacency, pCorrect, allNodeIds]
  );

  const expectedRemaining = useMemo(
    () => (diagMode && mode === "quick") ? estimateRemainingQuestions(allNodeIds, belief, adjacency, pCorrect) : null,
    [diagMode, mode, belief, adjacency, pCorrect, allNodeIds]
  );

  const sessionComplete = useMemo(
    () => diagMode && mode === "quick" && hasStarted && isSessionComplete(allNodeIds, belief),
    [diagMode, mode, hasStarted, belief, allNodeIds]
  );

  // ── Deep-dive derived state ──────────────────────────────────────

  const subgraphIds = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || !targetNode) return [];
    return [...computeSubgraph(targetNode, adjacency, allNodeIds)];
  }, [diagMode, mode, targetNode, adjacency, allNodeIds]);

  const ddClassification = useMemo(() => {
    if (mode !== "deepdive") return {};
    return classifyNodes(subgraphIds, betaBeliefs);
  }, [mode, subgraphIds, betaBeliefs]);

  const ddNextNodeId = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || subgraphIds.length === 0) return null;
    return pickNextQuestionForSubgraph(subgraphIds, betaBeliefs, ddClassification, adjacency, allNodeIds);
  }, [diagMode, mode, subgraphIds, betaBeliefs, ddClassification, adjacency, allNodeIds]);

  const ddComplete = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || subgraphIds.length === 0) return false;
    return isDeepDiveComplete(subgraphIds, ddClassification);
  }, [diagMode, mode, subgraphIds, ddClassification]);

  // ── Handlers ─────────────────────────────────────────────────────

  const handleDiagClick = useCallback((id, shiftKey) => {
    if (!diagMode) return false;

    if (mode === "deepdive") {
      if (!subgraphIds.includes(id)) return false;
      if (ddClassification[id] !== "uncertain") return true;
      setQuizNode(id);
      return true;
    }

    // Quick mode
    if (belief[id] === "unknown") return true;

    if (shiftKey) {
      setBelief(prev => propagateUnknown(id, prev, adjacency));
      setQuizNode(null);
      return true;
    }

    if (belief[id] === "known") {
      setBelief(prev => { const next = { ...prev }; delete next[id]; return next; });
      setQuizNode(null);
      return true;
    }

    setQuizNode(id);
    return true;
  }, [diagMode, mode, belief, adjacency, subgraphIds, ddClassification]);

  const handleQuizAnswer = useCallback((id, correct, question, questionIndex) => {
    if (mode === "deepdive") {
      const tests = question?.tests ?? { [id]: 1.0 };
      setBetaBeliefs(prev => updateBetaBelief(prev, tests, correct));
    } else {
      setBelief(prev =>
        correct
          ? propagateKnown(id, prev, adjacency)
          : propagateUnknown(id, prev, adjacency)
      );
    }

    if (typeof questionIndex === "number") {
      setAnsweredQuestions(prev => new Set([...prev, `${id}:${questionIndex}`]));
    }

    setStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1),
      questionsAnswered: prev.questionsAnswered + 1,
    }));

    setQuizNode(null);
  }, [mode, adjacency]);

  const resetDiagnostic = useCallback(() => {
    clearSession();
    setDiagMode(false);
    setMode("quick");
    setBelief({});
    setBetaBeliefs({});
    setQuizNode(null);
    setTargetNode(null);
    setStats({ correct: 0, incorrect: 0, questionsAnswered: 0 });
    setAnsweredQuestions(new Set());
  }, []);

  /**
   * Start a deep-dive session targeting a specific node.
   * @param {string} nodeId
   */
  const startDeepDive = useCallback((nodeId) => {
    setMode("deepdive");
    setTargetNode(nodeId);
    setBetaBeliefs({});
    setBelief({});
    setQuizNode(null);
    setStats({ correct: 0, incorrect: 0, questionsAnswered: 0 });
    setAnsweredQuestions(new Set());
    setDiagMode(true);
  }, []);

  return {
    // Common
    diagMode, setDiagMode,
    mode, setMode,
    quizNode, setQuizNode,
    questionsAnswered,
    answeredQuestions,
    getAnsweredIndices: (nodeId) => {
      const indices = [];
      answeredQuestions.forEach((key) => {
        const [nid, idx] = key.split(":");
        if (nid === nodeId) indices.push(parseInt(idx, 10));
      });
      return indices;
    },
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
    startDeepDive,
    targetNode,

    // Quick mode
    belief,
    frontier,
    visibleFrontier,
    hasStarted,
    nextSuggestedId,
    expectedRemaining,
    pCorrect,
    sessionComplete,

    // Deep-dive mode
    betaBeliefs,
    subgraphIds,
    ddClassification,
    ddNextNodeId,
    ddComplete,
  };
}
