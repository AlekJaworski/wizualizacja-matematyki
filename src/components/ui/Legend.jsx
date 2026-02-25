import { useState } from "react";
import { COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * Bottom-left legend — collapsible, shows scope colours, section stages,
 * and diagnostic node colours when in diagnostic mode.
 * SCOPE_COLORS, SCOPE_LABELS, SECTIONS are passed as props so the component
 * works for any course.
 */
export function Legend({ lang, diagMode, SCOPE_COLORS, SCOPE_LABELS, SECTIONS }) {
  const [open, setOpen] = useState(false);

  const scopes = Object.entries(SCOPE_COLORS).map(([k, c]) => ({
    color: c,
    label: SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"],
  }));

  return (
    <div style={{
      position: "absolute", left: 16, bottom: 16,
      background: "#0d152095", backdropFilter: "blur(4px)",
      borderRadius: 6, overflow: "hidden",
      border: "1px solid #1a2235",
      fontSize: 9,
    }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "5px 10px", width: "100%",
          background: "transparent", border: "none",
          color: "#6b7d9a", cursor: "pointer", fontSize: 9,
        }}
      >
        <span style={{ opacity: 0.6 }}>{open ? "▼" : "▶"}</span>
        {t("legendTitle", lang)}
      </button>

      {open && (
        <div style={{ padding: "4px 10px 8px", borderTop: "1px solid #1a2235" }}>

          {/* Diagnostic colours — only shown in diagnostic mode */}
          {diagMode && (
            <div style={{ marginBottom: 8 }}>
              {[
                { color: COLORS.knownHi,  label: t("legendKnown",       lang) },
                { color: COLORS.unknownHi,label: t("legendUnknown",     lang) },
                { color: COLORS.frontier, label: t("legendFrontier",    lang) },
                { color: "#4a5568",       label: t("legendUnclassified",lang) },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ color: "#8a9dbe" }}>{label}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #1a2235", marginTop: 6, marginBottom: 6 }} />
            </div>
          )}

          {/* Scope colours */}
          <div style={{ color: "#3a4d63", marginBottom: 4, fontWeight: 700, letterSpacing: 0.5 }}>
            {t("legendScopes", lang)}
          </div>
          {scopes.map(({ color, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
              <span style={{ color: "#8a9dbe" }}>{label}</span>
            </div>
          ))}

          {/* Stage colours */}
          <div style={{ borderTop: "1px solid #1a2235", marginTop: 6, paddingTop: 6 }}>
            <div style={{ color: "#3a4d63", marginBottom: 4, fontWeight: 700, letterSpacing: 0.5 }}>
              {t("legendStages", lang)}
            </div>
            {Object.entries(SECTIONS).map(([k, v]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                <div style={{ width: 8, height: 3, borderRadius: 1, background: v.color, flexShrink: 0 }} />
                <span style={{ color: "#8a9dbe" }}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
