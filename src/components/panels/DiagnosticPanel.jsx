import { RAW_NODES } from "../../data/curriculum.js";
import { SCOPE_LABELS } from "../../data/sections.js";

/**
 * Summary sidebar shown in diagnostic mode when no quiz is open.
 * Displays counts of Known / Unknown / Frontier nodes and lets the
 * user click a frontier node to open its quiz.
 */
export function DiagnosticPanel({ belief, frontier, nodes, lang, onReset, onNodeClick }) {
  const byId    = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  const known   = RAW_NODES.filter(n => belief[n.id] === "known");
  const unknown = RAW_NODES.filter(n => belief[n.id] === "unknown");

  const stats = [
    { label: "Known",    count: known.length,    color: "#27ae60" },
    { label: "Unknown",  count: unknown.length,   color: "#e74c3c" },
    { label: "Frontier", count: frontier.length,  color: "#f39c12" },
  ];

  return (
    <div style={{
      position: "absolute", right: 16, top: 16, width: 220,
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
        <span>Diagnostic</span>
        <button
          onClick={onReset}
          style={{
            fontSize: 9, padding: "2px 7px", borderRadius: 4, cursor: "pointer",
            background: "transparent", border: "1px solid #3a4d63", color: "#6b7d9a",
          }}
        >reset</button>
      </div>

      {/* Stat badges */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {stats.map(({ label, count, color }) => (
          <div
            key={label}
            style={{
              flex: 1, textAlign: "center",
              background: `${color}18`, borderRadius: 5,
              padding: "5px 0", border: `1px solid ${color}40`,
            }}
          >
            <div style={{ color, fontWeight: 700, fontSize: 16 }}>{count}</div>
            <div style={{ color: "#6b7d9a", fontSize: 9 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Frontier list */}
      {frontier.length > 0 && (
        <>
          <div style={{ color: "#f39c12", fontSize: 10, fontWeight: 600, marginBottom: 5 }}>
            ▶ Co ćwiczyć teraz — kliknij, by odpowiedzieć
          </div>
          {frontier.map(id => (
            <div
              key={id}
              onClick={() => onNodeClick?.(id)}
              style={{
                padding: "6px 8px", marginBottom: 3, borderRadius: 4, cursor: "pointer",
                background: "#f39c1215", border: "1px solid #f39c1240",
                fontSize: 10, color: "#f5d78e", transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f39c1230"}
              onMouseLeave={e => e.currentTarget.style.background = "#f39c1215"}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{getLabel(id)}</span>
                <span style={{ opacity: 0.5 }}>→</span>
              </div>
              <div style={{ fontSize: 8, color: "#6b7d9a", marginTop: 1 }}>
                {SCOPE_LABELS[byId[id]?.scope]?.pl}
              </div>
            </div>
          ))}
        </>
      )}

      {/* Known list */}
      {known.length > 0 && (
        <>
          <div style={{ color: "#27ae60", fontSize: 10, fontWeight: 600, margin: "10px 0 5px" }}>
            ✓ Known ({known.length})
          </div>
          {known.map(n => (
            <div key={n.id} style={{ fontSize: 9, color: "#6dbb87", paddingLeft: 4, lineHeight: 1.7 }}>
              {getLabel(n.id)}
            </div>
          ))}
        </>
      )}

      {/* Usage hints */}
      <div style={{ marginTop: 12, color: "#3a4d63", fontSize: 9, lineHeight: 1.5 }}>
        Kliknij węzeł → pytanie<br />
        Shift+click → oznacz jako nieznany<br />
        Kliknij zielony → usuń oznaczenie
      </div>
    </div>
  );
}
