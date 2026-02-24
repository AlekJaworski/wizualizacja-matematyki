import { RAW_NODES } from "../../data/curriculum.js";
import { SCOPE_LABELS } from "../../data/sections.js";

/**
 * Summary sidebar for diagnostic mode.
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
    { label: "Znam",      count: known.length,   color: "#27ae60" },
    { label: "Nie znam",  count: unknown.length,  color: "#e74c3c" },
    { label: "Frontier",  count: frontier.length, color: "#f39c12" },
  ];

  return (
    <div style={{
      position: "absolute", right: 16, top: 16, width: 230,
      background: "#0d1520ee", backdropFilter: "blur(6px)",
      border: "1px solid #1e2d45", borderRadius: 8,
      padding: "12px 14px", fontSize: 11, color: "#c8d6e5",
      zIndex: 10, maxHeight: "80vh", overflowY: "auto",
    }}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <div style={{
        fontWeight: 700, fontSize: 12, marginBottom: 10, color: "#f5f6fa",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>Diagnostic {sessionComplete ? "✓" : ""}</span>
        <button
          onClick={onReset}
          style={{
            fontSize: 9, padding: "2px 7px", borderRadius: 4, cursor: "pointer",
            background: "transparent", border: "1px solid #3a4d63", color: "#6b7d9a",
          }}
        >reset</button>
      </div>

      {/* ── Stat badges ────────────────────────────────────────── */}
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

      {/* ── SESSION COMPLETE ───────────────────────────────────── */}
      {sessionComplete && (
        <div>
          <div style={{
            background: "#27ae6018", border: "1px solid #27ae6050",
            borderRadius: 6, padding: "10px 12px", marginBottom: 10,
          }}>
            <div style={{ color: "#2ecc71", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>
              Sesja zakończona
            </div>
            <div style={{ color: "#6b7d9a", fontSize: 9, lineHeight: 1.6 }}>
              Sklasyfikowano {known.length + unknown.length}/{total} tematów.{" "}
              Znasz <span style={{ color: "#2ecc71" }}>{known.length}</span>,{" "}
              do nauki <span style={{ color: "#e74c3c" }}>{unknown.length}</span>.
            </div>
          </div>

          {unknown.length > 0 && (
            <>
              <div style={{ color: "#e74c3c", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
                Do nauki ({unknown.length})
              </div>
              {/* Show only the roots of the unknown subtrees — nodes whose prereqs are all known.
                  These are the entry points the student should tackle first. */}
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
                      {SCOPE_LABELS[byId[n.id]?.scope]?.pl}
                    </div>
                  </div>
                ))}
            </>
          )}

          {known.length > 0 && (
            <div style={{ marginTop: 8, color: "#27ae60", fontSize: 9 }}>
              ✓ Znam {known.length} {known.length === 1 ? "temat" : known.length < 5 ? "tematy" : "tematów"}
            </div>
          )}
        </div>
      )}

      {/* ── NOT STARTED — first-time prompt + best starting node ── */}
      {!sessionComplete && !hasStarted && (
        <div style={{ marginBottom: 10 }}>
          {nextSuggestedId && (
            <>
              <div style={{ color: "#4a9eff", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
                ★ Zacznij tutaj
              </div>
              <SuggestedNode
                id={nextSuggestedId}
                label={getLabel(nextSuggestedId)}
                scope={SCOPE_LABELS[byId[nextSuggestedId]?.scope]?.pl}
                subtitle="najwięcej powiązań w grafie"
                onClick={() => onNodeClick?.(nextSuggestedId)}
              />
            </>
          )}
          <div style={{ fontSize: 9, color: "#3a4d63", marginTop: 8, lineHeight: 1.5 }}>
            Lub kliknij dowolny węzeł na grafie.
          </div>
        </div>
      )}

      {/* ── IN PROGRESS — frontier list ───────────────────────── */}
      {!sessionComplete && hasStarted && visibleFrontier.length > 0 && (
        <>
          <div style={{ color: "#f39c12", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
            ▶ Co dalej
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
                  {SCOPE_LABELS[byId[id]?.scope]?.pl}
                  {isNext && <span style={{ color: "#4a9eff88", marginLeft: 4 }}>najlepsze</span>}
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* ── IN PROGRESS — known list ──────────────────────────── */}
      {!sessionComplete && known.length > 0 && (
        <>
          <div style={{ color: "#27ae60", fontSize: 10, fontWeight: 600, margin: "10px 0 4px" }}>
            ✓ Znam ({known.length})
          </div>
          {known.map(n => (
            <div key={n.id} style={{ fontSize: 9, color: "#6dbb87", paddingLeft: 4, lineHeight: 1.7 }}>
              {getLabel(n.id)}
            </div>
          ))}
        </>
      )}

      {/* ── Usage hints ───────────────────────────────────────── */}
      {!sessionComplete && (
        <div style={{ marginTop: 12, color: "#3a4d63", fontSize: 9, lineHeight: 1.5 }}>
          Kliknij węzeł → pytanie<br />
          Shift+click → oznacz jako nieznany<br />
          Kliknij zielony → usuń oznaczenie
        </div>
      )}
    </div>
  );
}

/** Small reusable card for the "best next node" suggestion. */
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
