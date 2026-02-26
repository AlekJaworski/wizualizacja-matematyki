import { useState } from "react";
import { pillBtn, COLORS } from "../../styles/tokens.js";
import { BottomSheet } from "./BottomSheet.jsx";
import { t } from "../../i18n.js";

/**
 * Top filter toolbar: search, section filters, scope filters, language toggle.
 *
 * On desktop: horizontal pill-button bar.
 * On mobile: a single compact row with search + a "Filters" button that opens
 *            a BottomSheet with all the filter options.
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
  isMobile,
}) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const activeFilters = filterScope.size + filterSection.size;

  if (isMobile) {
    return (
      <>
        {/* Compact mobile bar */}
        <div style={{
          padding: "6px 12px",
          borderBottom: `1px solid ${COLORS.borderSubtle}`,
          display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
        }}>
          {/* Search */}
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={t("search", lang)}
            style={{
              flex: 1,
              background: "#0d1520", border: `1px solid ${COLORS.border}`,
              borderRadius: 6, color: COLORS.textBody,
              padding: "8px 12px", fontSize: 14, outline: "none",
              minHeight: 36,
            }}
          />

          {/* Filters button */}
          <button
            onClick={() => setSheetOpen(true)}
            style={{
              padding: "8px 12px", borderRadius: 6, fontSize: 13, cursor: "pointer",
              border: activeFilters > 0 ? "1px solid #4a9eff" : `1px solid ${COLORS.border}`,
              background: activeFilters > 0 ? "#4a9eff22" : "transparent",
              color: activeFilters > 0 ? "#4a9eff" : COLORS.textDim,
              whiteSpace: "nowrap", minHeight: 36,
            }}
          >
            {t("filters", lang)}{activeFilters > 0 ? ` (${activeFilters})` : ""}
          </button>

          {/* Lang toggle */}
          <button
            style={{ ...pillBtn(true, lang === "pl" ? "#f5a623" : "#4a9eff"), minHeight: 36, fontSize: 13 }}
            onClick={() => setLang(l => l === "pl" ? "en" : "pl")}
          >
            {lang === "pl" ? "PL" : "EN"}
          </button>
        </div>

        {/* Filter bottom sheet */}
        <BottomSheet
          isOpen={sheetOpen}
          onClose={() => setSheetOpen(false)}
          title={t("filterTitle", lang)}
          maxHeight="60vh"
        >
          <FilterContent
            filterScope={filterScope} toggleScope={toggleScope} clearScope={clearScope}
            filterSection={filterSection} toggleSection={toggleSection} clearSection={clearSection}
            lang={lang} SECTIONS={SECTIONS} SCOPE_COLORS={SCOPE_COLORS} SCOPE_LABELS={SCOPE_LABELS}
            onDone={() => setSheetOpen(false)}
          />
        </BottomSheet>
      </>
    );
  }

  // Desktop layout
  return (
    <div style={{
      padding: "6px 12px",
      borderBottom: `1px solid ${COLORS.borderSubtle}`,
      display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", flexShrink: 0,
      minHeight: 40,
    }}>
      <input
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder={t("search", lang)}
        style={{
          background: "#0d1520", border: `1px solid ${COLORS.border}`,
          borderRadius: 4, color: COLORS.textBody,
          padding: "6px 10px", fontSize: 13,
          width: "min(140px, 30vw)", outline: "none", minHeight: 32,
        }}
      />
      <span style={{ color: COLORS.border, fontSize: 10 }}>|</span>
      <span style={{ fontSize: 11, color: COLORS.textFaint }}>{t("filterSection", lang)}</span>
      <button style={pillBtn(filterSection.size === 0, "#c8d6e5")} onClick={clearSection}>
        {t("all", lang)}
      </button>
      {Object.entries(SECTIONS).map(([k, v]) => (
        <button key={k} style={pillBtn(filterSection.has(k), v.color)} onClick={() => toggleSection(k)}>
          {v.label}
        </button>
      ))}
      <span style={{ color: COLORS.border, fontSize: 10 }}>|</span>
      <span style={{ fontSize: 11, color: COLORS.textFaint }}>{t("filterScope", lang)}</span>
      <button style={pillBtn(filterScope.size === 0, "#c8d6e5")} onClick={clearScope}>
        {t("all", lang)}
      </button>
      {Object.entries(SCOPE_COLORS).map(([k, c]) => (
        <button key={k} style={pillBtn(filterScope.has(k), c)} onClick={() => toggleScope(k)}>
          {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
        </button>
      ))}
      <span style={{ color: COLORS.border, fontSize: 10 }}>|</span>
      <button
        style={{ ...pillBtn(true, lang === "pl" ? "#f5a623" : "#4a9eff") }}
        onClick={() => setLang(l => l === "pl" ? "en" : "pl")}
      >
        {lang === "pl" ? "PL" : "EN"}
      </button>
    </div>
  );
}

/** Reusable filter content used inside the BottomSheet on mobile. */
function FilterContent({
  filterScope, toggleScope, clearScope,
  filterSection, toggleSection, clearSection,
  lang, SECTIONS, SCOPE_COLORS, SCOPE_LABELS,
  onDone,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Sections */}
      <div>
        <div style={{ fontSize: 12, color: COLORS.textDim, marginBottom: 8, fontWeight: 600 }}>
          {t("filterSection", lang)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button style={{ ...pillBtn(filterSection.size === 0, "#c8d6e5"), fontSize: 13, minHeight: 36 }} onClick={clearSection}>
            {t("all", lang)}
          </button>
          {Object.entries(SECTIONS).map(([k, v]) => (
            <button key={k} style={{ ...pillBtn(filterSection.has(k), v.color), fontSize: 13, minHeight: 36 }} onClick={() => toggleSection(k)}>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scopes */}
      <div>
        <div style={{ fontSize: 12, color: COLORS.textDim, marginBottom: 8, fontWeight: 600 }}>
          {t("filterScope", lang)}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <button style={{ ...pillBtn(filterScope.size === 0, "#c8d6e5"), fontSize: 13, minHeight: 36 }} onClick={clearScope}>
            {t("all", lang)}
          </button>
          {Object.entries(SCOPE_COLORS).map(([k, c]) => (
            <button key={k} style={{ ...pillBtn(filterScope.has(k), c), fontSize: 13, minHeight: 36 }} onClick={() => toggleScope(k)}>
              {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
            </button>
          ))}
        </div>
      </div>

      {/* Done */}
      <button
        onClick={onDone}
        style={{
          padding: "12px", borderRadius: 8, fontSize: 15, cursor: "pointer",
          background: "#4a9eff22", border: "1px solid #4a9eff",
          color: "#4a9eff", fontWeight: 600,
        }}
      >
        {t("done", lang)}
      </button>
    </div>
  );
}
