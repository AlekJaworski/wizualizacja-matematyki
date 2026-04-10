import { useState, useMemo, useEffect } from "react";
import { getQuestion } from "../../data/courseLoader.js";
import { renderLatex } from "../../utils/latex.js";
import { Permutation } from "../../utils/permutation.js";
import { ansBtn, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Quiz card shown in diagnostic mode when a node is selected.
 * Rendered as a non-blocking side panel (desktop) or bottom sheet (mobile).
 *
 * Props:
 *   nodeId         — the node being quizzed
 *   nodes          — array of all nodes (for label + scope)
 *   questionBank   — { nodeId: [{q, options, correct, hint, tests}] }
 *   excludeIndices — question indices already answered this session
 *   onAnswer(correct, question, questionIndex)
 *   onSkip(questionIndex)
 *   lang
 *   isMobile
 */
export function QuizPanel({ nodeId, nodes, questionBank, onAnswer, onSkip, lang, excludeIndices = [], isMobile }) {
  const node  = nodes.find(n => n.id === nodeId);
  const q     = useMemo(() => getQuestion(questionBank, nodeId, excludeIndices), [nodeId, excludeIndices]);
  const color = "#4a9eff";
  const lbl   = node ? (lang === "pl" ? node.labelPl : node.label) : nodeId;

  // Stable shuffle for this question
  const perm = useMemo(
    () => q ? Permutation.random(q.options.length) : null,
    [q]
  );
  const shuffledOptions = useMemo(
    () => perm ? perm.apply(q.options) : [],
    [perm, q]
  );
  const correctDisplayIndex = useMemo(
    () => perm ? perm.displayIndex(q.correct) : -1,
    [perm, q]
  );

  const [picked,   setPicked]   = useState(null);
  const [revealed, setRevealed] = useState(false);

  const submit  = () => { if (picked !== null) setRevealed(true); };
  const confirm = () => {
    onAnswer(picked === correctDisplayIndex, q, q.index);
    setPicked(null);
    setRevealed(false);
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onSkip(q?.index ?? -1); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onSkip, q]);

  const render = (text) => (
    <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />
  );

  const panelStyle = isMobile ? {
    position: "fixed",
    left: 0, right: 0, bottom: 0,
    maxHeight: "70vh",
    background: COLORS.surface,
    border: `1px solid ${color}40`,
    borderRadius: "14px 14px 0 0",
    padding: "14px 16px 24px",
    color: COLORS.textBody,
    boxShadow: "0 -8px 32px rgba(0,0,0,0.5)",
    overflowY: "auto",
    zIndex: 30,
    boxSizing: "border-box",
  } : {
    position: "absolute",
    left: 16,
    top: 16,
    width: 340,
    maxHeight: "calc(100vh - 120px)",
    background: COLORS.surfaceHi,
    backdropFilter: "blur(6px)",
    border: `1px solid ${color}40`,
    borderRadius: 10,
    padding: "14px 16px",
    color: COLORS.textBody,
    boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
    overflowY: "auto",
    zIndex: 30,
    boxSizing: "border-box",
  };

  return (
    <div style={panelStyle}>
      {/* Mobile drag handle */}
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: COLORS.textFaint }} />
        </div>
      )}

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 10,
      }}>
        <div style={{ color, fontWeight: 700, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{lbl}</div>
        <button
          onClick={() => onSkip(q?.index ?? -1)}
          style={{
            background: `${COLORS.textDim}22`, border: `1px solid ${COLORS.border}`,
            color: COLORS.textBody, cursor: "pointer",
            fontSize: 13, lineHeight: 1, padding: "4px 10px",
            borderRadius: 6, fontWeight: 600,
            minWidth: 32, minHeight: 28,
          }}
          title="Close (Esc)"
        >{t("close", lang)}</button>
      </div>

      {/* Fallback: no question */}
      {!q ? (
        <>
          <div style={{ color: COLORS.textDim, fontSize: 12, marginBottom: 12 }}>
            {t("noQuestion", lang)}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button onClick={() => onAnswer(true, null, -1)}  style={{ ...ansBtn("#27ae60"), fontSize: 12, padding: "8px 14px" }}>{t("yesKnow", lang)}</button>
            <button onClick={() => onAnswer(false, null, -1)} style={{ ...ansBtn("#e74c3c"), fontSize: 12, padding: "8px 14px" }}>{t("noKnow", lang)}</button>
            <button onClick={() => onSkip(-1)}                style={{ ...ansBtn("#3a4d63"), fontSize: 12, padding: "8px 14px" }}>{t("skipBtn", lang)}</button>
          </div>
        </>
      ) : (
        <>
          {/* Question text */}
          <div style={{ fontSize: 13, color: COLORS.textBody, marginBottom: 12, lineHeight: 1.65 }}>
            {render(q.q)}
          </div>

          {/* Answer options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {shuffledOptions.map((opt, displayIdx) => {
              let bg = COLORS.bg, border = COLORS.border, txtColor = COLORS.textBody;
              if (picked === displayIdx && !revealed) {
                bg = `${color}22`; border = color; txtColor = color;
              }
              if (revealed) {
                if (displayIdx === correctDisplayIndex)   { bg = "#27ae6022"; border = "#27ae60"; txtColor = "#2ecc71"; }
                else if (displayIdx === picked)           { bg = "#e74c3c22"; border = "#e74c3c"; txtColor = "#ff6b6b"; }
              }
              return (
                <button
                  key={displayIdx}
                  onClick={() => { if (!revealed) setPicked(displayIdx); }}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: 7,
                    fontSize: 12,
                    cursor: revealed ? "default" : "pointer",
                    background: bg,
                    border: `1px solid ${border}`,
                    color: txtColor,
                    lineHeight: 1.5,
                    minHeight: 38,
                  }}
                >
                  <span style={{ marginRight: 6, opacity: 0.5 }}>{["A","B","C","D"][displayIdx]}.</span>
                  {render(opt)}
                </button>
              );
            })}
          </div>

          {/* Hint */}
          {revealed && q.hint && (
            <div style={{
              fontSize: 11, color: COLORS.textMuted, marginBottom: 10,
              padding: "8px 10px", background: "#ffffff08", borderRadius: 6, lineHeight: 1.6,
            }}>
              {render(q.hint)}
            </div>
          )}

          {/* Action */}
          {!revealed ? (
            <button
              onClick={submit}
              disabled={picked === null}
              style={{ ...ansBtn(color), width: "100%", opacity: picked === null ? 0.4 : 1, fontSize: 13 }}
            >
              {t("checkAnswer", lang)}
            </button>
          ) : (
            <button
              onClick={confirm}
              style={{ ...ansBtn(picked === correctDisplayIndex ? "#27ae60" : "#e74c3c"), width: "100%", fontSize: 13 }}
            >
              {picked === correctDisplayIndex ? t("knownConfirm", lang) : t("unknownConfirm", lang)}
            </button>
          )}
        </>
      )}
    </div>
  );
}
