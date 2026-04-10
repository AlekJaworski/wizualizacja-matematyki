import { useState, useRef, useEffect } from "react";
import { COLORS, pillBtn } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Gear icon dropdown containing layout selection, language, search, and filters.
 * Closes on click-outside or Escape.
 */
export function SettingsDropdown({
  lang, setLang,
  layoutId, layouts, onLayoutChange,
  searchTerm, setSearchTerm,
  filterScope, toggleScope, clearScope,
  filterSection, toggleSection, clearSection,
  SECTIONS, SCOPE_COLORS, SCOPE_LABELS,
  isMobile,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const activeFilters = filterScope.size + filterSection.size + (searchTerm ? 1 : 0);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          padding: "7px 10px", borderRadius: 5, fontSize: 15, cursor: "pointer",
          border: open || activeFilters > 0 ? "1px solid #4a9eff" : `1px solid ${COLORS.border}`,
          background: open ? "#4a9eff22" : "transparent",
          color: open || activeFilters > 0 ? "#4a9eff" : COLORS.textDim,
          minHeight: 36, minWidth: 36,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}
        title={t("moreOptions", lang)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="2.5" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="8" cy="13.5" r="1.5" />
        </svg>
        {activeFilters > 0 && (
          <span style={{
            position: "absolute", top: -4, right: -4,
            background: "#4a9eff", color: "#fff", fontSize: 9,
            width: 16, height: 16, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700,
          }}>{activeFilters}</span>
        )}
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          right: 0,
          width: isMobile ? "85vw" : 320,
          maxWidth: "90vw",
          maxHeight: "70vh",
          overflowY: "auto",
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 10,
          padding: "14px 16px",
          zIndex: 60,
          boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
        }}>
          {/* Search */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: COLORS.textDim, fontWeight: 600, marginBottom: 6, display: "block" }}>
              {t("search", lang)}
            </label>
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder={t("search", lang)}
              style={{
                width: "100%", boxSizing: "border-box",
                background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                borderRadius: 6, color: COLORS.textBody,
                padding: "8px 10px", fontSize: 13, outline: "none",
              }}
            />
          </div>

          {/* Language */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: COLORS.textDim, fontWeight: 600, marginBottom: 6, display: "block" }}>
              {lang === "pl" ? "Język" : "Language"}
            </label>
            <div style={{ display: "flex", gap: 6 }}>
              {["pl", "en"].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{
                    ...pillBtn(lang === l, l === "pl" ? "#f5a623" : "#4a9eff"),
                    fontSize: 12, padding: "6px 14px",
                  }}
                >{l.toUpperCase()}</button>
              ))}
            </div>
          </div>

          {/* Layout */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: COLORS.textDim, fontWeight: 600, marginBottom: 6, display: "block" }}>
              {t("layoutLabel", lang)}
            </label>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {layouts.map(l => (
                <button key={l.meta.id} onClick={() => onLayoutChange(l.meta.id)}
                  style={{
                    ...pillBtn(layoutId === l.meta.id, "#4a9eff"),
                    fontSize: 11, padding: "5px 10px",
                  }}
                >{l.meta.label}</button>
              ))}
            </div>
          </div>

          {/* Section filters */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, color: COLORS.textDim, fontWeight: 600, marginBottom: 6, display: "block" }}>
              {t("filterSection", lang)}
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              <button style={{ ...pillBtn(filterSection.size === 0, "#c8d6e5"), fontSize: 11, padding: "4px 10px" }}
                onClick={clearSection}>{t("all", lang)}</button>
              {Object.entries(SECTIONS).map(([k, v]) => (
                <button key={k} style={{ ...pillBtn(filterSection.has(k), v.color), fontSize: 11, padding: "4px 10px" }}
                  onClick={() => toggleSection(k)}>{v.label}</button>
              ))}
            </div>
          </div>

          {/* Scope filters */}
          <div>
            <label style={{ fontSize: 11, color: COLORS.textDim, fontWeight: 600, marginBottom: 6, display: "block" }}>
              {t("filterScope", lang)}
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              <button style={{ ...pillBtn(filterScope.size === 0, "#c8d6e5"), fontSize: 11, padding: "4px 10px" }}
                onClick={clearScope}>{t("all", lang)}</button>
              {Object.entries(SCOPE_COLORS).map(([k, c]) => (
                <button key={k} style={{ ...pillBtn(filterScope.has(k), c), fontSize: 11, padding: "4px 10px" }}
                  onClick={() => toggleScope(k)}>
                  {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
