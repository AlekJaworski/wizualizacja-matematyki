import { t } from "../../i18n.js";

/**
 * Sidebar panel for deep-dive diagnostic mode.
 */
export function DeepDivePanel({
  nodes, lang, targetNode,
  subgraphIds, ddClassification, betaBeliefs,
  ddComplete, ddNextNodeId,
  questionsAnswered,
  onNodeClick, onReset,
}) {
  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  const known    = subgraphIds.filter(id => ddClassification[id] === "known");
  const unknown  = subgraphIds.filter(id => ddClassification[id] === "unknown");
  const uncertain = subgraphIds.filter(id => ddClassification[id] === "uncertain");

  const total = subgraphIds.length;
  const classified = known.length + unknown.length;
  const pct = total > 0 ? Math.round((classified / total) * 100) : 0;

  const targetLabel = getLabel(targetNode);

  return (
    <div style={{
      position: "absolute", right: 16, top: 16, width: 240,
      background: "#0d1520ee", backdropFilter: "blur(6px)",
      border: "1px solid #1e2d45", borderRadius: 8,
      padding: "12px 14px", fontSize: 11, color: "#c8d6e5",
      zIndex: 10, maxHeight: "80vh", overflowY: "auto",
    }}>
      {/* Header */}
      <div style={{
        fontWeight: 700, fontSize: 12, marginBottom: 4, color: "#f5f6fa",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>{t("deepDiveHeader", lang)} {ddComplete ? "✓" : ""}</span>
        <button
          onClick={onReset}
          style={{
            fontSize: 9, padding: "2px 7px", borderRadius: 4, cursor: "pointer",
            background: "transparent", border: "1px solid #3a4d63", color: "#6b7d9a",
          }}
        >{t("reset", lang)}</button>
      </div>

      {/* Target */}
      <div style={{
        marginBottom: 10, padding: "6px 8px", borderRadius: 5,
        background: "#4a9eff12", border: "1px solid #4a9eff40",
      }}>
        <div style={{ fontSize: 9, color: "#4a9eff88", marginBottom: 2 }}>{t("deepDiveTarget", lang)}</div>
        <div style={{ fontSize: 11, color: "#a8d4ff", fontWeight: 600 }}>{targetLabel}</div>
        <div style={{ fontSize: 9, color: "#6b7d9a", marginTop: 1 }}>
          {total} {t("deepDiveNodes", lang)}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ height: 5, borderRadius: 3, background: "#0a0e17", overflow: "hidden", marginBottom: 4 }}>
          <div style={{
            height: "100%", borderRadius: 3,
            width: `${pct}%`,
            background: ddComplete ? "#27ae60" : "#4a9eff",
            transition: "width 0.4s ease",
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#6b7d9a" }}>
          <span>{t("classified", lang)}: <span style={{ color: "#f5f6fa" }}>{classified}/{total}</span></span>
          <span>{t("questions", lang)}: <span style={{ color: "#f5f6fa" }}>{questionsAnswered}</span></span>
        </div>
      </div>

      {/* RESULTS (complete) */}
      {ddComplete && (
        <div>
          <div style={{
            background: known.length > unknown.length ? "#27ae6018" : "#e74c3c18",
            border: `1px solid ${known.length > unknown.length ? "#27ae6050" : "#e74c3c50"}`,
            borderRadius: 6, padding: "10px 12px", marginBottom: 10,
          }}>
            <div style={{
              color: known.length > unknown.length ? "#2ecc71" : "#ff6b6b",
              fontWeight: 700, fontSize: 12, marginBottom: 4,
            }}>
              {t("diagReady", lang)}
            </div>
            <div style={{ color: "#6b7d9a", fontSize: 9, lineHeight: 1.6 }}>
              {t("diagKnown", lang)}: <span style={{ color: "#2ecc71" }}>{known.length}</span>{" / "}
              {t("diagStudy", lang)}: <span style={{ color: "#ff6b6b" }}>{unknown.length}</span>{" / "}
              {t("diagTotal", lang)}: {total}
            </div>
          </div>

          {unknown.length > 0 && (
            <>
              <div style={{ color: "#e74c3c", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
                {t("studyThese", lang)}
              </div>
              {subgraphIds
                .filter(id => ddClassification[id] === "unknown")
                .slice(0, 8)
                .map(id => (
                  <NodeCard key={id} id={id} label={getLabel(id)}
                    scope={byId[id]?.scope} classification="unknown"
                    beta={betaBeliefs[id]}
                  />
                ))}
            </>
          )}

          {known.length > 0 && (
            <>
              <div style={{ color: "#27ae60", fontSize: 10, fontWeight: 600, margin: "8px 0 4px" }}>
                {t("mastered", lang)}
              </div>
              {subgraphIds
                .filter(id => ddClassification[id] === "known")
                .map(id => (
                  <NodeCard key={id} id={id} label={getLabel(id)}
                    scope={byId[id]?.scope} classification="known"
                    beta={betaBeliefs[id]}
                  />
                ))}
            </>
          )}
        </div>
      )}

      {/* IN PROGRESS */}
      {!ddComplete && (
        <>
          {ddNextNodeId && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: "#4a9eff", fontSize: 10, fontWeight: 600, marginBottom: 4 }}>
                {t("nextQuestion", lang)}
              </div>
              <div
                onClick={() => onNodeClick?.(ddNextNodeId)}
                style={{
                  padding: "7px 9px", borderRadius: 5, cursor: "pointer",
                  background: "#4a9eff18", border: "1px solid #4a9eff55",
                  fontSize: 10, color: "#a8d4ff",
                }}
              >
                {getLabel(ddNextNodeId)}
                <div style={{ fontSize: 8, color: "#6b7d9a", marginTop: 2 }}>
                  {t("confidence", lang)}: {formatConfidence(betaBeliefs[ddNextNodeId])}
                </div>
              </div>
            </div>
          )}

          {uncertain.length > 0 && (
            <>
              <div style={{ color: "#f39c12", fontSize: 10, fontWeight: 600, marginBottom: 4 }}>
                {t("unclassified", lang)} ({uncertain.length})
              </div>
              {uncertain.map(id => (
                <div
                  key={id}
                  onClick={() => onNodeClick?.(id)}
                  style={{
                    padding: "5px 8px", marginBottom: 3, borderRadius: 4, cursor: "pointer",
                    background: id === ddNextNodeId ? "#4a9eff18" : "#f39c1212",
                    border: `1px solid ${id === ddNextNodeId ? "#4a9eff55" : "#f39c1230"}`,
                    fontSize: 9, color: id === ddNextNodeId ? "#a8d4ff" : "#f5d78e",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}
                >
                  <span>{getLabel(id)}</span>
                  <ConfidenceBar beta={betaBeliefs[id]} />
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

function formatConfidence(beta) {
  if (!beta) return "50%";
  const mean = beta.alpha / (beta.alpha + beta.beta);
  return `${Math.round(mean * 100)}%`;
}

function ConfidenceBar({ beta }) {
  const mean = beta ? beta.alpha / (beta.alpha + beta.beta) : 0.5;
  const strength = beta ? beta.alpha + beta.beta : 2;
  const opacity = Math.min(1, (strength - 2) / 4);
  const color = mean > 0.6 ? "#27ae60" : mean < 0.4 ? "#e74c3c" : "#f39c12";

  return (
    <div style={{ width: 30, height: 4, borderRadius: 2, background: "#0a0e17", overflow: "hidden", flexShrink: 0 }}>
      <div style={{
        height: "100%", borderRadius: 2,
        width: `${Math.round(mean * 100)}%`,
        background: color,
        opacity: 0.4 + opacity * 0.6,
        transition: "width 0.3s ease",
      }} />
    </div>
  );
}

function NodeCard({ id, label, scope, classification, beta }) {
  const color = classification === "known" ? "#27ae60" : "#e74c3c";
  return (
    <div style={{
      padding: "4px 7px", marginBottom: 3, borderRadius: 4,
      background: `${color}10`, border: `1px solid ${color}30`,
      fontSize: 9, color: classification === "known" ? "#6dbb87" : "#ff8a8a",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <span>{label}</span>
      <ConfidenceBar beta={beta} />
    </div>
  );
}
