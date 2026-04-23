import { useState, useMemo, useCallback, useEffect } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { buildAdjacency } from "../../engine/adjacency.js";
import {
  computeSubgraph,
  propagateWithTests,
  pickNextQuestion,
  isSessionComplete,
} from "../../engine/belief.js";
import { getQuestion } from "../../data/courseLoader.js";
import { renderLatex } from "../../utils/latex.js";
import { Permutation } from "../../utils/permutation.js";

/**
 * Goal-scoped quiz flow — a focused 10-question quiz about the
 * prerequisite subgraph for a chosen goal topic.
 *
 * Props:
 *   goalId            — the target topic
 *   RAW_NODES, RAW_EDGES, QUESTION_BANK — course data
 *   lang
 *   onComplete(goalId, belief, stats, evidence) — called when session ends
 *   onExit            — bail out
 */
const GOAL_QUIZ_MAX = 10;

export function GoalQuizFlow({
  goalId, RAW_NODES, RAW_EDGES, QUESTION_BANK, lang,
  onComplete, onExit,
}) {
  const adjacency = useMemo(
    () => buildAdjacency(RAW_NODES, RAW_EDGES),
    [RAW_NODES, RAW_EDGES],
  );

  const allNodeObjs = useMemo(
    () => RAW_NODES.map(n => ({ id: n.id })),
    [RAW_NODES],
  );

  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );

  // Compute subgraph of prerequisite nodes (includes the goal itself)
  const subgraphIds = useMemo(() => {
    const set = computeSubgraph(goalId, adjacency, allNodeObjs);
    return [...set];
  }, [goalId, adjacency, allNodeObjs]);

  const subgraphNodes = useMemo(
    () => subgraphIds.map(id => ({ id })),
    [subgraphIds],
  );

  // ── Quiz state ────────────────────────────────────────────────
  const [belief, setBelief] = useState({});
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, questionsAnswered: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [evidence, setEvidence] = useState({});
  const [phase, setPhase] = useState("answering"); // "answering" | "revealed" | "done"
  const [picked, setPicked] = useState(null);
  const [fadeKey, setFadeKey] = useState(0);

  // Derived
  const pCorrect = useMemo(() => {
    const total = stats.correct + stats.incorrect;
    return total === 0 ? 0.5 : (stats.correct + 0.5) / (total + 1);
  }, [stats]);

  // Pick the current node to ask about — restricted to subgraph
  const currentNodeId = useMemo(
    () => pickNextQuestion(subgraphNodes, belief, adjacency, pCorrect),
    [subgraphNodes, belief, adjacency, pCorrect],
  );

  // Get excluded indices for this node
  const excludeIndices = useMemo(() => {
    const indices = [];
    answeredQuestions.forEach(key => {
      const [nid, idx] = key.split(":");
      if (nid === currentNodeId) indices.push(parseInt(idx, 10));
    });
    return indices;
  }, [answeredQuestions, currentNodeId]);

  // Pick a question for this node
  const question = useMemo(
    () => currentNodeId ? getQuestion(QUESTION_BANK, currentNodeId, excludeIndices) : null,
    [QUESTION_BANK, currentNodeId, excludeIndices],
  );

  // Shuffle options
  const perm = useMemo(
    () => question ? Permutation.random(question.options.length) : null,
    [question],
  );
  const shuffledOptions = useMemo(
    () => perm ? perm.apply(question.options) : [],
    [perm, question],
  );
  const correctDisplayIndex = useMemo(
    () => perm ? perm.displayIndex(question.correct) : -1,
    [perm, question],
  );

  // Session complete: max 10 questions OR all subgraph classified
  const presetConfig = useMemo(
    () => ({ maxQuestions: GOAL_QUIZ_MAX, completionRatio: 0.0 }),
    [],
  );
  const sessionDone = useMemo(
    () => isSessionComplete(subgraphNodes, belief, stats.questionsAnswered, presetConfig),
    [subgraphNodes, belief, stats.questionsAnswered, presetConfig],
  );

  // Auto-complete when session is done
  useEffect(() => {
    if (sessionDone && stats.questionsAnswered > 0) {
      setPhase("done");
    }
  }, [sessionDone, stats.questionsAnswered]);

  // ── Handlers ──────────────────────────────────────────────────
  const handleCheck = useCallback(() => {
    if (picked === null) return;
    setPhase("revealed");
  }, [picked]);

  const handleContinue = useCallback(() => {
    const correct = picked === correctDisplayIndex;
    const tests = question?.tests ?? { [currentNodeId]: 1.0 };

    setBelief(prev => propagateWithTests(currentNodeId, correct, tests, prev, adjacency));
    setEvidence(prev => ({
      ...prev,
      [currentNodeId]: { correct, questionText: question?.q ?? null },
    }));

    if (question?.index != null) {
      setAnsweredQuestions(prev => new Set([...prev, `${currentNodeId}:${question.index}`]));
    }

    setStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1),
      questionsAnswered: prev.questionsAnswered + 1,
    }));

    setPicked(null);
    setPhase("answering");
    setFadeKey(k => k + 1);
  }, [picked, correctDisplayIndex, question, currentNodeId, adjacency]);

  const handleSelfAssess = useCallback((known) => {
    const tests = { [currentNodeId]: 1.0 };
    setBelief(prev => propagateWithTests(currentNodeId, known, tests, prev, adjacency));
    setEvidence(prev => ({
      ...prev,
      [currentNodeId]: { correct: known, questionText: null },
    }));
    setAnsweredQuestions(prev => new Set([...prev, `${currentNodeId}:-1`]));
    setStats(prev => ({
      correct: prev.correct + (known ? 1 : 0),
      incorrect: prev.incorrect + (known ? 0 : 1),
      questionsAnswered: prev.questionsAnswered + 1,
    }));
    setFadeKey(k => k + 1);
  }, [currentNodeId, adjacency]);

  // Keyboard: Enter to check/continue, 1-4 to pick
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") {
        if (phase === "answering" && picked !== null) handleCheck();
        else if (phase === "revealed") handleContinue();
      }
      if (phase === "answering" && ["1","2","3","4"].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (idx < shuffledOptions.length) setPicked(idx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [phase, picked, handleCheck, handleContinue, shuffledOptions.length]);

  // ── Done → pass results up ────────────────────────────────────
  useEffect(() => {
    if (phase === "done") {
      onComplete(goalId, belief, stats, evidence);
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Helpers ───────────────────────────────────────────────────
  const goalLabel = lang === "pl"
    ? nodeById[goalId]?.labelPl
    : nodeById[goalId]?.label;

  const nodeLabel = currentNodeId
    ? (lang === "pl" ? nodeById[currentNodeId]?.labelPl : nodeById[currentNodeId]?.label) ?? currentNodeId
    : "";

  const render = (text) => (
    <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />
  );

  // ── Progress ──────────────────────────────────────────────────
  const known = Object.values(belief).filter(v => v === "known").length;
  const unknown = Object.values(belief).filter(v => v === "unknown").length;
  const classified = known + unknown;
  const total = subgraphIds.length;
  const progressPct = total > 0 ? Math.round((classified / total) * 100) : 0;

  // If session is done, show processing
  if (phase === "done" || (!currentNodeId && stats.questionsAnswered > 0)) {
    return (
      <div style={{
        width: "100%", minHeight: "100dvh",
        background: COLORS.bg, fontFamily: FONT,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: COLORS.textDim, fontSize: 14,
      }}>
        {t("quizProcessing", lang)}
      </div>
    );
  }

  return (
    <div style={{
      width: "100%", minHeight: "100dvh",
      background: COLORS.bg, fontFamily: FONT,
      display: "flex", flexDirection: "column",
      alignItems: "center",
      padding: "0 20px",
    }}>
      {/* Top bar */}
      <div style={{
        width: "100%", maxWidth: "min(520px, calc(100% - 32px))",
        padding: "20px 0 0",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <button
          onClick={() => {
            if (stats.questionsAnswered === 0 || window.confirm(t("quizExitConfirm", lang))) {
              onExit();
            }
          }}
          style={{
            padding: "10px 14px", fontSize: 12,
            fontFamily: FONT, borderRadius: 6,
            border: `1px solid ${COLORS.border}`,
            background: "transparent",
            color: COLORS.textDim,
            cursor: "pointer",
          }}
        >{t("quizExit", lang)}</button>
        <span style={{ fontSize: 12, color: COLORS.textFaint }}>
          {t("quizQuestion", lang)} {stats.questionsAnswered + 1} / {GOAL_QUIZ_MAX}
        </span>
      </div>

      {/* Goal banner */}
      <div style={{
        width: "100%", maxWidth: "min(520px, calc(100% - 32px))",
        marginTop: 16,
        padding: "10px 14px",
        borderRadius: 8,
        background: "#4a9eff08",
        border: `1px solid #4a9eff20`,
      }}>
        <div style={{ fontSize: 10, color: COLORS.textFaint, letterSpacing: 0.5, marginBottom: 2 }}>
          {t("goalQuizSub", lang)}
        </div>
        <div style={{ fontSize: 13, color: "#4a9eff", fontWeight: 600 }}>
          {goalLabel}
        </div>
        <div style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 2 }}>
          {total} {t("goalQuizTopics", lang)}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "100%", maxWidth: "min(520px, calc(100% - 32px))",
        marginTop: 12,
      }}>
        <div style={{
          height: 3, borderRadius: 2,
          background: COLORS.border,
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%", borderRadius: 2,
            width: `${progressPct}%`,
            background: "#4a9eff",
            transition: "width 0.5s ease",
          }} />
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: 6, fontSize: 10, color: COLORS.textFaint,
        }}>
          <span>{classified}/{total} {t("quizClassified", lang)}</span>
          <span>{Math.round(pCorrect * 100)}% {t("quizAccuracy", lang)}</span>
        </div>
      </div>

      {/* Question card */}
      <div
        key={fadeKey}
        style={{
          width: "100%", maxWidth: "min(520px, calc(100% - 32px))",
          marginTop: 32,
          animation: "fadeIn 0.25s ease",
        }}
      >
        {/* Topic label */}
        <div style={{
          fontSize: 11, color: COLORS.textFaint,
          marginBottom: 16, letterSpacing: 0.5,
        }}>
          {nodeLabel}
        </div>

        {!question ? (
          /* No question available — self-assess */
          <div>
            <p style={{ fontSize: 15, color: COLORS.textBody, lineHeight: 1.7, marginBottom: 24 }}>
              {t("quizNoQuestion", lang)}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => handleSelfAssess(true)}
                style={{ ...ctaStyle(COLORS.known), flex: 1 }}
              >{t("quizYes", lang)}</button>
              <button
                onClick={() => handleSelfAssess(false)}
                style={{ ...ctaStyle(COLORS.unknown), flex: 1 }}
              >{t("quizNo", lang)}</button>
            </div>
          </div>
        ) : (
          <>
            {/* Question text */}
            <div style={{
              fontSize: 16, color: COLORS.textPrimary,
              lineHeight: 1.7, marginBottom: 28,
            }}>
              {render(question.q)}
            </div>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {shuffledOptions.map((opt, idx) => {
                let bg = "transparent";
                let border = COLORS.border;
                let textColor = COLORS.textBody;

                if (picked === idx && phase === "answering") {
                  bg = "#4a9eff12";
                  border = "#4a9eff60";
                  textColor = "#4a9eff";
                }
                if (phase === "revealed") {
                  if (idx === correctDisplayIndex) {
                    bg = "#27ae6015";
                    border = "#27ae6060";
                    textColor = "#2ecc71";
                  } else if (idx === picked) {
                    bg = `${COLORS.unknown}15`;
                    border = `${COLORS.unknown}60`;
                    textColor = COLORS.unknownHi;
                  } else {
                    textColor = COLORS.textFaint;
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => { if (phase === "answering") setPicked(idx); }}
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontFamily: FONT,
                      cursor: phase === "answering" ? "pointer" : "default",
                      background: bg,
                      border: `1px solid ${border}`,
                      color: textColor,
                      lineHeight: 1.6,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ marginRight: 10, opacity: 0.4, fontSize: 12 }}>
                      {["A", "B", "C", "D"][idx]}
                    </span>
                    {render(opt)}
                  </button>
                );
              })}
            </div>

            {/* Hint (after reveal) */}
            {phase === "revealed" && question.hint && (
              <div style={{
                fontSize: 12, color: COLORS.textDim,
                marginBottom: 20, padding: "12px 14px",
                background: "#ffffff06", borderRadius: 8,
                lineHeight: 1.7, borderLeft: `2px solid ${COLORS.border}`,
              }}>
                {render(question.hint)}
              </div>
            )}

            {/* Action button */}
            {phase === "answering" ? (
              <button
                onClick={handleCheck}
                disabled={picked === null}
                style={{
                  ...ctaStyle("#4a9eff"),
                  width: "100%",
                  opacity: picked === null ? 0.3 : 1,
                }}
              >
                {t("quizCheck", lang)}
                <span style={{ fontSize: 11, opacity: 0.5, marginLeft: 8 }}>Enter</span>
              </button>
            ) : (
              <button
                onClick={handleContinue}
                style={{
                  ...ctaStyle(picked === correctDisplayIndex ? COLORS.known : "#4a9eff"),
                  width: "100%",
                }}
              >
                {t("quizContinue", lang)}
                <span style={{ fontSize: 11, opacity: 0.5, marginLeft: 8 }}>Enter</span>
              </button>
            )}
          </>
        )}
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function ctaStyle(color) {
  return {
    padding: "14px 24px",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: FONT,
    borderRadius: 8,
    border: `1px solid ${color}50`,
    background: `${color}18`,
    color,
    cursor: "pointer",
    transition: "background 0.15s",
  };
}
