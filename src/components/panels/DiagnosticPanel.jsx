import { t } from "../../i18n.js";
import { COLORS } from "../../styles/tokens.js";
import { classifyBelief } from "../../engine/belief.js";

const PANEL_DESKTOP = {
  position: "absolute", right: 16, top: 16, width: 230,
  background: "#0d1520ee", backdropFilter: "blur(6px)",
  border: "1px solid #1e2d45", borderRadius: 8,
  padding: "12px 14px", fontSize: 11, color: "#c8d6e5",
  zIndex: 10, maxHeight: "80vh", overflowY: "auto",
};

export function DiagnosticPanel({
  belief, frontier, visibleFrontier, hasStarted,
  nextSuggestedId, sessionComplete, adjacency,
  expectedRemaining, pCorrect, questionsAnswered,
  nodes, lang, onReset, onNodeClick, SCOPE_LABELS,
  isMobile,
}) {
  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  const classification = classifyBelief(belief);
  const known   = nodes.filter(n => classification[n.id] === "known");
  const unknown = nodes.filter(n => classification[n.id] === "unknown");
  const total   = nodes.length;

  const stats = [
    { label: t("statKnown",    lang), count: known.length,            color: "#27ae60" },
    { label: t("statUnknown",  lang), count: unknown.length,          color: "#e74c3c" },
    { label: t("statRemaining",lang), count: expectedRemaining ?? "-", color: "#4a9eff" },
  ];

  const accuracyPct = pCorrect ? Math.round(pCorrect * 100) : 50;
  const fs = isMobile ? 13 : 11;
  const fsSmall = isMobile ? 11 : 9;

  const content = (
    <>
      {/* Header */}
      <div style={{
        fontWeight: 700, fontSize: isMobile ? 14 : 12, marginBottom: 10, color: COLORS.textPrimary,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>{t("diagHeader", lang)} {sessionComplete ? "✓" : ""}</span>
        <button onClick={onReset} style={{
          fontSize: fsSmall, padding: "4px 10px", borderRadius: 4, cursor: "pointer",
          background: "transparent", border: `1px solid ${COLORS.textFaint}`, color: COLORS.textDim,
          minHeight: isMobile ? 32 : "auto",
        }}>{t("reset", lang)}</button>
      </div>

      {/* Stat badges */}
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {stats.map(({ label, count, color }) => (
          <div key={label} style={{
            flex: 1, textAlign: "center", background: `${color}18`,
            borderRadius: 5, padding: "6px 0", border: `1px solid ${color}40`,
          }}>
            <div style={{ color, fontWeight: 700, fontSize: isMobile ? 20 : 15 }}>{count}</div>
            <div style={{ color: COLORS.textDim, fontSize: fsSmall }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Progress line */}
      {!sessionComplete && hasStarted && (
        <div style={{
          fontSize: fsSmall, color: COLORS.textDim, marginBottom: 10,
          padding: "6px 8px", background: "#ffffff08", borderRadius: 4,
          display: "flex", justifyContent: "space-between", gap: 4, flexWrap: "wrap",
        }}>
          <span>{t("answered", lang)}: <span style={{ color: COLORS.textPrimary }}>{questionsAnswered}</span></span>
          <span>{t("estimated", lang)}: <span style={{ color: "#4a9eff" }}>~{expectedRemaining ?? "-"}</span></span>
          <span>{t("accuracy", lang)}: <span style={{ color: "#4a9eff" }}>{accuracyPct}%</span></span>
        </div>
      )}

      {/* SESSION COMPLETE */}
      {sessionComplete && (
        <div>
          <div style={{
            background: "#27ae6018", border: "1px solid #27ae6050",
            borderRadius: 6, padding: "10px 12px", marginBottom: 10,
          }}>
            <div style={{ color: "#2ecc71", fontWeight: 700, fontSize: isMobile ? 14 : 12, marginBottom: 4 }}>
              {t("sessionDone", lang)}
            </div>
            <div style={{ color: COLORS.textDim, fontSize: fsSmall, lineHeight: 1.6 }}>
              {t("sessionDoneSub", lang)} <span style={{ color: COLORS.textPrimary }}>{questionsAnswered}</span> {t("sessionDoneQ", lang)}.{" "}
              {t("sessionDoneClass", lang)} {known.length + unknown.length}/{total}.<br />
              {t("sessionDoneAcc", lang)}: <span style={{ color: "#4a9eff" }}>{accuracyPct}%</span>.{" "}
              {t("sessionDoneKnown", lang)} <span style={{ color: "#2ecc71" }}>{known.length}</span>,{" "}
              {t("sessionDoneStudy", lang)} <span style={{ color: "#e74c3c" }}>{unknown.length}</span>.
            </div>
          </div>
          {unknown.length > 0 && (
            <>
              <div style={{ color: "#e74c3c", fontSize: fs, fontWeight: 600, marginBottom: 5 }}>
                {t("toStudy", lang)} ({unknown.length})
              </div>
              {nodes
                .filter(n => belief[n.id] === "unknown")
                .filter(n => (adjacency.prereqs[n.id] ?? []).every(p => belief[p] === "known"))
                .slice(0, 8)
                .map(n => (
                  <div key={n.id} style={{
                    padding: isMobile ? "8px 10px" : "5px 8px", marginBottom: 4, borderRadius: 4,
                    background: "#e74c3c12", border: "1px solid #e74c3c30",
                    fontSize: fs, color: "#ff8a8a", lineHeight: 1.4,
                  }}>
                    {getLabel(n.id)}
                    <div style={{ fontSize: fsSmall, color: COLORS.textDim, marginTop: 1 }}>
                      {SCOPE_LABELS?.[byId[n.id]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                    </div>
                  </div>
                ))}
            </>
          )}
          {known.length > 0 && (
            <div style={{ marginTop: 8, color: "#27ae60", fontSize: fs }}>
              ✓ {t("knownList", lang)} {known.length}
            </div>
          )}
        </div>
      )}

      {/* NOT STARTED */}
      {!sessionComplete && !hasStarted && (
        <div style={{ marginBottom: 10 }}>
          {nextSuggestedId && (
            <>
              <div style={{ color: "#4a9eff", fontSize: fs, fontWeight: 600, marginBottom: 5 }}>
                {t("startHere", lang)}
              </div>
              <div
                onClick={() => onNodeClick?.(nextSuggestedId)}
                style={{
                  padding: isMobile ? "12px 14px" : "8px 10px", borderRadius: 5, cursor: "pointer",
                  background: "#4a9eff18", border: "1px solid #4a9eff55",
                  fontSize: fs, color: "#a8d4ff",
                  minHeight: isMobile ? 44 : "auto",
                }}
              >
                <div style={{ fontWeight: 600 }}>{getLabel(nextSuggestedId)}</div>
                <div style={{ fontSize: fsSmall, color: COLORS.textDim, marginTop: 2 }}>
                  {SCOPE_LABELS?.[byId[nextSuggestedId]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                  {" · "}{t("startHereSub", lang)}
                </div>
              </div>
            </>
          )}
          <div style={{ fontSize: fsSmall, color: COLORS.textFaint, marginTop: 8, lineHeight: 1.5 }}>
            {t("clickAnyNode", lang)}
          </div>
        </div>
      )}

      {/* IN PROGRESS — frontier */}
      {!sessionComplete && hasStarted && visibleFrontier.length > 0 && (
        <>
          <div style={{ color: "#f39c12", fontSize: fs, fontWeight: 600, marginBottom: 5 }}>
            {t("whatNext", lang)}
          </div>
          {visibleFrontier.map(id => {
            const isNext = id === nextSuggestedId;
            return (
              <div
                key={id}
                onClick={() => onNodeClick?.(id)}
                style={{
                  padding: isMobile ? "10px 12px" : "6px 8px",
                  marginBottom: 4, borderRadius: 4, cursor: "pointer",
                  background: isNext ? "#4a9eff18" : "#f39c1215",
                  border: `1px solid ${isNext ? "#4a9eff55" : "#f39c1240"}`,
                  fontSize: fs, color: isNext ? "#a8d4ff" : "#f5d78e",
                  minHeight: isMobile ? 44 : "auto",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <div>
                  <div>{getLabel(id)}</div>
                  <div style={{ fontSize: fsSmall, color: COLORS.textDim, marginTop: 1 }}>
                    {SCOPE_LABELS?.[byId[id]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                    {isNext && <span style={{ color: "#4a9eff88", marginLeft: 4 }}>{t("best", lang)}</span>}
                  </div>
                </div>
                <span style={{ opacity: 0.7 }}>{isNext ? "★" : "→"}</span>
              </div>
            );
          })}
        </>
      )}

      {/* IN PROGRESS — known list */}
      {!sessionComplete && known.length > 0 && (
        <>
          <div style={{ color: "#27ae60", fontSize: fs, fontWeight: 600, margin: "10px 0 4px" }}>
            ✓ {t("knownList", lang)} ({known.length})
          </div>
          {known.map(n => (
            <div key={n.id} style={{ fontSize: fsSmall, color: "#6dbb87", paddingLeft: 4, lineHeight: 1.8 }}>
              {getLabel(n.id)}
            </div>
          ))}
        </>
      )}

      {/* Usage hints — desktop only */}
      {!sessionComplete && !isMobile && (
        <div style={{ marginTop: 12, color: COLORS.textFaint, fontSize: fsSmall, lineHeight: 1.5 }}>
          {t("hintClick", lang)}<br />
          {t("hintShift", lang)}<br />
          {t("hintGreen", lang)}
        </div>
      )}
    </>
  );

  if (isMobile) {
    return (
      <div style={{
        position: "fixed", left: 0, right: 0, bottom: 0,
        background: "#0d1520f5", backdropFilter: "blur(8px)",
        borderTop: "1px solid #1e2d45", borderRadius: "14px 14px 0 0",
        padding: "16px 16px 24px",
        zIndex: 30, maxHeight: "65vh", overflowY: "auto",
      }}>
        {/* drag handle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: COLORS.textFaint }} />
        </div>
        {content}
      </div>
    );
  }

  return <div style={PANEL_DESKTOP}>{content}</div>;
}
