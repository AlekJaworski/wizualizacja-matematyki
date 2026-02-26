import { pillBtn } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Top filter toolbar: search, section filters, scope filters, language toggle.
 * SECTIONS, SCOPE_COLORS, SCOPE_LABELS are passed as props so the component
 * works for any course.
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
  SECTIONS,
  SCOPE_COLORS,
  SCOPE_LABELS,
}) {
  return (
    <div style={{
      padding: "6px 12px",
      borderBottom: "1px solid #1a2235",
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      flexShrink: 0,
      minHeight: 40,
    }}>
      {/* Search */}
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder={t("search", lang)}
        style={{
          background: "#0d1520", border: "1px solid #1e2d45",
          borderRadius: 4, color: "#c8d6e5",
          padding: "6px 10px", fontSize: 13,
          width: "min(140px, 30vw)",
          outline: "none", minHeight: 32,
        }}
      />

      <span style={{ color: "#1e2d45", fontSize: 10 }}>|</span>

      {/* Section filters */}
      <span style={{ fontSize: 11, color: "#3a4d63" }}>{t("filterSection", lang)}</span>
      <button style={pillBtn(filterSection.size === 0, "#c8d6e5")} onClick={clearSection}>
        {t("all", lang)}
      </button>
      {Object.entries(SECTIONS).map(([k, v]) => (
        <button key={k} style={pillBtn(filterSection.has(k), v.color)} onClick={() => toggleSection(k)}>
          {v.label}
        </button>
      ))}

      <span style={{ color: "#1e2d45", fontSize: 10 }}>|</span>

      {/* Scope filters */}
      <span style={{ fontSize: 11, color: "#3a4d63" }}>{t("filterScope", lang)}</span>
      <button style={pillBtn(filterScope.size === 0, "#c8d6e5")} onClick={clearScope}>
        {t("all", lang)}
      </button>
      {Object.entries(SCOPE_COLORS).map(([k, c]) => (
        <button key={k} style={pillBtn(filterScope.has(k), c)} onClick={() => toggleScope(k)}>
          {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
        </button>
      ))}

      <span style={{ color: "#1e2d45", fontSize: 10 }}>|</span>

      {/* Language toggle */}
      <button
        style={pillBtn(true, lang === "pl" ? "#f5a623" : "#4a9eff")}
        onClick={() => setLang(l => l === "pl" ? "en" : "pl")}
        title={lang === "pl" ? "Switch to English" : "Przełącz na polski"}
      >
        {lang === "pl" ? "PL" : "EN"}
      </button>
    </div>
  );
}
