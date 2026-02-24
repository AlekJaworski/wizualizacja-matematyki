import { useState, useMemo } from "react";
import { SCOPE_COLORS, SCOPE_LABELS, SECTIONS } from "../../data/sections.js";

/**
 * Modal for selecting a deep-dive goal node.
 *
 * Shows a searchable list of all nodes, grouped by section colour.
 * The student picks a target topic — the system will then diagnose
 * all transitive prerequisites of that topic.
 */
export function GoalSelectionModal({ nodes, lang, onSelect, onClose }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return nodes.filter(n =>
      !term ||
      n.label.toLowerCase().includes(term) ||
      n.labelPl.toLowerCase().includes(term)
    );
  }, [nodes, search]);

  // Group by section for display
  const sectionOrder = ["SP8", "LP", "LR", "UNIV"];
  const grouped = useMemo(() => {
    const g = {};
    for (const sec of sectionOrder) g[sec] = [];
    for (const n of filtered) {
      const sec = n.section ?? "LP";
      if (!g[sec]) g[sec] = [];
      g[sec].push(n);
    }
    return g;
  }, [filtered]);

  const getLabel = n => lang === "pl" ? n.labelPl : n.label;

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "#000000cc", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 100,
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: 440, maxHeight: "80vh",
        background: "#0d1520", border: "1px solid #1e2d45",
        borderRadius: 10, display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "14px 16px 10px",
          borderBottom: "1px solid #1e2d45",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#f5f6fa" }}>
              Deep-Dive Diagnostic
            </div>
            <div style={{ fontSize: 10, color: "#6b7d9a", marginTop: 2 }}>
              Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", color: "#6b7d9a",
              cursor: "pointer", fontSize: 18, lineHeight: 1,
            }}
          >×</button>
        </div>

        {/* Search */}
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #1a2235" }}>
          <input
            autoFocus
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Szukaj tematu..."
            style={{
              width: "100%", boxSizing: "border-box",
              padding: "7px 10px", borderRadius: 5, fontSize: 11,
              background: "#0a0e17", border: "1px solid #1e2d45",
              color: "#c8d6e5", outline: "none",
            }}
          />
        </div>

        {/* Node list */}
        <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 14px" }}>
          {sectionOrder.map(sec => {
            const items = grouped[sec];
            if (!items || items.length === 0) return null;
            const secInfo = SECTIONS[sec];
            return (
              <div key={sec} style={{ marginBottom: 12 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, color: secInfo?.color ?? "#6b7d9a",
                  textTransform: "uppercase", letterSpacing: 1, marginBottom: 5,
                }}>
                  {secInfo?.label ?? sec}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {items.map(n => {
                    const color = SCOPE_COLORS[n.scope] ?? "#4a9eff";
                    return (
                      <button
                        key={n.id}
                        onClick={() => onSelect(n.id)}
                        style={{
                          padding: "5px 9px", borderRadius: 5, fontSize: 10,
                          background: `${color}15`, border: `1px solid ${color}40`,
                          color: "#c8d6e5", cursor: "pointer",
                          transition: "background 0.12s, border-color 0.12s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${color}30`;
                          e.currentTarget.style.borderColor = `${color}90`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${color}15`;
                          e.currentTarget.style.borderColor = `${color}40`;
                        }}
                      >
                        <span style={{ fontSize: 8, marginRight: 5,
                          display: "inline-block", width: 7, height: 7,
                          borderRadius: "50%", background: color, verticalAlign: "middle",
                        }} />
                        {getLabel(n)}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ color: "#3a4d63", fontSize: 11, padding: "20px 0", textAlign: "center" }}>
              Brak wyników
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: "10px 16px", borderTop: "1px solid #1a2235",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 9, color: "#3a4d63" }}>
            {filtered.length} / {nodes.length} tematów
          </div>
          <button
            onClick={onClose}
            style={{
              padding: "5px 12px", borderRadius: 5, fontSize: 10, cursor: "pointer",
              background: "transparent", border: "1px solid #1e2d45", color: "#6b7d9a",
            }}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
