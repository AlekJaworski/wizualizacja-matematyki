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
import { RAW_NODES, QUESTION_BANK } from "../data/curriculum.js";

/**
 * Manages all diagnostic-mode state: belief map, quiz selection, frontier,
 * next suggested question, and session completion.
 *
 * Supports two modes:
 *   - mode: "quick"    — existing ERV algo, binary belief (known/unknown)
 *   - mode: "deepdive" — Beta belief, subgraph-restricted, goal-oriented
 *
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 */
export function useDiagnostic(adjacency) {
  // All persisted state uses useLocalStorage so sessions survive page refresh.
  // quizNode is deliberately NOT persisted — discard in-flight question on reload.
  const [diagMode,    setDiagMode]    = useLocalStorage("diagMode",    false);
  const [mode,        setMode]        = useLocalStorage("diagSubMode",  "quick");
  const [belief,      setBelief]      = useLocalStorage("belief",       {});
  const [targetNode,  setTargetNode]  = useLocalStorage("targetNode",   null);
  const [stats,       setStats]       = useLocalStorage("stats",        { correct: 0, incorrect: 0, questionsAnswered: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useLocalStorage("answeredQuestions", new Set());
  const [betaBeliefs, setBetaBeliefs] = useLocalStorage("betaBeliefs",  {});

  // quizNode is session-only (not persisted)
  const [quizNode, setQuizNode] = useLocalStorage("quizNode", null);

  // ── Quick mode derived state ─────────────────────────────────────

  // Bayesian P(correct): starts at 0.5 (prior), updates after each answer.
  const pCorrect = useMemo(() => {
    const total = stats.correct + stats.incorrect;
    if (total === 0) return 0.5;
    return (stats.correct + 0.5) / (total + 1);
  }, [stats]);

  const questionsAnswered = stats.questionsAnswered;

  const frontier = useMemo(
    () => (diagMode && mode === "quick") ? computeFrontier(RAW_NODES, belief, adjacency) : [],
    [diagMode, mode, belief, adjacency]
  );

  const hasStarted = useMemo(() => Object.keys(belief).length > 0 || stats.questionsAnswered > 0, [belief, stats]);

  const visibleFrontier = hasStarted ? frontier : [];

  const nextSuggestedId = useMemo(
    () => (diagMode && mode === "quick") ? pickNextQuestion(RAW_NODES, belief, adjacency, pCorrect) : null,
    [diagMode, mode, belief, adjacency, pCorrect]
  );

  const expectedRemaining = useMemo(
    () => (diagMode && mode === "quick") ? estimateRemainingQuestions(RAW_NODES, belief, adjacency, pCorrect) : null,
    [diagMode, mode, belief, adjacency, pCorrect]
  );

  const sessionComplete = useMemo(
    () => diagMode && mode === "quick" && hasStarted && isSessionComplete(RAW_NODES, belief),
    [diagMode, mode, hasStarted, belief]
  );

  // ── Deep-dive derived state ──────────────────────────────────────

  const subgraphIds = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || !targetNode) return [];
    return [...computeSubgraph(targetNode, adjacency, RAW_NODES)];
  }, [diagMode, mode, targetNode, adjacency]);

  const ddClassification = useMemo(() => {
    if (mode !== "deepdive") return {};
    return classifyNodes(subgraphIds, betaBeliefs);
  }, [mode, subgraphIds, betaBeliefs]);

  const ddNextNodeId = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || subgraphIds.length === 0) return null;
    return pickNextQuestionForSubgraph(subgraphIds, betaBeliefs, ddClassification, adjacency, RAW_NODES);
  }, [diagMode, mode, subgraphIds, betaBeliefs, ddClassification, adjacency]);

  const ddComplete = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || subgraphIds.length === 0) return false;
    return isDeepDiveComplete(subgraphIds, ddClassification);
  }, [diagMode, mode, subgraphIds, ddClassification]);

  // ── Handlers ─────────────────────────────────────────────────────

  const handleDiagClick = useCallback((id, shiftKey) => {
    if (!diagMode) return false;

    if (mode === "deepdive") {
      // In deep-dive mode, clicking a node in the subgraph opens its quiz
      if (!subgraphIds.includes(id)) return false; // ignore outside subgraph
      if (ddClassification[id] !== "uncertain") return true; // already classified
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
      // Update Beta beliefs using question's tests map
      const tests = question?.tests ?? { [id]: 1.0 };
      setBetaBeliefs(prev => updateBetaBelief(prev, tests, correct));
    } else {
      // Quick mode: binary propagation
      setBelief(prev =>
        correct
          ? propagateKnown(id, prev, adjacency)
          : propagateUnknown(id, prev, adjacency)
      );
    }

    // Track answered question to avoid repeats
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
