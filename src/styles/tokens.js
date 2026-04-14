/** Design tokens — shared colors, typography, and style helpers. */

export const COLORS = {
  // Background layers
  bg:          "#10141c",
  surface:     "#161c28",
  surfaceHi:   "#161c28ee",
  border:      "#263248",
  borderSubtle:"#1f2a3c",

  // Text
  textPrimary:  "#f0f2f5",
  textBody:     "#cdd8e4",
  textMuted:    "#95a5bd",
  textDim:      "#7b8fa8",
  textFaint:    "#4a5e78",

  // Semantic
  known:    "#27ae60",
  knownHi:  "#2ecc71",
  unknown:  "#c0392b",
  unknownHi:"#e74c3c",
  frontier: "#f39c12",
  frontierHi:"#f1c40f",

  // Graph edges
  edgeDefault:    "#334766",
  edgeHighlighted:"#4a9eff",
  edgeDimmed:     "#151b26",
};

export const FONT = "'JetBrains Mono','SF Mono','Fira Code',monospace";

/** Returns the pill/badge button style used in FilterBar. */
export const pillBtn = (active, color) => ({
  padding: "6px 12px",
  borderRadius: 20,
  fontSize: 12,
  cursor: "pointer",
  border: active ? `1px solid ${color}` : `1px solid ${COLORS.border}`,
  background: active ? `${color}22` : "transparent",
  color: active ? color : COLORS.textDim,
  minHeight: 32,
});

/**
 * Returns the panel container style (quiz / info / diagnostic).
 * On mobile (width < 600px) panels become bottom sheets.
 */
export const panelStyle = (color) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  if (isMobile) {
    return {
      position: "fixed",
      left: 0, right: 0, bottom: 0,
      width: "100%",
      maxHeight: "75vh",
      background: COLORS.surfaceHi,
      backdropFilter: "blur(8px)",
      border: `1px solid ${color}40`,
      borderRadius: "12px 12px 0 0",
      padding: "16px 16px 24px",
      fontSize: 13,
      color: COLORS.textBody,
      zIndex: 20,
      overflowY: "auto",
      boxSizing: "border-box",
    };
  }
  return {
    position: "absolute",
    right: 16,
    top: 16,
    width: 280,
    background: COLORS.surfaceHi,
    backdropFilter: "blur(6px)",
    border: `1px solid ${color}40`,
    borderRadius: 8,
    padding: "14px 16px",
    fontSize: 11,
    color: COLORS.textBody,
    zIndex: 20,
    maxHeight: "85vh",
    overflowY: "auto",
  };
};

/** Returns the small action-button style used inside panels. */
export const ansBtn = (color) => ({
  padding: "10px 18px",
  borderRadius: 6,
  fontSize: 14,
  cursor: "pointer",
  fontWeight: 600,
  border: `1px solid ${color}`,
  background: `${color}22`,
  color,
  minHeight: 44,
});
