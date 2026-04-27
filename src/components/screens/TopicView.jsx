import { useState } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { renderLatex } from "../../utils/latex.js";
import { ResourcePanel } from "../panels/ResourcePanel.jsx";
import { LocalMap } from "../ui/LocalMap.jsx";
import { useIsMobile } from "../../hooks/useIsMobile.js";
import { pickNodeBodyLang } from "../../data/courseLoader.js";

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
  belief, evidence, onClose, onNavigate, onShowPath, onQuizMe, onQuizMatura, QUESTION_BANK,
}) {
  const [openResourceIdx, setOpenResourceIdx] = useState(null);
  const isMobile = useIsMobile();

  const node = nodes.find(n => n.id === nodeId);
  if (!node) return null;

  const byId     = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;
  const lbl      = lang === "pl" ? node.labelPl : node.label;

  const color      = SCOPE_COLORS?.[node.scope] ?? "#4a9eff";
  const scopeLabel = SCOPE_LABELS?.[node.scope]?.[lang === "pl" ? "pl" : "en"] ?? "";
  const sectionLbl = (lang === "pl"
    ? SECTIONS?.[node.section]?.labelPl
    : SECTIONS?.[node.section]?.labelEn) ?? "";
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

      {/* Desktop-only "you are here" minimap — teacher-oriented context */}
      {!isMobile && (
        <LocalMap
          nodeId={nodeId} nodes={nodes} adjacency={adjacency}
          SCOPE_COLORS={SCOPE_COLORS}
          belief={belief}
          lang={lang}
          onNavigate={onNavigate}
        />
      )}

      <div style={{
        maxWidth: "min(580px, calc(100% - 32px))", width: "100%",
        margin: "0 auto",
        padding: "24px 16px 48px",
      }}>
        {/* Back button */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 14px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textDim,
              cursor: "pointer",
            }}
          >
            ← {t("topicBack", lang)}
          </button>
          {onShowPath && prereqs.length > 0 && (
            <button
              onClick={() => onShowPath(nodeId)}
              style={{
                padding: "10px 14px", fontSize: 12, fontFamily: FONT,
                borderRadius: 6, border: `1px solid ${color}30`,
                background: `${color}08`, color: color,
                cursor: "pointer",
              }}
            >
              {t("topicLearnPath", lang)}
            </button>
          )}
        </div>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          marginBottom: 6,
        }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: color, opacity: 0.8, flexShrink: 0,
          }} />
          <h1
            style={{
              margin: 0, fontSize: 22, fontWeight: 700,
              color: COLORS.textPrimary, lineHeight: 1.3,
            }}
            dangerouslySetInnerHTML={{ __html: renderLatex(lbl ?? "") }}
          />
        </div>

        {/* Meta line */}
        <div style={{
          fontSize: 12, color: COLORS.textDim, marginBottom: 16,
          paddingLeft: 22, lineHeight: 1.6,
        }}>
          {sectionLbl} · {scopeLabel} · {t("level", lang)} {node.level}
        </div>

        {/* Belief status + evidence */}
        {status && (
          <EvidenceBlock
            nodeId={nodeId} status={status} evidence={evidence}
            adjacency={adjacency} belief={belief} nodes={nodes}
            lang={lang} onNavigate={onNavigate}
          />
        )}

        {/* ── Description + "nie kumam" example ─────────────────── */}
        {node.body && (
          <NodeDescription
            body={pickNodeBodyLang(node, lang).body}
            translationPending={pickNodeBodyLang(node, lang).pending}
            lang={lang}
            renderRelated={id => {
              const n = byId[id];
              if (!n) return null;
              return (
                <NodeChip
                  key={id}
                  label={getLabel(id)}
                  color={SCOPE_COLORS?.[n.scope] ?? "#4a9eff"}
                  status={belief?.[id]}
                  onClick={() => onNavigate(id)}
                />
              );
            }}
          />
        )}

        {/* ── Quiz me buttons ────────────────────────────────────── */}
        {onQuizMe && QUESTION_BANK?.[nodeId]?.length > 0 && (() => {
          const ckeCount = QUESTION_BANK[nodeId].filter(q => q.source?.startsWith("cke")).length;
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              <button
                onClick={() => onQuizMe(nodeId)}
                style={{
                  width: "100%", padding: "12px 16px",
                  fontSize: 13, fontWeight: 600, fontFamily: FONT,
                  borderRadius: 8,
                  border: `1px solid ${color}40`,
                  background: `${color}10`,
                  color: color,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}10`; }}
              >
                {t("topicQuizMe", lang)}
              </button>
              {ckeCount > 0 && onQuizMatura && (
                <button
                  onClick={() => onQuizMatura(nodeId)}
                  style={{
                    width: "100%", padding: "12px 16px",
                    fontSize: 13, fontWeight: 600, fontFamily: FONT,
                    borderRadius: 8,
                    border: "1px solid #FFD16640",
                    background: "#FFD16610",
                    color: "#FFD166",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FFD16620"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#FFD16610"; }}
                >
                  <span>{t("quizMaturaQuestions", lang)}</span>
                  <span style={{
                    fontSize: 11, padding: "2px 6px", borderRadius: 4,
                    background: "#FFD16622", letterSpacing: "0.04em",
                  }}>{ckeCount}</span>
                </button>
              )}
            </div>
          );
        })()}

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

        {/* Coffee — subtle, at the very bottom */}
        <div style={{
          marginTop: 32, paddingTop: 16,
          borderTop: `1px solid ${COLORS.border}`,
          textAlign: "center",
        }}>
          <a
            href="https://buycoffee.to/oczochodzi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11, color: COLORS.textFaint, textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#FFD166"; }}
            onMouseLeave={e => { e.currentTarget.style.color = COLORS.textFaint; }}
          >
            {t("coffeeBtn", lang)}
          </a>
        </div>

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

/** Evidence block — shows WHY a node is green/red and how certain we are */
function EvidenceBlock({ nodeId, status, evidence, adjacency, belief, nodes, lang, onNavigate }) {
  const ev = evidence?.[nodeId];
  const directlyTested = !!ev;
  const statusColor = status === "known" ? "#27ae60" : COLORS.unknown;
  const statusColorLight = status === "known" ? "#2ecc71" : COLORS.unknownHi;
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  // Find the node that was directly tested and caused this inference
  let inferredFrom = null;
  if (!directlyTested && evidence) {
    if (status === "known") {
      // Known was propagated upward from a dependent that was tested correctly
      const deps = adjacency.dependents[nodeId] ?? [];
      inferredFrom = deps.find(d => evidence[d]?.correct && belief[d] === "known");
    } else {
      // Unknown was propagated downward from a prerequisite that was tested incorrectly
      const prereqs = adjacency.prereqs[nodeId] ?? [];
      inferredFrom = prereqs.find(p => evidence[p] && !evidence[p].correct && belief[p] === "unknown");
    }
  }

  return (
    <div style={{
      marginBottom: 20, padding: "12px 14px", borderRadius: 8,
      background: `${statusColor}08`,
      border: `1px solid ${statusColor}20`,
    }}>
      {/* Status header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: "50%",
          background: statusColor,
        }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: statusColorLight }}>
          {status === "known" ? t("beliefKnown", lang) : t("beliefUnknown", lang)}
        </span>
        <span style={{
          fontSize: 10, padding: "2px 8px", borderRadius: 4,
          background: directlyTested ? `${statusColor}15` : "#ffffff08",
          color: directlyTested ? statusColorLight : COLORS.textFaint,
          border: `1px solid ${directlyTested ? statusColor + "30" : COLORS.border}`,
        }}>
          {directlyTested
            ? (lang === "pl" ? "sprawdzone" : "tested")
            : (lang === "pl" ? "wywnioskowane" : "inferred")}
        </span>
      </div>

      {/* Direct evidence: show the question */}
      {directlyTested && (
        <div style={{ fontSize: 12, color: COLORS.textDim, lineHeight: 1.6 }}>
          {ev.correct
            ? (lang === "pl" ? "Odpowiedź poprawna" : "Answered correctly")
            : (lang === "pl" ? "Odpowiedź niepoprawna" : "Answered incorrectly")}
          {ev.questionText && (
            <div style={{
              marginTop: 8, padding: "8px 10px", borderRadius: 6,
              background: "#ffffff06", borderLeft: `2px solid ${statusColor}40`,
              fontSize: 12, color: COLORS.textBody, lineHeight: 1.6,
            }}>
              <span dangerouslySetInnerHTML={{ __html: renderLatex(ev.questionText) }} />
            </div>
          )}
        </div>
      )}

      {/* Inferred: explain why */}
      {!directlyTested && (
        <div style={{ fontSize: 12, color: COLORS.textDim, lineHeight: 1.6 }}>
          {status === "known"
            ? (lang === "pl"
                ? "Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten."
                : "Inferred — if you know a harder topic, you likely know this one too.")
            : (lang === "pl"
                ? "Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem."
                : "Inferred — if you don't know the foundation, topics that build on it may also be difficult.")}
          {inferredFrom && (
            <button
              onClick={() => onNavigate(inferredFrom)}
              style={{
                display: "block", marginTop: 6,
                padding: "10px 14px", borderRadius: 4,
                background: "#ffffff06", border: `1px solid ${COLORS.border}`,
                color: "#4a9eff", cursor: "pointer",
                fontSize: 11, fontFamily: FONT,
              }}
            >
              {t("basedOn", lang)} {getLabel(inferredFrom)} →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/** Description block with optional collapsible "nie kumam?" example + "najczęstsze błędy". */
function NodeDescription({ body, lang, renderRelated, translationPending = false }) {
  const [showExample, setShowExample] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  // Split body into up to four sections by HTML comments.
  // Authors: put `<!-- example -->` before the worked example,
  // `<!-- mistakes -->` before a bulleted "najczęstsze błędy" section,
  // and `<!-- see-also -->` last with whitespace/comma-separated node IDs.
  const splitSeeAlso   = body.split("<!-- see-also -->");
  const bodyCore       = splitSeeAlso[0];
  const seeAlsoIds     = (splitSeeAlso[1] ?? "")
    .split(/[\s,]+/).map(s => s.trim()).filter(Boolean);
  const afterExample   = bodyCore.split("<!-- example -->");
  const description    = afterExample[0]?.trim();
  const afterMistakes  = (afterExample[1] ?? "").split("<!-- mistakes -->");
  const example        = afterMistakes[0]?.trim();
  // mistakes can appear with or without an example section preceding it
  const mistakesBlock  = afterMistakes[1]?.trim()
    ?? (bodyCore.split("<!-- mistakes -->")[1]?.trim() ?? "");
  const mistakes       = mistakesBlock || null;
  const relatedChips   = renderRelated
    ? seeAlsoIds.map(renderRelated).filter(Boolean)
    : [];

  if (!description) return null;

  return (
    <div style={{ marginBottom: 20 }}>
      {translationPending && (
        <div style={{
          fontSize: 12, color: COLORS.textDim,
          marginBottom: 12, padding: "6px 10px",
          borderRadius: 6, background: `${COLORS.textDim}12`,
          border: `1px dashed ${COLORS.border}`,
        }}>
          {t("translationPending", lang)}
        </div>
      )}
      <div
        style={{
          fontSize: 13, color: COLORS.textBody, lineHeight: 1.7,
        }}
        dangerouslySetInnerHTML={{ __html: renderLatex(description) }}
      />
      {example && (
        <>
          <button
            onClick={() => setShowExample(v => !v)}
            style={{
              marginTop: 10, padding: "10px 14px",
              fontSize: 12, fontFamily: FONT,
              borderRadius: 6,
              border: `1px solid ${showExample ? "#FFD16640" : COLORS.border}`,
              background: showExample ? "#FFD16610" : "transparent",
              color: showExample ? "#FFD166" : COLORS.textDim,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {showExample ? t("exampleHide", lang) : t("exampleShow", lang)}
          </button>
          {showExample && (
            <div
              style={{
                marginTop: 10, padding: "12px 14px",
                borderRadius: 8, fontSize: 13,
                background: "#FFD16608",
                border: "1px solid #FFD16620",
                color: "#e8d5a0", lineHeight: 1.7,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: renderLatex(example) }} />
              {relatedChips.length > 0 && (
                <div style={{
                  marginTop: 14, paddingTop: 12,
                  borderTop: "1px solid #FFD16620",
                }}>
                  <div style={{
                    fontSize: 10, letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#FFD16699", marginBottom: 8, fontWeight: 600,
                  }}>
                    {lang === "pl" ? "Zobacz też" : "See also"}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {relatedChips}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
      {mistakes && (
        <>
          <button
            onClick={() => setShowMistakes(v => !v)}
            style={{
              marginTop: 8, marginLeft: example ? 8 : 0,
              padding: "10px 14px",
              fontSize: 12, fontFamily: FONT,
              borderRadius: 6,
              border: `1px solid ${showMistakes ? `${COLORS.unknown}40` : COLORS.border}`,
              background: showMistakes ? `${COLORS.unknown}10` : "transparent",
              color: showMistakes ? COLORS.unknownHi : COLORS.textDim,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {showMistakes ? t("mistakesHide", lang) : t("mistakesShow", lang)}
          </button>
          {showMistakes && (
            <div
              style={{
                marginTop: 10, padding: "12px 14px",
                borderRadius: 8, fontSize: 13,
                background: `${COLORS.unknown}08`,
                border: `1px solid ${COLORS.unknown}20`,
                color: COLORS.textBody, lineHeight: 1.7,
              }}
              dangerouslySetInnerHTML={{ __html: renderLatex(mistakes) }}
            />
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
  const statusDot = status === "known" ? COLORS.known
    : status === "unknown" ? COLORS.unknownHi
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
      <span dangerouslySetInnerHTML={{ __html: renderLatex(label ?? "") }} />
    </button>
  );
}
