import { SECTIONS, SCOPE_COLORS, SCOPE_LABELS } from "../../data/sections.js";
import { pillBtn } from "../../styles/tokens.js";

/**
 * Top filter toolbar: search, section filters, scope filters, language toggle.
 */
export function FilterBar({
  filterScope,
  toggleScope,
  clearScope,
  filterSection,
  toggleSection,
  clearSection,
  searchTerm,
  setSearchTerm,
  lang,
  setLang,
}) {
  return (
    <div style={{
      padding: "8px 16px",
      borderBottom: "1px solid #1a2235",
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      flexShrink: 0,
    }}>
      {/* Search */}
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search…"
        style={{
          background: "#0d1520", border: "1px solid #1e2d45",
          borderRadius: 4, color: "#c8d6e5",
          padding: "3px 8px", fontSize: 11, width: 120, outline: "none",
        }}
      />

      <span style={{ color: "#3a4d63", fontSize: 10 }}>|</span>

      {/* Section filters */}
      <button style={pillBtn(filterSection.size === 0, "#c8d6e5")} onClick={clearSection}>All</button>
      {Object.entries(SECTIONS).map(([k, v]) => (
        <button key={k} style={pillBtn(filterSection.has(k), v.color)} onClick={() => toggleSection(k)}>
          {v.label}
        </button>
      ))}

      <span style={{ color: "#3a4d63", fontSize: 10 }}>|</span>

      {/* Scope filters */}
      <button style={pillBtn(filterScope.size === 0, "#c8d6e5")} onClick={clearScope}>All</button>
      {Object.entries(SCOPE_COLORS).map(([k, c]) => (
        <button key={k} style={pillBtn(filterScope.has(k), c)} onClick={() => toggleScope(k)}>
          {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
        </button>
      ))}

      <span style={{ color: "#3a4d63", fontSize: 10 }}>|</span>

      {/* Language toggle */}
      <button style={pillBtn(lang === "pl", "#f5a623")} onClick={() => setLang(l => l === "pl" ? "en" : "pl")}>
        {lang === "pl" ? "PL" : "EN"}
      </button>
    </div>
  );
}
