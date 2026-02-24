import { SCOPE_COLORS, SCOPE_LABELS, SECTIONS } from "../../data/sections.js";

/**
 * Bottom-left legend showing scope colors and section indicators.
 */
export function Legend({ lang }) {
  const items = Object.entries(SCOPE_COLORS).map(([k, c]) => ({
    color: c,
    label: SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"],
  }));

  return (
    <div style={{
      position: "absolute", left: 16, bottom: 16,
      background: "#0d152090", backdropFilter: "blur(4px)",
      borderRadius: 6, padding: "8px 12px",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      {items.map(({ color, label }) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
          <span style={{ color: "#8a9dbe" }}>{label}</span>
        </div>
      ))}

      <div style={{ marginTop: 4, borderTop: "1px solid #1e2d45", paddingTop: 4 }}>
        {Object.entries(SECTIONS).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9 }}>
            <div style={{ width: 8, height: 3, borderRadius: 1, background: v.color }} />
            <span style={{ color: "#8a9dbe" }}>{v.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
