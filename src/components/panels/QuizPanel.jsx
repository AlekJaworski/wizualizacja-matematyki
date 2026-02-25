import { useState, useMemo } from "react";
import { getQuestion } from "../../data/courseLoader.js";
import { renderLatex } from "../../utils/latex.js";
import { panelStyle, ansBtn } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Quiz card shown in diagnostic mode when a node is selected.
 * Picks a random question from the node's question pool (stable per mount).
 * Presents a multiple-choice question, reveals the answer, and
 * calls onAnswer(correct, question, index) to update the belief state.
 *
 * Props:
 *   nodeId         — the node being quizzed
 *   nodes          — array of all nodes (for label + scope)
 *   questionBank   — { nodeId: [{q, options, correct, hint, tests}] }
 *   excludeIndices — question indices already answered this session
 *   onAnswer(correct, question, questionIndex)
 *   onSkip()
 *   lang
 */
export function QuizPanel({ nodeId, nodes, questionBank, onAnswer, onSkip, lang, excludeIndices = [] }) {
  const node  = nodes.find(n => n.id === nodeId);
  // Pick once per nodeId mount — re-rolls when a different node is opened
  const q     = useMemo(() => getQuestion(questionBank, nodeId, excludeIndices), [nodeId, excludeIndices]);
  // Use a fallback colour if scopeColors not provided
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

  // Helper to render text with LaTeX
  const render = (text) => (
    <span dangerouslySetInnerHTML={{ __html: renderLatex(text) }} />
  );

  // Fallback when no question exists for this node
  if (!q) {
    return (
      <div style={panelStyle(color)}>
        <div style={{ color, fontWeight: 700, marginBottom: 8 }}>{lbl}</div>
        <div style={{ color: "#6b7d9a", fontSize: 11, marginBottom: 12 }}>
          {t("noQuestion", lang)}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => onAnswer(true,  null)} style={ansBtn("#27ae60")}>{t("yesKnow", lang)}</button>
          <button onClick={() => onAnswer(false, null)} style={ansBtn("#e74c3c")}>{t("noKnow", lang)}</button>
          <button onClick={onSkip}                      style={ansBtn("#3a4d63")}>{t("skipBtn", lang)}</button>
        </div>
      </div>
    );
  }

  return (
    <div style={panelStyle(color)}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 8,
      }}>
        <div style={{ color, fontWeight: 700, fontSize: 12 }}>{lbl}</div>
        <button
          onClick={onSkip}
          style={{
            background: "none", border: "none",
            color: "#3a4d63", cursor: "pointer", fontSize: 16, lineHeight: 1,
          }}
        >×</button>
      </div>

      {/* Question text */}
      <div style={{ fontSize: 11, color: "#c8d6e5", marginBottom: 12, lineHeight: 1.6 }}>
        {render(q.q)}
      </div>

      {/* Answer options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
        {q.options.map((opt, i) => {
          let bg = "#0d1520", border = "#1e2d45", txtColor = "#c8d6e5";
          if (picked === i && !revealed) {
            bg = `${color}22`; border = color; txtColor = color;
          }
          if (revealed) {
            if (i === q.correct)      { bg = "#27ae6022"; border = "#27ae60"; txtColor = "#2ecc71"; }
            else if (i === picked)    { bg = "#e74c3c22"; border = "#e74c3c"; txtColor = "#ff6b6b"; }
          }
          return (
            <button
              key={i}
              onClick={() => { if (!revealed) setPicked(i); }}
              style={{
                textAlign: "left", padding: "7px 10px", borderRadius: 5, fontSize: 10,
                cursor: revealed ? "default" : "pointer",
                background: bg, border: `1px solid ${border}`, color: txtColor,
                lineHeight: 1.4,
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
          fontSize: 10, color: "#8a9dbe", marginBottom: 10,
          padding: "6px 8px", background: "#ffffff08", borderRadius: 4, lineHeight: 1.5,
        }}>
          {render(q.hint)}
        </div>
      )}

      {/* Action button */}
      {!revealed ? (
        <button
          onClick={submit}
          disabled={picked === null}
          style={{ ...ansBtn(color), width: "100%", opacity: picked === null ? 0.4 : 1 }}
        >
          {t("checkAnswer", lang)}
        </button>
      ) : (
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={confirm}
            style={{ ...ansBtn(picked === q.correct ? "#27ae60" : "#e74c3c"), flex: 1 }}
          >
            {picked === q.correct ? t("knownConfirm", lang) : t("unknownConfirm", lang)}
          </button>
        </div>
      )}
    </div>
  );
}
