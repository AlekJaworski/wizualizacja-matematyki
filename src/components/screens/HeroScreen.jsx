import { useState } from "react";
import { FONT, COLORS, THEMES } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { QUIZ_PRESETS } from "../../engine/belief.js";

/**
 * Landing screen — the first thing users see.
 * One clear purpose: start the diagnostic quiz.
 * Secondary: browse the map directly.
 */
export function HeroScreen({ lang, setLang, themeId, onThemeChange, onStartQuiz, onStartGoalQuiz, onBrowseViz, onBrowseMap }) {
  const [preset, setPreset] = useState("standard");
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{
      width: "100%", minHeight: "100dvh",
      background: COLORS.bg, fontFamily: FONT,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "32px 20px",
      position: "relative",
    }}>
      {/* Top right controls */}
      <div style={{
        position: "absolute", top: 16, right: 20,
        display: "flex", gap: 10, alignItems: "center",
      }}>
        {/* Theme picker */}
        <div style={{ display: "flex", gap: 5 }}>
          {Object.entries(THEMES).map(([id, theme]) => (
            <button
              key={id}
              onClick={() => onThemeChange(id)}
              title={theme.name}
              style={{
                width: 18, height: 18, borderRadius: "50%",
                background: theme.bg,
                border: themeId === id
                  ? `2px solid ${theme.textPrimary}`
                  : `2px solid ${theme.border}`,
                cursor: "pointer",
                padding: 0,
                boxShadow: themeId === id ? `0 0 6px ${theme.textDim}` : "none",
              }}
            />
          ))}
        </div>

        {/* Language toggle */}
        <div style={{
          display: "flex", gap: 0,
          borderRadius: 6, overflow: "hidden",
          border: `1px solid ${COLORS.border}`,
        }}>
          {["pl", "en"].map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: "10px 14px", fontSize: 12, cursor: "pointer",
                border: "none",
                borderLeft: l === "en" ? `1px solid ${COLORS.border}` : "none",
                background: lang === l ? "#4a9eff18" : "transparent",
                color: lang === l ? "#4a9eff" : COLORS.textDim,
                fontWeight: lang === l ? 600 : 400,
                fontFamily: FONT,
              }}
            >{l.toUpperCase()}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: 440, width: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
        gap: 0,
      }}>
        {/* Mini graph illustration */}
        <svg width="80" height="56" viewBox="0 0 80 56" style={{ marginBottom: 28, opacity: 0.7 }}>
          {/* Edges */}
          <line x1="14" y1="44" x2="40" y2="12" stroke={COLORS.edgeDefault} strokeWidth="1.5" />
          <line x1="66" y1="44" x2="40" y2="12" stroke={COLORS.edgeDefault} strokeWidth="1.5" />
          <line x1="14" y1="44" x2="40" y2="44" stroke={COLORS.edgeDefault} strokeWidth="1.5" />
          <line x1="40" y1="44" x2="66" y2="44" stroke={COLORS.edgeDefault} strokeWidth="1.5" />
          <line x1="40" y1="44" x2="40" y2="12" stroke={COLORS.edgeDefault} strokeWidth="1.5" />
          {/* Nodes */}
          <circle cx="40" cy="12" r="5" fill="#4a9eff" opacity="0.8" />
          <circle cx="14" cy="44" r="5" fill={COLORS.known} opacity="0.8" />
          <circle cx="40" cy="44" r="5" fill={COLORS.frontier} opacity="0.8" />
          <circle cx="66" cy="44" r="5" fill={COLORS.unknown} opacity="0.6" />
        </svg>

        {/* Brand */}
        <div style={{
          fontSize: 13, fontWeight: 600, color: COLORS.textDim,
          letterSpacing: 2, textTransform: "uppercase",
          marginBottom: 16,
        }}>
          oczochodzi.pl
        </div>

        {/* Headline */}
        <h1 style={{
          margin: "0 0 12px", fontSize: 26, fontWeight: 700,
          color: COLORS.textPrimary, lineHeight: 1.3,
          letterSpacing: -0.3,
        }}>
          {t("heroTitle", lang)}
        </h1>

        {/* Subtitle */}
        <p style={{
          margin: "0 0 36px", fontSize: 14, lineHeight: 1.7,
          color: COLORS.textDim, maxWidth: 360,
        }}>
          {t("heroSub", lang)}
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => onStartQuiz(preset)}
          style={{
            width: "100%", maxWidth: 320,
            padding: "16px 24px",
            fontSize: 15, fontWeight: 600,
            fontFamily: FONT,
            borderRadius: 10,
            border: "1px solid #4a9eff50",
            background: "#4a9eff18",
            color: "#4a9eff",
            cursor: "pointer",
            marginBottom: 12,
            transition: "background 0.15s, border-color 0.15s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#4a9eff28";
            e.currentTarget.style.borderColor = "#4a9eff80";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#4a9eff18";
            e.currentTarget.style.borderColor = "#4a9eff50";
          }}
        >
          {t("heroStart", lang)}
        </button>

        {/* More options — collapsed by default */}
        <button
          onClick={() => setShowMore(v => !v)}
          style={{
            padding: "8px 16px", fontSize: 12, fontFamily: FONT,
            border: "none", background: "transparent",
            color: COLORS.textFaint, cursor: "pointer",
            transition: "color 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = COLORS.textDim; }}
          onMouseLeave={e => { e.currentTarget.style.color = COLORS.textFaint; }}
        >
          {showMore ? "▲" : "▼"} {t("heroMore", lang)}
        </button>

        {showMore && (
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 8, marginTop: 4, width: "100%", maxWidth: 320,
          }}>
            {/* Quiz length */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
              <span style={{ color: COLORS.textFaint }}>{t("heroLength", lang)}</span>
              <select
                value={preset}
                onChange={e => setPreset(e.target.value)}
                style={{
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  borderRadius: 6, padding: "5px 10px", fontSize: 12,
                  fontFamily: FONT, color: COLORS.textBody, cursor: "pointer", outline: "none",
                }}
              >
                {Object.entries(QUIZ_PRESETS).map(([key, cfg]) => (
                  <option key={key} value={key}>
                    {t(cfg.labelKey, lang)} (~{cfg.maxQuestions} {t("heroQuestions", lang)})
                  </option>
                ))}
              </select>
            </div>

            {/* Goal quiz */}
            <button onClick={onStartGoalQuiz} style={{
              width: "100%", padding: "10px 16px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textBody, cursor: "pointer",
            }}>{t("heroGoal", lang)}</button>

            {/* Browse vizzes */}
            <button onClick={onBrowseViz} style={{
              width: "100%", padding: "10px 16px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textDim, cursor: "pointer",
            }}>⬡ {t("heroBrowseViz", lang)}</button>

            {/* Explore map */}
            <button onClick={onBrowseMap} style={{
              width: "100%", padding: "10px 16px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textFaint, cursor: "pointer",
            }}>{t("heroExplore", lang)}</button>
          </div>
        )}

        {/* How it works */}
        <div style={{
          marginTop: 48,
          display: "flex", gap: 24,
          fontSize: 11, color: COLORS.textFaint,
          lineHeight: 1.6,
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {[
            { num: "1", text: t("heroStep1", lang) },
            { num: "2", text: t("heroStep2", lang) },
            { num: "3", text: t("heroStep3", lang) },
          ].map(({ num, text }) => (
            <div key={num} style={{
              display: "flex", alignItems: "flex-start", gap: 8,
              maxWidth: 140,
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%",
                border: `1px solid ${COLORS.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: COLORS.textDim, flexShrink: 0,
              }}>{num}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
