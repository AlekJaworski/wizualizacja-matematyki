import { useState } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { ResourcePanel } from "../panels/ResourcePanel.jsx";

/**
 * Full-screen topic detail view — shown when clicking a node on the map.
 * Displays everything about a topic: status, prereqs, dependents, resources.
 *
 * Props:
 *   nodeId, nodes, adjacency, lang
 *   SCOPE_COLORS, SCOPE_LABELS, SECTIONS
 *   belief — optional belief map (from quiz results)
 *   onClose — return to graph
 *   onNavigate(nodeId) — navigate to another topic
 */
export function TopicView({
  nodeId, nodes, adjacency, lang,
  SCOPE_COLORS, SCOPE_LABELS, SECTIONS,
  belief, onClose, onNavigate,
}) {
  const [openResourceIdx, setOpenResourceIdx] = useState(null);

  const node = nodes.find(n => n.id === nodeId);
  if (!node) return null;

  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;
  const lbl      = lang === "pl" ? node.labelPl : node.label;

  const color      = SCOPE_COLORS?.[node.scope] ?? "#4a9eff";
  const scopeLabel = SCOPE_LABELS?.[node.scope]?.[lang === "pl" ? "pl" : "en"] ?? "";
  const sectionLbl = SECTIONS?.[node.section]?.label ?? "";
  const prereqs    = adjacency.prereqs[nodeId] ?? [];
  const deps       = adjacency.dependents[nodeId] ?? [];
  const resources  = node.resources ?? [];
  const status     = belief?.[nodeId];

  const openResource = openResourceIdx != null ? resources[openResourceIdx] ?? null : null;

  const typeColor = {
    interactive: "#58C4DD",
    video:       "#FF6B35",
    article:     "#83C167",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg,
      fontFamily: FONT,
      overflowY: "auto",
      animation: "topicSlideIn 0.2s ease",
    }}>
      <style>{`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        maxWidth: 580, width: "100%",
        margin: "0 auto",
        padding: "32px 24px 64px",
      }}>
        {/* Back button */}
        <button
          onClick={onClose}
          style={{
            padding: "6px 14px", fontSize: 12, fontFamily: FONT,
            borderRadius: 6, border: `1px solid ${COLORS.border}`,
            background: "transparent", color: COLORS.textDim,
            cursor: "pointer", marginBottom: 28,
          }}
        >
          ← {t("topicBack", lang)}
        </button>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          marginBottom: 6,
        }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: color, opacity: 0.8, flexShrink: 0,
          }} />
          <h1 style={{
            margin: 0, fontSize: 22, fontWeight: 700,
            color: COLORS.textPrimary, lineHeight: 1.3,
          }}>
            {lbl}
          </h1>
        </div>

        {/* Meta line */}
        <div style={{
          fontSize: 12, color: COLORS.textDim, marginBottom: 16,
          paddingLeft: 22, lineHeight: 1.6,
        }}>
          {sectionLbl} · {scopeLabel} · {t("level", lang)} {node.level}
        </div>

        {/* Belief status */}
        {status && (
          <div style={{
            display: "inline-block",
            fontSize: 12, fontWeight: 600,
            padding: "6px 14px", borderRadius: 6, marginBottom: 20,
            background: status === "known" ? "#27ae6012" : "#e74c3c12",
            border: `1px solid ${status === "known" ? "#27ae6040" : "#e74c3c40"}`,
            color: status === "known" ? "#2ecc71" : "#ff6b6b",
          }}>
            {status === "known" ? t("beliefKnown", lang) : t("beliefUnknown", lang)}
          </div>
        )}

        {/* ── Description + "nie kumam" example ─────────────────── */}
        {node.body && <NodeDescription body={node.body} lang={lang} />}

        {/* ── Prerequisites ──────────────────────────────────────── */}
        <Section title={t("prerequisites", lang)} color="#4a9eff" empty={prereqs.length === 0} emptyText={t("noPrereqs", lang)}>
          {prereqs.map(id => (
            <NodeChip
              key={id}
              label={getLabel(id)}
              color={SCOPE_COLORS?.[byId[id]?.scope] ?? "#4a9eff"}
              status={belief?.[id]}
              onClick={() => onNavigate(id)}
            />
          ))}
        </Section>

        {/* ── Enables ────────────────────────────────────────────── */}
        <Section title={t("enables", lang)} color="#3dc9b0" empty={deps.length === 0} emptyText={t("noDependents", lang)}>
          {deps.map(id => (
            <NodeChip
              key={id}
              label={getLabel(id)}
              color={SCOPE_COLORS?.[byId[id]?.scope] ?? "#4a9eff"}
              status={belief?.[id]}
              onClick={() => onNavigate(id)}
            />
          ))}
        </Section>

        {/* ── Learning resources ──────────────────────────────────── */}
        {resources.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <div style={{
              fontSize: 13, fontWeight: 600, color: "#FFD166",
              marginBottom: 12,
            }}>
              {t("learningResources", lang)}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {resources.map((res, i) => {
                const title = lang === "pl" ? res.titlePl : res.titleEn;
                const tc    = typeColor[res.type] ?? "#8a9dbe";
                const typeKey = res.type === "interactive" ? "resourceInteractive"
                  : res.type === "video" ? "resourceVideo" : "resourceArticle";
                return (
                  <button
                    key={i}
                    onClick={() => setOpenResourceIdx(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "14px 16px", borderRadius: 8,
                      background: `${tc}0a`, border: `1px solid ${tc}25`,
                      cursor: "pointer", textAlign: "left",
                      width: "100%", fontFamily: FONT,
                      transition: "background 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${tc}18`;
                      e.currentTarget.style.borderColor = `${tc}50`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${tc}0a`;
                      e.currentTarget.style.borderColor = `${tc}25`;
                    }}
                  >
                    <span style={{ fontSize: 18, flexShrink: 0 }}>
                      {res.type === "interactive" ? "⬡" : res.type === "video" ? "▶" : "📄"}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: COLORS.textBody, fontWeight: 500, lineHeight: 1.4 }}>
                        {title}
                      </div>
                      <div style={{
                        fontSize: 10, color: tc, marginTop: 3,
                        fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase",
                      }}>
                        {t(typeKey, lang)}
                      </div>
                    </div>
                    <span style={{ fontSize: 14, color: COLORS.textFaint }}>→</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Resource viewer modal */}
      {openResource && (
        <ResourcePanel
          resource={openResource}
          lang={lang}
          onClose={() => setOpenResourceIdx(null)}
        />
      )}
    </div>
  );
}

/** Description block with optional collapsible "nie kumam?" example */
function NodeDescription({ body, lang }) {
  const [showExample, setShowExample] = useState(false);
  const parts = body.split("<!-- example -->");
  const description = parts[0]?.trim();
  const example = parts[1]?.trim();

  if (!description) return null;

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        fontSize: 13, color: COLORS.textBody, lineHeight: 1.7,
      }}>
        {description}
      </div>
      {example && (
        <>
          <button
            onClick={() => setShowExample(v => !v)}
            style={{
              marginTop: 10, padding: "6px 14px",
              fontSize: 12, fontFamily: FONT,
              borderRadius: 6,
              border: `1px solid ${showExample ? "#FFD16640" : COLORS.border}`,
              background: showExample ? "#FFD16610" : "transparent",
              color: showExample ? "#FFD166" : COLORS.textDim,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {showExample
              ? (lang === "pl" ? "Schowaj przykład" : "Hide example")
              : (lang === "pl" ? "Nie kumam — pokaż na liczbach" : "Show me a concrete example")}
          </button>
          {showExample && (
            <div style={{
              marginTop: 10, padding: "12px 14px",
              borderRadius: 8, fontSize: 13,
              background: "#FFD16608",
              border: "1px solid #FFD16620",
              color: "#e8d5a0", lineHeight: 1.7,
            }}>
              {example}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Section wrapper for prereqs/dependents */
function Section({ title, color, empty, emptyText, children }) {
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{
        fontSize: 13, fontWeight: 600, color,
        marginBottom: 10,
      }}>
        {title}
      </div>
      {empty ? (
        <div style={{ fontSize: 12, color: COLORS.textFaint, fontStyle: "italic" }}>
          {emptyText}
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {children}
        </div>
      )}
    </div>
  );
}

/** Clickable chip for a prerequisite / dependent node */
function NodeChip({ label, color, status, onClick }) {
  const statusDot = status === "known" ? "#27ae60"
    : status === "unknown" ? "#e74c3c"
    : null;

  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "7px 12px", borderRadius: 6,
        background: `${color}0c`, border: `1px solid ${color}25`,
        cursor: "pointer", fontFamily: FONT,
        fontSize: 12, color: COLORS.textBody,
        transition: "background 0.15s, border-color 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}1c`;
        e.currentTarget.style.borderColor = `${color}50`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}0c`;
        e.currentTarget.style.borderColor = `${color}25`;
      }}
    >
      {statusDot && (
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: statusDot, flexShrink: 0,
        }} />
      )}
      {label}
    </button>
  );
}
