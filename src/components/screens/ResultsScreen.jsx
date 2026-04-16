import { useMemo } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { renderLatex } from "../../utils/latex.js";
import { buildAdjacency } from "../../engine/adjacency.js";
import { computeFrontier } from "../../engine/belief.js";
import { encodeBelief } from "../../utils/shareCode.js";

/**
 * Results screen shown after quiz completion.
 * Shows diagnosis summary + actionable "start here" list.
 *
 * Props:
 *   RAW_NODES, RAW_EDGES — course data
 *   SCOPE_COLORS, SCOPE_LABELS — display metadata
 *   belief — final belief map from quiz
 *   stats — { correct, incorrect, questionsAnswered }
 *   lang
 *   onSeeMap() — transition to graph view with belief pre-loaded
 *   onRetake() — restart quiz
 */
export function ResultsScreen({
  RAW_NODES, RAW_EDGES, SCOPE_COLORS, SCOPE_LABELS,
  belief, stats, evidence, lang, onSeeMap, onRetake, onSelectTopic,
}) {
  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), [RAW_NODES, RAW_EDGES]);
  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );
  const getLabel = (id) => lang === "pl" ? nodeById[id]?.labelPl : nodeById[id]?.label;

  const known = RAW_NODES.filter(n => belief[n.id] === "known");
  const unknownNodes = RAW_NODES.filter(n => belief[n.id] === "unknown");
  const total = RAW_NODES.length;

  // Frontier = unknown nodes whose prereqs are all known (lowest gaps)
  const lowestGaps = useMemo(() => {
    return unknownNodes
      .filter(n => (adjacency.prereqs[n.id] ?? []).every(p => belief[p] === "known"))
      .slice(0, 8);
  }, [unknownNodes, adjacency, belief]);

  const accuracyPct = stats.correct + stats.incorrect > 0
    ? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)
    : 0;

  const hasGaps = lowestGaps.length > 0;

  return (
    <div style={{
      width: "100%", minHeight: "100dvh",
      background: COLORS.bg, fontFamily: FONT,
      display: "flex", flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px 60px",
    }}>
      <div style={{ maxWidth: "min(520px, calc(100% - 32px))", width: "100%" }}>
        {/* Header */}
        <div style={{
          fontSize: 11, color: COLORS.textFaint,
          letterSpacing: 1.5, textTransform: "uppercase",
          marginBottom: 8,
        }}>
          oczochodzi.pl
        </div>
        <h1 style={{
          margin: "0 0 8px", fontSize: 24, fontWeight: 700,
          color: COLORS.textPrimary, lineHeight: 1.3,
        }}>
          {t("resultsTitle", lang)}
        </h1>
        <p style={{
          margin: "0 0 32px", fontSize: 13, color: COLORS.textDim, lineHeight: 1.6,
        }}>
          {stats.questionsAnswered} {t("resultsAnswered", lang)} · {accuracyPct}% {t("resultsAccuracy", lang)}
        </p>

        {/* Stat cards */}
        <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
          <StatCard
            count={known.length}
            label={t("resultsKnown", lang)}
            color={COLORS.known}
            total={total}
          />
          <StatCard
            count={unknownNodes.length}
            label={t("resultsToStudy", lang)}
            color="#e74c3c"
            total={total}
          />
        </div>

        {/* Lowest gaps — the key insight */}
        {hasGaps && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{
              margin: "0 0 6px", fontSize: 15, fontWeight: 700,
              color: COLORS.textPrimary,
            }}>
              {t("resultsGapsTitle", lang)}
            </h2>
            <p style={{
              margin: "0 0 16px", fontSize: 12, color: COLORS.textDim, lineHeight: 1.6,
            }}>
              {t("resultsGapsSub", lang)}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {lowestGaps.map((n, i) => {
                const scopeColor = SCOPE_COLORS?.[n.scope] ?? COLORS.textDim;
                const scopeLabel = SCOPE_LABELS?.[n.scope]?.[lang === "pl" ? "pl" : "en"] ?? "";
                const hasResource = n.resources && n.resources.length > 0;

                return (
                  <div
                    key={n.id}
                    onClick={() => onSelectTopic?.(n.id)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      background: "#e74c3c08",
                      border: `1px solid #e74c3c20`,
                      display: "flex", alignItems: "center", gap: 12,
                      cursor: onSelectTopic ? "pointer" : "default",
                      transition: "background 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={e => { if (onSelectTopic) { e.currentTarget.style.background = "#e74c3c14"; e.currentTarget.style.borderColor = "#e74c3c40"; }}}
                    onMouseLeave={e => { if (onSelectTopic) { e.currentTarget.style.background = "#e74c3c08"; e.currentTarget.style.borderColor = "#e74c3c20"; }}}
                  >
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: `${scopeColor}18`,
                      border: `1px solid ${scopeColor}40`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: scopeColor, flexShrink: 0,
                      fontWeight: 600,
                    }}>{i + 1}</span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{ fontSize: 13, color: COLORS.textPrimary, fontWeight: 500 }}
                        dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(n.id) ?? "") }}
                      />
                      <div style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 2 }}>
                        {scopeLabel}
                        {hasResource && (
                          <span style={{ color: "#4a9eff", marginLeft: 8 }}>
                            {t("resultsHasResource", lang)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {unknownNodes.length > lowestGaps.length && (
              <div style={{
                marginTop: 8, fontSize: 11, color: COLORS.textFaint,
              }}>
                +{unknownNodes.length - lowestGaps.length} {t("resultsMore", lang)}
              </div>
            )}
          </div>
        )}

        {/* No gaps — all good! */}
        {!hasGaps && unknownNodes.length === 0 && (
          <div style={{
            padding: "20px 16px", borderRadius: 10,
            background: "#27ae6010", border: `1px solid #27ae6030`,
            marginBottom: 32, textAlign: "center",
          }}>
            <div style={{ fontSize: 15, color: COLORS.known, fontWeight: 600, marginBottom: 4 }}>
              {t("resultsAllGood", lang)}
            </div>
            <div style={{ fontSize: 12, color: COLORS.textDim }}>
              {t("resultsAllGoodSub", lang)}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
          <button
            onClick={onSeeMap}
            style={{
              width: "100%", padding: "14px 24px",
              fontSize: 14, fontWeight: 600, fontFamily: FONT,
              borderRadius: 8,
              border: "1px solid #4a9eff50",
              background: "#4a9eff18",
              color: "#4a9eff",
              cursor: "pointer",
            }}
          >
            {t("resultsSeeMap", lang)}
          </button>

          {/* Share */}
          <button
            onClick={() => {
              const code = belief ? encodeBelief(belief) : "";
              const shareUrl = `https://oczochodzi.pl/#/results/${code}`;
              const text = lang === "pl"
                ? `Sprawdziłem swoją wiedzę z matmy — ${known.length}/${total} tematów znanych! Sprawdź się:`
                : `I tested my math knowledge — ${known.length}/${total} topics known! Try it:`;
              if (navigator.share) {
                navigator.share({ title: "oczochodzi.pl", text, url: shareUrl }).catch(() => {});
              } else {
                navigator.clipboard.writeText(`${text} ${shareUrl}`).then(() => {
                  alert(lang === "pl" ? "Skopiowano do schowka!" : "Copied to clipboard!");
                });
              }
            }}
            style={{
              width: "100%", padding: "12px 24px",
              fontSize: 13, fontFamily: FONT,
              borderRadius: 8,
              border: `1px solid ${COLORS.border}`,
              background: "transparent",
              color: COLORS.textBody,
              cursor: "pointer",
            }}
          >
            {t("resultsShare", lang)}
          </button>

          <button
            onClick={onRetake}
            style={{
              width: "100%", padding: "12px 24px",
              fontSize: 13, fontFamily: FONT,
              borderRadius: 8,
              border: `1px solid ${COLORS.border}`,
              background: "transparent",
              color: COLORS.textDim,
              cursor: "pointer",
            }}
          >
            {t("resultsRetake", lang)}
          </button>
        </div>

        {/* Buy coffee */}
        <div style={{
          marginTop: 24, paddingTop: 20,
          borderTop: `1px solid ${COLORS.border}`,
          textAlign: "center",
        }}>
          <p style={{ fontSize: 12, color: COLORS.textDim, marginBottom: 8, lineHeight: 1.6 }}>
            {t("coffeeText", lang)}
          </p>
          <a
            href="https://buycoffee.to/oczochodzi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px", fontSize: 13, fontFamily: FONT,
              borderRadius: 8,
              border: "1px solid #FFD16640",
              background: "#FFD16610",
              color: "#FFD166",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {t("coffeeBtn", lang)}
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ count, label, color, total }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div style={{
      flex: 1, padding: "16px 14px",
      borderRadius: 10,
      background: `${color}08`,
      border: `1px solid ${color}20`,
      textAlign: "center",
    }}>
      <div style={{ fontSize: 28, fontWeight: 700, color, lineHeight: 1 }}>
        {count}
      </div>
      <div style={{ fontSize: 11, color: COLORS.textFaint, marginTop: 6 }}>
        {label}
      </div>
      <div style={{
        marginTop: 8, height: 3, borderRadius: 2,
        background: `${color}15`, overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: 2, width: `${pct}%`,
          background: color, opacity: 0.6,
        }} />
      </div>
      <div style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 4 }}>
        {pct}% of {total}
      </div>
    </div>
  );
}
