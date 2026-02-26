import { useEffect } from "react";
import { t } from "../../i18n.js";
import { COLORS } from "../../styles/tokens.js";

const MODES = [
  { id: "browse",   key: "onboardingBrowse",   descKey: "onboardingBrowseDesc", color: "#4a9eff" },
  { id: "quick",    key: "onboardingDiag",     descKey: "onboardingDiagDesc",   color: "#f39c12" },
  { id: "deepdive", key: "onboardingDeep",     descKey: "onboardingDeepDesc",   color: "#8e44ad" },
];

/**
 * Welcome modal shown once to first-time visitors.
 * Each feature tile is a clickable button that starts that mode immediately.
 *
 * Props:
 *   isOpen    — whether to show the modal
 *   onSelect  — called with "browse" | "quick" | "deepdive"
 *   onClose   — called to dismiss without selecting (Escape / backdrop)
 *   lang
 */
export function OnboardingModal({ isOpen, onSelect, onClose, lang }) {
  // Escape key to dismiss
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "#000000dd", backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 200, padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: "100%", maxWidth: 480,
        background: COLORS.surface,
        border: "1px solid #1e2d45",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>

        {/* Hero */}
        <div style={{
          padding: "28px 24px 20px",
          background: "linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",
          borderBottom: "1px solid #1e2d45",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>◉</div>
          <div style={{ fontWeight: 700, fontSize: 18, color: COLORS.textPrimary, marginBottom: 8 }}>
            {t("onboardingTitle", lang)}
          </div>
          <div style={{ fontSize: 12, color: COLORS.textDim, lineHeight: 1.6, maxWidth: 360, margin: "0 auto" }}>
            {t("onboardingSub", lang)}
          </div>
        </div>

        {/* Mode picker — each tile is a clickable button */}
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 11, color: COLORS.textFaint, marginBottom: 2 }}>
            {t("onboardingChoose", lang)}
          </div>
          {MODES.map(({ id, key, descKey, color }) => (
            <button
              key={id}
              onClick={() => onSelect(id)}
              style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "12px 14px", borderRadius: 8, cursor: "pointer",
                background: `${color}0e`, border: `1px solid ${color}30`,
                textAlign: "left", width: "100%",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}1c`;
                e.currentTarget.style.borderColor = `${color}70`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${color}0e`;
                e.currentTarget.style.borderColor = `${color}30`;
              }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: color, flexShrink: 0, marginTop: 5,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.textPrimary, marginBottom: 3 }}>
                  {t(key, lang)}
                </div>
                <div style={{ fontSize: 11, color: COLORS.textDim, lineHeight: 1.5 }}>
                  {t(descKey, lang)}
                </div>
              </div>
              <div style={{ color: color, fontSize: 16, alignSelf: "center", opacity: 0.7 }}>→</div>
            </button>
          ))}
        </div>

        {/* Lang hint */}
        <div style={{
          margin: "0 24px 16px",
          padding: "8px 10px",
          background: "#ffffff06", borderRadius: 6,
          fontSize: 9, color: COLORS.textFaint, textAlign: "center",
        }}>
          {t("onboardingLangHint", lang)}
        </div>
      </div>
    </div>
  );
}
