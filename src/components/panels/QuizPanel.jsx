import { useState, useMemo } from "react";
import { getQuestion } from "../../data/courseLoader.js";
import { renderLatex } from "../../utils/latex.js";
import { ansBtn, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Quiz card shown in diagnostic mode when a node is selected.
 * Rendered as a centered modal overlay (works on both desktop and mobile).
 *
 * Props:
 *   nodeId         — the node being quizzed
 *   nodes          — array of all nodes (for label + scope)
 *   questionBank   — { nodeId: [{q, options, correct, hint, tests}] }
 *   excludeIndices — question indices already answered this session
 *   onAnswer(correct, question, questionIndex)
 *   onSkip(questionIndex)
 *   lang
 */
export function QuizPanel({ nodeId, nodes, questionBank, onAnswer, onSkip, lang, excludeIndices = [] }) {
  const node  = nodes.find(n => n.id === nodeId);
  const q     = useMemo(() => getQuestion(questionBank, nodeId, excludeIndices), [nodeId, excludeIndices]);
  const color = "#4a9eff";
  const lbl   = node ? (lang === "pl" ? node.labelPl : node.label) : nodeId;

  const [picked,   setPicked]   = useState(null);
  const [revealed, setRevealed] = useState(false);

  const submit  = () => { if (picked !== null) setRevealed(true); };
  const confirm = () => {
    onAnswer(picked === q.correct, q, q.index);
    setPicked(null);
    setRevealed(false);
  };

  const render = (text) => (
    <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />
  );

  return (
    // Full-screen backdrop
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(5,9,18,0.75)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    }}>
      {/* Modal card */}
      <div style={{
        width: "100%",
        maxWidth: 500,
        background: COLORS.surface,
        border: `1px solid ${color}40`,
        borderRadius: 12,
        padding: "20px 24px",
        color: COLORS.textBody,
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        maxHeight: "90vh",
        overflowY: "auto",
        boxSizing: "border-box",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: 12,
        }}>
          <div style={{ color, fontWeight: 700, fontSize: 14 }}>{lbl}</div>
          <button
            onClick={() => onSkip(q?.index)}
            style={{
              background: "none", border: "none",
              color: COLORS.textDim, cursor: "pointer",
              fontSize: 20, lineHeight: 1, padding: "0 4px",
              minWidth: 32, minHeight: 32,
            }}
          >×</button>
        </div>

        {/* Fallback: no question */}
        {!q ? (
          <>
            <div style={{ color: COLORS.textDim, fontSize: 13, marginBottom: 16 }}>
              {t("noQuestion", lang)}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button onClick={() => onAnswer(true, null, null)}  style={ansBtn("#27ae60")}>{t("yesKnow", lang)}</button>
              <button onClick={() => onAnswer(false, null, null)} style={ansBtn("#e74c3c")}>{t("noKnow", lang)}</button>
              <button onClick={() => onSkip(null)}                style={ansBtn("#3a4d63")}>{t("skipBtn", lang)}</button>
            </div>
          </>
        ) : (
          <>
            {/* Question text */}
            <div style={{ fontSize: 14, color: COLORS.textBody, marginBottom: 16, lineHeight: 1.7 }}>
              {render(q.q)}
            </div>

            {/* Answer options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              {q.options.map((opt, i) => {
                let bg = COLORS.bg, border = COLORS.border, txtColor = COLORS.textBody;
                if (picked === i && !revealed) {
                  bg = `${color}22`; border = color; txtColor = color;
                }
                if (revealed) {
                  if (i === q.correct)   { bg = "#27ae6022"; border = "#27ae60"; txtColor = "#2ecc71"; }
                  else if (i === picked) { bg = "#e74c3c22"; border = "#e74c3c"; txtColor = "#ff6b6b"; }
                }
                return (
                  <button
                    key={i}
                    onClick={() => { if (!revealed) setPicked(i); }}
                    style={{
                      textAlign: "left",
                      padding: "12px 14px",
                      borderRadius: 8,
                      fontSize: 13,
                      cursor: revealed ? "default" : "pointer",
                      background: bg,
                      border: `1px solid ${border}`,
                      color: txtColor,
                      lineHeight: 1.5,
                      minHeight: 44,
                    }}
                  >
                    <span style={{ marginRight: 8, opacity: 0.5 }}>{["A","B","C","D"][i]}.</span>
                    {render(opt)}
                  </button>
                );
              })}
            </div>

            {/* Hint */}
            {revealed && q.hint && (
              <div style={{
                fontSize: 12, color: COLORS.textMuted, marginBottom: 14,
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
                style={{ ...ansBtn(color), width: "100%", opacity: picked === null ? 0.4 : 1 }}
              >
                {t("checkAnswer", lang)}
              </button>
            ) : (
              <button
                onClick={confirm}
                style={{ ...ansBtn(picked === q.correct ? "#27ae60" : "#e74c3c"), width: "100%" }}
              >
                {picked === q.correct ? t("knownConfirm", lang) : t("unknownConfirm", lang)}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
