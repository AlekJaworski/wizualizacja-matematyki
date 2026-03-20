import { useState } from "react";
import { t } from "../../i18n.js";
import { COLORS, FONT } from "../../styles/tokens.js";
import { ResourcePanel } from "./ResourcePanel.jsx";

/**
 * Side panel shown when a node is selected in normal (non-diagnostic) mode.
 * Displays topic details, prerequisites, dependents, and learning resources.
 * On mobile: bottom sheet. On desktop: side panel.
 */
export function InfoPanel({ nodeId, nodes, adjacency, lang, SCOPE_COLORS, SCOPE_LABELS, SECTIONS, isMobile, onClose }) {
  const node = nodes.find(n => n.id === nodeId);
  const [openResource, setOpenResource] = useState(null);

  if (!node) return null;

  const color    = SCOPE_COLORS?.[node.scope] ?? "#4a9eff";
  const lbl      = lang === "pl" ? node.labelPl : node.label;
  const prereqs  = adjacency.prereqs[nodeId] || [];
  const deps     = adjacency.dependents[nodeId] || [];
  const resources = node.resources ?? [];
  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;
  const fs       = isMobile ? 14 : 11;
  const fsSmall  = isMobile ? 12 : 10;

  const typeColor = {
    interactive: "#58C4DD",
    video:       "#FF6B35",
    article:     "#83C167",
  };

  const content = (
    <>
      {/* Mobile drag handle + close */}
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: COLORS.textFaint }} />
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ color, fontWeight: 700, fontSize: isMobile ? 16 : 13, marginBottom: 4 }}>{lbl}</div>
        {isMobile && (
          <button onClick={onClose} style={{
            background: "none", border: "none", color: COLORS.textDim,
            fontSize: 22, cursor: "pointer", lineHeight: 1, padding: "0 4px",
          }}>×</button>
        )}
      </div>

      <div style={{ color: COLORS.textDim, fontSize: fsSmall, marginBottom: 12, lineHeight: 1.6 }}>
        {SECTIONS?.[node.section]?.label}
        {" · "}
        {SCOPE_LABELS?.[node.scope]?.[lang === "pl" ? "pl" : "en"]}
        {" · "}{t("level", lang)} {node.level}
      </div>

      {prereqs.length > 0 ? (
        <>
          <div style={{ color: "#4a9eff", fontSize: fsSmall, fontWeight: 600, marginBottom: 6 }}>
            {t("prerequisites", lang)}
          </div>
          {prereqs.map(id => (
            <div key={id} style={{ color: "#7a9cc8", paddingLeft: 8, fontSize: fsSmall, lineHeight: isMobile ? 2 : 1.7 }}>
              ← {getLabel(id)}
            </div>
          ))}
        </>
      ) : (
        <div style={{ color: COLORS.textFaint, fontSize: fsSmall, fontStyle: "italic" }}>
          {t("noPrereqs", lang)}
        </div>
      )}

      {deps.length > 0 ? (
        <div style={{ marginTop: 12 }}>
          <div style={{ color: "#3dc9b0", fontSize: fsSmall, fontWeight: 600, marginBottom: 6 }}>
            {t("enables", lang)}
          </div>
          {deps.map(id => (
            <div key={id} style={{ color: "#7ac8b0", paddingLeft: 8, fontSize: fsSmall, lineHeight: isMobile ? 2 : 1.7 }}>
              → {getLabel(id)}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: COLORS.textFaint, fontSize: fsSmall, fontStyle: "italic", marginTop: 10 }}>
          {t("noDependents", lang)}
        </div>
      )}

      {/* ── Learning resources ───────────────────────────────────── */}
      {resources.length > 0 && (
        <div style={{ marginTop: 14, borderTop: `1px solid ${COLORS.border}`, paddingTop: 12 }}>
          <div style={{ color: "#FFD166", fontSize: fsSmall, fontWeight: 600, marginBottom: 8, letterSpacing: "0.02em" }}>
            {t("learningResources", lang)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {resources.map((res, i) => {
              const title    = lang === "pl" ? res.titlePl : res.titleEn;
              const tc       = typeColor[res.type] ?? "#8a9dbe";
              const typeKey  = res.type === "interactive" ? "resourceInteractive"
                             : res.type === "video"       ? "resourceVideo"
                             : "resourceArticle";
              return (
                <button
                  key={i}
                  onClick={() => setOpenResource(res)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    background: `${tc}0f`,
                    border: `1px solid ${tc}30`,
                    borderRadius: 6,
                    padding: isMobile ? "10px 12px" : "7px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    transition: "background 0.15s, border-color 0.15s",
                    fontFamily: FONT,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${tc}1e`; e.currentTarget.style.borderColor = `${tc}60`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${tc}0f`; e.currentTarget.style.borderColor = `${tc}30`; }}
                >
                  {/* Icon */}
                  <span style={{ fontSize: isMobile ? 16 : 13, flexShrink: 0, marginTop: 1 }}>
                    {res.type === "interactive" ? "⬡" : res.type === "video" ? "▶" : "📄"}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: fsSmall, color: COLORS.textBody, lineHeight: 1.4, fontWeight: 500 }}>
                      {title}
                    </div>
                    <div style={{ fontSize: Math.max(fsSmall - 1, 9), color: tc, marginTop: 2, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {t(typeKey, lang)}
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: COLORS.textDim, alignSelf: "center", flexShrink: 0 }}>→</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {isMobile ? (
        <div style={{
          position: "fixed", left: 0, right: 0, bottom: 0,
          background: "#0d1520f5", backdropFilter: "blur(8px)",
          borderTop: `1px solid ${color}40`, borderRadius: "14px 14px 0 0",
          padding: "16px 16px 32px",
          zIndex: 30, maxHeight: "60vh", overflowY: "auto",
        }}>
          {content}
        </div>
      ) : (
        <div style={{
          position: "absolute", right: 16, top: 16, width: 240,
          background: "#0d1520ee", backdropFilter: "blur(6px)",
          border: `1px solid ${color}40`, borderRadius: 8,
          padding: "12px 14px", fontSize: 11, color: COLORS.textBody,
          lineHeight: 1.6, zIndex: 10, maxHeight: "80vh", overflowY: "auto",
        }}>
          {content}
        </div>
      )}

      {/* Resource viewer modal */}
      {openResource && (
        <ResourcePanel
          resource={openResource}
          lang={lang}
          onClose={() => setOpenResource(null)}
        />
      )}
    </>
  );
}
