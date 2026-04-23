/** Design tokens — shared colors, typography, and style helpers. */

export const THEMES = {
  midnight: {
    name: "Midnight",
    bg:          "#10141c",
    surface:     "#161c28",
    surfaceHi:   "#161c28ee",
    border:      "#263248",
    borderSubtle:"#1f2a3c",
    textPrimary:  "#f0f2f5",
    textBody:     "#cdd8e4",
    textMuted:    "#95a5bd",
    textDim:      "#7b8fa8",
    textFaint:    "#4a5e78",
    edgeDefault:    "#334766",
    edgeHighlighted:"#4a9eff",
    edgeDimmed:     "#151b26",
  },
  highContrast: {
    name: "High Contrast",
    bg:          "#08090d",
    surface:     "#111318",
    surfaceHi:   "#111318ee",
    border:      "#2e3a50",
    borderSubtle:"#1c2436",
    textPrimary:  "#ffffff",
    textBody:     "#dce4ef",
    textMuted:    "#a3b5cc",
    textDim:      "#8899b3",
    textFaint:    "#556a85",
    edgeDefault:    "#3d5577",
    edgeHighlighted:"#5ab0ff",
    edgeDimmed:     "#0d1118",
  },
  warm: {
    name: "Warm",
    bg:          "#131110",
    surface:     "#1c1916",
    surfaceHi:   "#1c1916ee",
    border:      "#33291f",
    borderSubtle:"#28211a",
    textPrimary:  "#f2ede6",
    textBody:     "#d4cabb",
    textMuted:    "#a89d8e",
    textDim:      "#8a7e6f",
    textFaint:    "#5c5347",
    edgeDefault:    "#4a3f32",
    edgeHighlighted:"#e8a84c",
    edgeDimmed:     "#1a1614",
  },
  bright: {
    name: "Bright",
    bg:          "#f7f7f2",
    surface:     "#ffffff",
    surfaceHi:   "#ffffffee",
    border:      "#e0ddd5",
    borderSubtle:"#ebe8e2",
    textPrimary:  "#1a1a1a",
    textBody:     "#3a3a3a",
    textMuted:    "#6b6b6b",
    textDim:      "#8a8a8a",
    textFaint:    "#b5b5b5",
    edgeDefault:    "#c5c0b6",
    edgeHighlighted:"#58cc02",
    edgeDimmed:     "#edebe6",
  },
};

/** Active COLORS object — mutated in-place by applyTheme(). */
export const COLORS = {
  // Background layers
  ...THEMES.midnight,

  // Semantic (constant across themes)
  known:    "#27ae60",
  knownHi:  "#2ecc71",
  unknown:  "#3b82f6",
  unknownHi:"#60a5fa",
  frontier: "#94a3b8",
  frontierHi:"#cbd5e1",
};

/**
 * Switch the active color palette. Mutates COLORS in-place so all
 * components pick up new values on next render.
 */
export function applyTheme(themeId) {
  const theme = THEMES[themeId];
  if (!theme) return;
  Object.assign(COLORS, theme);
}

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
