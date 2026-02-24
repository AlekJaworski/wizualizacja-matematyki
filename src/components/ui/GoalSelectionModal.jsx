import { useState, useMemo, useEffect, useRef } from "react";
import { SCOPE_COLORS, SECTIONS } from "../../data/sections.js";

/**
 * Modal for selecting a deep-dive goal node.
 *
 * Shows a searchable list of all nodes, grouped by section colour.
 * The student picks a target topic — the system will then diagnose
 * all transitive prerequisites of that topic.
 */
export function GoalSelectionModal({ nodes, lang, onSelect, onClose }) {
  const [search, setSearch] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRefs = useRef([]);
  const searchInputRef = useRef(null);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return nodes.filter(n =>
      !term ||
      n.label.toLowerCase().includes(term) ||
      n.labelPl.toLowerCase().includes(term)
    );
  }, [nodes, search]);

  // Flat list for keyboard navigation
  const flatList = useMemo(() => {
    const list = [];
    const sectionOrder = ["SP8", "LP", "LR", "UNIV"];
    const g = {};
    for (const sec of sectionOrder) g[sec] = [];
    for (const n of filtered) {
      const sec = n.section ?? "LP";
      if (!g[sec]) g[sec] = [];
      g[sec].push(n);
    }
    for (const sec of sectionOrder) {
      if (g[sec]) {
        for (const n of g[sec]) {
          list.push(n);
        }
      }
    }
    return list;
  }, [filtered]);

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

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, flatList.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && focusedIndex >= 0 && flatList[focusedIndex]) {
        e.preventDefault();
        onSelect(flatList[focusedIndex].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flatList, focusedIndex, onClose, onSelect]);

  // Focus the button when focusedIndex changes
  useEffect(() => {
    if (focusedIndex >= 0 && buttonRefs.current[focusedIndex]) {
      buttonRefs.current[focusedIndex].scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex]);

  // Reset focused index when search changes
  useEffect(() => {
    setFocusedIndex(-1);
  }, [search]);

  const labels = {
    title: "Wybierz cel",
    subtitle: "Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",
    searchPlaceholder: "Szukaj tematu...",
    noResults: "Brak wyników",
    footer: `${filtered.length} / ${nodes.length} tematów`,
    cancel: "Anuluj",
  };

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
        width: Math.min(440, window.innerWidth - 40),
        maxHeight: "80vh",
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
              {labels.title}
            </div>
            <div style={{ fontSize: 10, color: "#6b7d9a", marginTop: 2 }}>
              {labels.subtitle}
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
            ref={searchInputRef}
            autoFocus
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={labels.searchPlaceholder}
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
                  {items.map((n, idx) => {
                    const globalIdx = flatList.indexOf(n);
                    const color = SCOPE_COLORS[n.scope] ?? "#4a9eff";
                    const isFocused = focusedIndex === globalIdx;
                    return (
                      <button
                        key={n.id}
                        ref={el => buttonRefs.current[globalIdx] = el}
                        onClick={() => onSelect(n.id)}
                        style={{
                          padding: "5px 9px", borderRadius: 5, fontSize: 10,
                          background: isFocused ? `${color}35` : `${color}15`,
                          border: `1px solid ${isFocused ? color : `${color}40`}`,
                          color: "#c8d6e5", cursor: "pointer",
                          transition: "background 0.12s, border-color 0.12s",
                          outline: isFocused ? `2px solid ${color}` : "none",
                          outlineOffset: 1,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${color}30`;
                          e.currentTarget.style.borderColor = `${color}90`;
                        }}
                        onMouseLeave={e => {
                          const global = flatList.indexOf(n);
                          if (global !== focusedIndex) {
                            e.currentTarget.style.background = `${color}15`;
                            e.currentTarget.style.borderColor = `${color}40`;
                          }
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
              {labels.noResults}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: "10px 16px", borderTop: "1px solid #1a2235",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontSize: 9, color: "#3a4d63" }}>
            {labels.footer}
          </div>
          <button
            onClick={onClose}
            style={{
              padding: "5px 12px", borderRadius: 5, fontSize: 10, cursor: "pointer",
              background: "transparent", border: "1px solid #1e2d45", color: "#6b7d9a",
            }}
          >
            {labels.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
