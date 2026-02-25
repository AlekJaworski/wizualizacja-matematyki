import { useEffect } from "react";
import { t } from "../../i18n.js";
import { COLORS } from "../../styles/tokens.js";

const FEATURES = [
  { key: "onboardingBrowse",   descKey: "onboardingBrowseDesc", color: "#4a9eff" },
  { key: "onboardingDiag",     descKey: "onboardingDiagDesc",   color: "#f39c12" },
  { key: "onboardingDeep",     descKey: "onboardingDeepDesc",   color: "#8e44ad" },
];

/**
 * Welcome modal shown once to first-time visitors.
 * Dismissed via "Get started" or "Skip" — both store a flag in localStorage
 * via the parent (CurriculumGraph passes isOpen / onClose).
 */
export function OnboardingModal({ isOpen, onClose, lang }) {
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

        {/* Feature list */}
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
          {FEATURES.map(({ key, descKey, color }) => (
            <div key={key} style={{
              display: "flex", gap: 14, alignItems: "flex-start",
              padding: "10px 12px", borderRadius: 8,
              background: `${color}0e`, border: `1px solid ${color}25`,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: color, flexShrink: 0, marginTop: 4,
              }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 12, color: COLORS.textPrimary, marginBottom: 3 }}>
                  {t(key, lang)}
                </div>
                <div style={{ fontSize: 10, color: COLORS.textDim, lineHeight: 1.5 }}>
                  {t(descKey, lang)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lang hint */}
        <div style={{
          margin: "0 24px", padding: "8px 10px",
          background: "#ffffff06", borderRadius: 6,
          fontSize: 9, color: COLORS.textFaint, textAlign: "center",
        }}>
          {t("onboardingLangHint", lang)}
        </div>

        {/* Footer */}
        <div style={{
          padding: "14px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button
            onClick={onClose}
            style={{
              padding: "6px 14px", borderRadius: 5, fontSize: 11, cursor: "pointer",
              background: "transparent", border: "1px solid #1e2d45", color: COLORS.textDim,
            }}
          >
            {t("onboardingSkip", lang)}
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "8px 22px", borderRadius: 6, fontSize: 12,
              cursor: "pointer", fontWeight: 700,
              background: "#4a9eff", border: "none", color: "#fff",
              boxShadow: "0 0 16px #4a9eff44",
            }}
          >
            {t("onboardingStart", lang)}
          </button>
        </div>
      </div>
    </div>
  );
}
