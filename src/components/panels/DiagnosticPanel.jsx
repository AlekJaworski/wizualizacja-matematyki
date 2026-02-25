import { RAW_NODES } from "../../data/curriculum.js";
import { SCOPE_LABELS } from "../../data/sections.js";
import { t } from "../../i18n.js";

/**
 * Summary sidebar for quick diagnostic mode.
 *
 * Three states:
 *   1. Not started  — prompt the student to click any node or accept the suggestion
 *   2. In progress  — show frontier sorted by degree (best question highlighted)
 *   3. Complete     — session summary: known vs unknown counts, study plan prompt
 */
export function DiagnosticPanel({
  belief,
  frontier,
  visibleFrontier,
  hasStarted,
  nextSuggestedId,
  sessionComplete,
  adjacency,
  expectedRemaining,
  pCorrect,
  questionsAnswered,
  nodes,
  lang,
  onReset,
  onNodeClick,
}) {
  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  const known   = RAW_NODES.filter(n => belief[n.id] === "known");
  const unknown = RAW_NODES.filter(n => belief[n.id] === "unknown");
  const total   = RAW_NODES.length;

  const stats = [
    { label: t("statKnown",   lang), count: known.length,            color: "#27ae60" },
    { label: t("statUnknown", lang), count: unknown.length,           color: "#e74c3c" },
    { label: t("statRemaining",lang), count: expectedRemaining ?? "-", color: "#4a9eff" },
  ];

  const accuracyPct = pCorrect ? Math.round(pCorrect * 100) : 50;

  return (
    <div style={{
      position: "absolute", right: 16, top: 16, width: 230,
      background: "#0d1520ee", backdropFilter: "blur(6px)",
      border: "1px solid #1e2d45", borderRadius: 8,
      padding: "12px 14px", fontSize: 11, color: "#c8d6e5",
      zIndex: 10, maxHeight: "80vh", overflowY: "auto",
    }}>
      {/* Header */}
      <div style={{
        fontWeight: 700, fontSize: 12, marginBottom: 10, color: "#f5f6fa",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>{t("diagHeader", lang)} {sessionComplete ? "✓" : ""}</span>
        <button
          onClick={onReset}
          style={{
            fontSize: 9, padding: "2px 7px", borderRadius: 4, cursor: "pointer",
            background: "transparent", border: "1px solid #3a4d63", color: "#6b7d9a",
          }}
        >{t("reset", lang)}</button>
      </div>

      {/* Stat badges */}
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {stats.map(({ label, count, color }) => (
          <div key={label} style={{
            flex: 1, textAlign: "center",
            background: `${color}18`, borderRadius: 5,
            padding: "5px 0", border: `1px solid ${color}40`,
          }}>
            <div style={{ color, fontWeight: 700, fontSize: 15 }}>{count}</div>
            <div style={{ color: "#6b7d9a", fontSize: 8 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Progress line */}
      {!sessionComplete && hasStarted && (
        <div style={{
          fontSize: 9, color: "#6b7d9a", marginBottom: 10,
          padding: "6px 8px", background: "#ffffff08", borderRadius: 4,
          display: "flex", justifyContent: "space-between",
        }}>
          <span>{t("answered", lang)}: <span style={{ color: "#f5f6fa" }}>{questionsAnswered}</span></span>
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
            <div style={{ color: "#2ecc71", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>
              {t("sessionDone", lang)}
            </div>
            <div style={{ color: "#6b7d9a", fontSize: 9, lineHeight: 1.6 }}>
              {t("sessionDoneSub", lang)} <span style={{ color: "#f5f6fa" }}>{questionsAnswered}</span> {t("sessionDoneQ", lang)}.{" "}
              {t("sessionDoneClass", lang)} {known.length + unknown.length}/{total}.<br />
              {t("sessionDoneAcc", lang)}: <span style={{ color: "#4a9eff" }}>{accuracyPct}%</span>.{" "}
              {t("sessionDoneKnown", lang)} <span style={{ color: "#2ecc71" }}>{known.length}</span>,{" "}
              {t("sessionDoneStudy", lang)} <span style={{ color: "#e74c3c" }}>{unknown.length}</span>.
            </div>
          </div>

          {unknown.length > 0 && (
            <>
              <div style={{ color: "#e74c3c", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
                {t("toStudy", lang)} ({unknown.length})
              </div>
              {RAW_NODES
                .filter(n => belief[n.id] === "unknown")
                .filter(n => (adjacency.prereqs[n.id] ?? []).every(p => belief[p] === "known"))
                .slice(0, 8)
                .map(n => (
                  <div key={n.id} style={{
                    padding: "5px 8px", marginBottom: 3, borderRadius: 4,
                    background: "#e74c3c12", border: "1px solid #e74c3c30",
                    fontSize: 9, color: "#ff8a8a", lineHeight: 1.4,
                  }}>
                    {getLabel(n.id)}
                    <div style={{ fontSize: 8, color: "#6b7d9a", marginTop: 1 }}>
                      {SCOPE_LABELS[byId[n.id]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                    </div>
                  </div>
                ))}
            </>
          )}

          {known.length > 0 && (
            <div style={{ marginTop: 8, color: "#27ae60", fontSize: 9 }}>
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
              <div style={{ color: "#4a9eff", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
                {t("startHere", lang)}
              </div>
              <SuggestedNode
                id={nextSuggestedId}
                label={getLabel(nextSuggestedId)}
                scope={SCOPE_LABELS[byId[nextSuggestedId]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                subtitle={t("startHereSub", lang)}
                onClick={() => onNodeClick?.(nextSuggestedId)}
              />
            </>
          )}
          <div style={{ fontSize: 9, color: "#3a4d63", marginTop: 8, lineHeight: 1.5 }}>
            {t("clickAnyNode", lang)}
          </div>
        </div>
      )}

      {/* IN PROGRESS — frontier */}
      {!sessionComplete && hasStarted && visibleFrontier.length > 0 && (
        <>
          <div style={{ color: "#f39c12", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
            {t("whatNext", lang)}
          </div>
          {visibleFrontier.map(id => {
            const isNext = id === nextSuggestedId;
            return (
              <div
                key={id}
                onClick={() => onNodeClick?.(id)}
                style={{
                  padding: "6px 8px", marginBottom: 3, borderRadius: 4, cursor: "pointer",
                  background: isNext ? "#4a9eff18" : "#f39c1215",
                  border: `1px solid ${isNext ? "#4a9eff55" : "#f39c1240"}`,
                  fontSize: 10,
                  color: isNext ? "#a8d4ff" : "#f5d78e",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = isNext ? "#4a9eff30" : "#f39c1230"}
                onMouseLeave={e => e.currentTarget.style.background = isNext ? "#4a9eff18" : "#f39c1215"}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{getLabel(id)}</span>
                  <span style={{ fontSize: 9, opacity: 0.7 }}>{isNext ? "★" : "→"}</span>
                </div>
                <div style={{ fontSize: 8, color: "#6b7d9a", marginTop: 1 }}>
                  {SCOPE_LABELS[byId[id]?.scope]?.[lang === "pl" ? "pl" : "en"]}
                  {isNext && <span style={{ color: "#4a9eff88", marginLeft: 4 }}>{t("best", lang)}</span>}
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* IN PROGRESS — known list */}
      {!sessionComplete && known.length > 0 && (
        <>
          <div style={{ color: "#27ae60", fontSize: 10, fontWeight: 600, margin: "10px 0 4px" }}>
            ✓ {t("knownList", lang)} ({known.length})
          </div>
          {known.map(n => (
            <div key={n.id} style={{ fontSize: 9, color: "#6dbb87", paddingLeft: 4, lineHeight: 1.7 }}>
              {getLabel(n.id)}
            </div>
          ))}
        </>
      )}

      {/* Usage hints */}
      {!sessionComplete && (
        <div style={{ marginTop: 12, color: "#3a4d63", fontSize: 9, lineHeight: 1.5 }}>
          {t("hintClick", lang)}<br />
          {t("hintShift", lang)}<br />
          {t("hintGreen", lang)}
        </div>
      )}
    </div>
  );
}

function SuggestedNode({ id, label, scope, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "8px 10px", borderRadius: 5, cursor: "pointer",
        background: "#4a9eff18", border: "1px solid #4a9eff55",
        fontSize: 10, color: "#a8d4ff", transition: "background 0.15s",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#4a9eff30"}
      onMouseLeave={e => e.currentTarget.style.background = "#4a9eff18"}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ opacity: 0.5 }}>→</span>
      </div>
      <div style={{ fontSize: 8, color: "#6b7d9a", marginTop: 2 }}>
        {scope}{subtitle ? ` · ${subtitle}` : ""}
      </div>
    </div>
  );
}
