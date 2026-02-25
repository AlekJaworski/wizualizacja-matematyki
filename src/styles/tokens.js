/** Design tokens — shared colors, typography, and style helpers. */

export const COLORS = {
  // Background layers
  bg:          "#0a0e17",
  surface:     "#0d1520",
  surfaceHi:   "#0d1520ee",
  border:      "#1e2d45",
  borderSubtle:"#1a2235",

  // Text
  textPrimary:  "#f5f6fa",
  textBody:     "#c8d6e5",
  textMuted:    "#8a9dbe",
  textDim:      "#6b7d9a",
  textFaint:    "#3a4d63",

  // Semantic
  known:    "#27ae60",
  knownHi:  "#2ecc71",
  unknown:  "#c0392b",
  unknownHi:"#e74c3c",
  frontier: "#f39c12",
  frontierHi:"#f1c40f",

  // Graph edges
  edgeDefault:    "#2a3f5a",
  edgeHighlighted:"#4a9eff",
  edgeDimmed:     "#0f1825",
};

export const FONT = "'JetBrains Mono','SF Mono','Fira Code',monospace";

/** Returns the pill/badge button style used in FilterBar. */
export const pillBtn = (active, color) => ({
  padding: "3px 10px",
  borderRadius: 20,
  fontSize: 10,
  cursor: "pointer",
  border: active ? `1px solid ${color}` : `1px solid ${COLORS.border}`,
  background: active ? `${color}22` : "transparent",
  color: active ? color : COLORS.textDim,
});

/** Returns the panel container style (quiz / info / diagnostic). */
export const panelStyle = (color) => ({
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
});

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
});
