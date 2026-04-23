import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { renderLatex } from "../../utils/latex.js";
import { buildAdjacency } from "../../engine/adjacency.js";
import { propagateKnown } from "../../engine/belief.js";
import { getQuestion } from "../../data/courseLoader.js";

/**
 * LessonView — step-by-step guided lesson through a learning path.
 *
 * Shows one topic at a time: body text, optional visualization iframe,
 * optional quiz question. Student marks each topic as understood to advance.
 *
 * Props:
 *   path           — string[] of node IDs in topo order
 *   goalId         — string|null
 *   RAW_NODES, RAW_EDGES, QUESTION_BANK
 *   SCOPE_COLORS, SCOPE_LABELS, SECTIONS
 *   belief         — current belief map
 *   evidence       — current evidence map
 *   lang
 *   onUpdateBelief(newBelief, newEvidence) — persist changes
 *   onClose()      — back
 */
export function LessonView({
  path, goalId,
  RAW_NODES, RAW_EDGES, QUESTION_BANK,
  SCOPE_COLORS, SCOPE_LABELS, SECTIONS,
  belief, evidence, lang,
  onUpdateBelief, onClose,
}) {
  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), [RAW_NODES, RAW_EDGES]);
  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );

  // Start at first non-known topic
  const firstNonKnown = useMemo(
    () => {
      const idx = path.findIndex(id => belief[id] !== "known");
      return idx >= 0 ? idx : 0;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // only on mount
  );

  const [currentIndex, setCurrentIndex] = useState(firstNonKnown);
  const [completed, setCompleted] = useState(false);

  const totalCount = path.length;
  const knownCount = path.filter(id => belief[id] === "known").length;
  const progressPct = totalCount > 0 ? Math.round((knownCount / totalCount) * 100) : 0;

  const nodeId = path[currentIndex];
  const node = nodeById[nodeId];

  const handleMarkKnown = useCallback(() => {
    const newBelief = propagateKnown(nodeId, belief, adjacency);
    const newEvidence = { ...evidence };
    onUpdateBelief(newBelief, newEvidence);

    // Advance to next
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  }, [nodeId, belief, adjacency, evidence, onUpdateBelief, currentIndex, totalCount]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalCount - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  }, [currentIndex, totalCount]);

  // Completion screen
  if (completed) {
    return (
      <div style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: COLORS.bg, fontFamily: FONT,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: 24,
      }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
          <h1 style={{
            margin: "0 0 8px", fontSize: 22, fontWeight: 700,
            color: COLORS.textPrimary,
          }}>
            {t("lessonComplete", lang)}
          </h1>
          <p style={{
            margin: "0 0 28px", fontSize: 13, color: COLORS.textDim,
            lineHeight: 1.6,
          }}>
            {t("lessonCompleteSub", lang)}
          </p>
          <button
            onClick={onClose}
            style={{
              padding: "14px 28px", fontSize: 14, fontWeight: 600,
              fontFamily: FONT, borderRadius: 8,
              border: `1px solid ${COLORS.unknown}50`,
              background: `${COLORS.unknown}18`, color: COLORS.unknownHi,
              cursor: "pointer",
            }}
          >
            ← {t("topicBack", lang)}
          </button>
        </div>
      </div>
    );
  }

  if (!node) return null;

  const lbl = lang === "pl" ? node.labelPl : node.label;
  const scopeColor = SCOPE_COLORS?.[node.scope] ?? "#4a9eff";
  const scopeLabel = SCOPE_LABELS?.[node.scope]?.[lang === "pl" ? "pl" : "en"] ?? "";
  const sectionLabel = (lang === "pl"
    ? SECTIONS?.[node.section]?.labelPl
    : SECTIONS?.[node.section]?.labelEn) ?? "";

  // Find first interactive resource for iframe
  const interactiveResource = (node.resources ?? []).find(r => r.type === "interactive");

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg, fontFamily: FONT,
      overflowY: "auto",
      animation: "lessonSlideIn 0.2s ease",
    }}>
      <style>{`
        @keyframes lessonSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lesson-body .katex-display { overflow-x: auto; overflow-y: hidden; max-width: 100%; }
        .lesson-body .katex-display > .katex { display: inline-block; min-width: 0; }
      `}</style>

      <div style={{
        maxWidth: "min(580px, calc(100% - 32px))", width: "100%",
        margin: "0 auto",
        padding: "24px 16px 48px",
      }}>
        {/* Top bar: back + counter */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 20,
        }}>
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
          <span style={{ fontSize: 12, color: COLORS.textFaint }}>
            {currentIndex + 1} {t("lessonOf", lang)} {totalCount}
          </span>
        </div>

        {/* Progress bar */}
        <div style={{
          height: 4, borderRadius: 2, background: COLORS.border,
          overflow: "hidden", marginBottom: 24,
        }}>
          <div style={{
            height: "100%", borderRadius: 2,
            width: `${progressPct}%`,
            background: COLORS.known,
            transition: "width 0.4s ease",
          }} />
        </div>

        {/* Meta line */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: "50%",
            background: scopeColor, opacity: 0.8, flexShrink: 0,
          }} />
          <span style={{ fontSize: 11, color: COLORS.textDim }}>
            {sectionLabel} · {scopeLabel}
          </span>
        </div>

        {/* Topic title */}
        <h1
          style={{
            margin: "0 0 16px", fontSize: 22, fontWeight: 700,
            color: COLORS.textPrimary, lineHeight: 1.3,
            overflowWrap: "break-word", wordBreak: "break-word",
          }}
          dangerouslySetInnerHTML={{ __html: renderLatex(lbl ?? "") }}
        />

        {/* Body text */}
        {node.body && (
          <div
            className="lesson-body"
            style={{
              fontSize: 13, color: COLORS.textBody, lineHeight: 1.7,
              marginBottom: 24,
              overflowWrap: "break-word", wordBreak: "break-word",
            }}
            dangerouslySetInnerHTML={{ __html: renderLatex(node.body.split("<!-- example -->")[0]?.trim() ?? "") }}
          />
        )}

        {/* Visualization iframe */}
        {interactiveResource && (
          <VizSection resource={interactiveResource} lang={lang} />
        )}

        {/* Additional resource links (video/article + extra interactive ones) */}
        <ExtraResources resources={node.resources ?? []} interactive={interactiveResource} lang={lang} />

        {/* Quiz */}
        <QuizSection
          nodeId={nodeId}
          QUESTION_BANK={QUESTION_BANK}
          belief={belief}
          evidence={evidence}
          adjacency={adjacency}
          lang={lang}
          onUpdateBelief={onUpdateBelief}
        />

        {/* Navigation: primary on top, prev/next row below */}
        <div style={{
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: 20, marginTop: 28,
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <button
            onClick={handleMarkKnown}
            style={{
              width: "100%", padding: "14px 20px", fontSize: 14,
              fontWeight: 600, fontFamily: FONT, borderRadius: 8,
              border: `1px solid ${COLORS.unknown}50`,
              background: `${COLORS.unknown}18`, color: COLORS.unknownHi,
              cursor: "pointer", textAlign: "center",
            }}
          >
            {t("iUnderstand", lang)}
          </button>

          {(currentIndex > 0 || currentIndex < totalCount - 1) && (
            <div style={{ display: "flex", gap: 10 }}>
              {currentIndex > 0 ? (
                <button
                  onClick={handlePrev}
                  style={{
                    flex: 1, padding: "12px 18px", fontSize: 13, fontFamily: FONT,
                    borderRadius: 8, border: `1px solid ${COLORS.border}`,
                    background: "transparent", color: COLORS.textDim,
                    cursor: "pointer",
                  }}
                >
                  {t("lessonPrev", lang)}
                </button>
              ) : <div style={{ flex: 1 }} />}
              {currentIndex < totalCount - 1 ? (
                <button
                  onClick={handleNext}
                  style={{
                    flex: 1, padding: "12px 18px", fontSize: 13, fontFamily: FONT,
                    borderRadius: 8, border: `1px solid ${COLORS.border}`,
                    background: "transparent", color: COLORS.textDim,
                    cursor: "pointer",
                  }}
                >
                  {t("lessonNext", lang)}
                </button>
              ) : <div style={{ flex: 1 }} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Additional resource links shown in the lesson (video/article + any extra
 * interactive ones beyond the main embedded viz). Skipped entirely when empty. */
function ExtraResources({ resources, interactive, lang }) {
  const extras = (resources ?? []).filter(r => r !== interactive);
  if (extras.length === 0) return null;

  const typeColor = {
    interactive: "#58C4DD",
    video:       "#FF6B35",
    article:     "#83C167",
  };
  const typeKey = (type) => type === "interactive" ? "resourceInteractive"
    : type === "video" ? "resourceVideo" : "resourceArticle";

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontSize: 11, fontWeight: 600, color: "#83C167",
        letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 10,
      }}>
        {t("lessonResources", lang)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {extras.map((res, i) => {
          const title = lang === "pl" ? res.titlePl : res.titleEn;
          const tc = typeColor[res.type] ?? "#8a9dbe";
          const base = import.meta.env.BASE_URL ?? "/";
          const href = res.url.startsWith("http")
            ? res.url
            : `${base.replace(/\/$/, "")}/${res.url.replace(/^\//, "")}${res.url.includes("?") ? "&" : "?"}lang=${lang}`;
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 8,
                background: `${tc}0a`, border: `1px solid ${tc}25`,
                textDecoration: "none", fontFamily: FONT, minWidth: 0,
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>
                {res.type === "interactive" ? "⬡" : res.type === "video" ? "▶" : "📄"}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 13, color: COLORS.textBody, fontWeight: 500,
                  lineHeight: 1.4,
                  overflowWrap: "break-word", wordBreak: "break-word",
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: 10, color: tc, marginTop: 2,
                  fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase",
                }}>
                  {t(typeKey(res.type), lang)}
                </div>
              </div>
              <span style={{ fontSize: 13, color: COLORS.textFaint, flexShrink: 0 }}>→</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

/** Inline visualization iframe section — auto-resizes to iframe content. */
function VizSection({ resource, lang }) {
  const base = import.meta.env.BASE_URL ?? "/";
  const rawUrl = resource.url.startsWith("http")
    ? resource.url
    : `${base.replace(/\/$/, "")}/${resource.url.replace(/^\//, "")}`;
  const resolvedUrl = rawUrl + (rawUrl.includes("?") ? "&" : "?") + "lang=" + lang;
  const title = lang === "pl" ? resource.titlePl : resource.titleEn;

  // Auto-fit iframe height to the loaded document. Viz resources are same-origin
  // so we can read the inner scrollHeight directly (no postMessage needed).
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(820);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    let ro;
    const sync = () => {
      try {
        const doc = el.contentDocument;
        if (!doc?.body) return;
        const h = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
        if (h > 0) setIframeHeight(h);
      } catch { /* cross-origin or not ready yet */ }
    };
    const onLoad = () => {
      sync();
      try {
        const doc = el.contentDocument;
        if (doc?.body && typeof ResizeObserver !== "undefined") {
          ro = new ResizeObserver(sync);
          ro.observe(doc.body);
        }
      } catch {}
    };
    el.addEventListener("load", onLoad);
    return () => {
      el.removeEventListener("load", onLoad);
      ro?.disconnect();
    };
  }, [resolvedUrl]);

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{
        fontSize: 11, fontWeight: 600, color: "#58C4DD",
        letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 10,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{
          display: "inline-block", width: "100%", height: 1,
          background: "#58C4DD20",
        }} />
        <span style={{ flexShrink: 0 }}>{t("lessonViz", lang)}</span>
        <span style={{
          display: "inline-block", width: "100%", height: 1,
          background: "#58C4DD20",
        }} />
      </div>
      <div style={{
        borderRadius: 10, overflow: "hidden",
        border: "1px solid #58C4DD25",
        background: "#0e0e12",
      }}>
        <iframe
          ref={iframeRef}
          src={resolvedUrl}
          sandbox="allow-scripts allow-same-origin allow-forms"
          scrolling="no"
          style={{
            width: "100%", height: iframeHeight, border: "none",
            display: "block", background: "#0e0e12",
          }}
          title={title}
          loading="lazy"
        />
      </div>
    </div>
  );
}

/** Quiz question section */
function QuizSection({ nodeId, QUESTION_BANK, belief, evidence, adjacency, lang, onUpdateBelief }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);
  const [question, setQuestion] = useState(() => getQuestion(QUESTION_BANK, nodeId, []));

  // Reset quiz state when nodeId changes
  const [prevNodeId, setPrevNodeId] = useState(nodeId);
  if (nodeId !== prevNodeId) {
    setPrevNodeId(nodeId);
    setSelectedOption(null);
    setChecked(false);
    setQuestion(getQuestion(QUESTION_BANK, nodeId, []));
  }

  const handleCheck = useCallback(() => {
    if (selectedOption == null || !question) return;
    setChecked(true);

    const isCorrect = selectedOption === question.correct;
    const newEvidence = { ...evidence, [nodeId]: { correct: isCorrect, questionText: question.q } };

    if (isCorrect) {
      const newBelief = propagateKnown(nodeId, belief, adjacency);
      onUpdateBelief(newBelief, newEvidence);
    } else {
      // Mark as unknown but don't propagate downward — student can still proceed
      const newBelief = { ...belief, [nodeId]: "unknown" };
      onUpdateBelief(newBelief, newEvidence);
    }
  }, [selectedOption, question, nodeId, belief, evidence, adjacency, onUpdateBelief]);

  if (!question) return null;

  const isCorrect = checked && selectedOption === question.correct;

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Section header */}
      <div style={{
        fontSize: 11, fontWeight: 600, color: "#FFD166",
        letterSpacing: "0.06em", textTransform: "uppercase",
        marginBottom: 14,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{
          display: "inline-block", width: "100%", height: 1,
          background: "#FFD16620",
        }} />
        <span style={{ flexShrink: 0 }}>{t("lessonPractice", lang)}</span>
        <span style={{
          display: "inline-block", width: "100%", height: 1,
          background: "#FFD16620",
        }} />
      </div>

      {/* Question text */}
      <div
        style={{
          fontSize: 13, color: COLORS.textBody, lineHeight: 1.7,
          marginBottom: 14,
        }}
        dangerouslySetInnerHTML={{ __html: renderLatex(question.q ?? "") }}
      />

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {(question.options ?? []).map((opt, i) => {
          const isSelected = selectedOption === i;
          const letter = String.fromCharCode(65 + i); // A, B, C, D
          let bg = "transparent";
          let borderColor = COLORS.border;
          let textColor = COLORS.textBody;

          if (checked) {
            if (i === question.correct) {
              bg = "#27ae6015";
              borderColor = "#27ae6050";
              textColor = "#2ecc71";
            } else if (isSelected && i !== question.correct) {
              bg = `${COLORS.unknown}15`;
              borderColor = `${COLORS.unknown}50`;
              textColor = COLORS.unknownHi;
            }
          } else if (isSelected) {
            bg = `${COLORS.frontier}15`;
            borderColor = `${COLORS.frontier}50`;
            textColor = COLORS.frontierHi;
          }

          return (
            <button
              key={i}
              onClick={() => { if (!checked) setSelectedOption(i); }}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10,
                padding: "12px 14px", borderRadius: 8,
                background: bg, border: `1px solid ${borderColor}`,
                cursor: checked ? "default" : "pointer",
                textAlign: "left", fontFamily: FONT, fontSize: 13,
                color: textColor, lineHeight: 1.5,
                transition: "background 0.15s, border-color 0.15s",
                width: "100%",
              }}
            >
              <span style={{
                fontWeight: 700, fontSize: 12, flexShrink: 0,
                width: 22, height: 22, borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: isSelected && !checked ? `${COLORS.frontier}20` : checked && i === question.correct ? "#27ae6020" : "transparent",
                border: `1px solid ${isSelected && !checked ? `${COLORS.frontier}40` : "transparent"}`,
              }}>
                {letter}
              </span>
              <span dangerouslySetInnerHTML={{ __html: renderLatex(opt) }} />
            </button>
          );
        })}
      </div>

      {/* Check button or result */}
      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={selectedOption == null}
          style={{
            padding: "12px 24px", fontSize: 13, fontWeight: 600,
            fontFamily: FONT, borderRadius: 8,
            border: `1px solid ${selectedOption != null ? "#FFD16650" : COLORS.border}`,
            background: selectedOption != null ? "#FFD16618" : "transparent",
            color: selectedOption != null ? "#FFD166" : COLORS.textFaint,
            cursor: selectedOption != null ? "pointer" : "default",
            width: "100%",
          }}
        >
          {t("lessonCheck", lang)}
        </button>
      ) : (
        <div style={{
          padding: "12px 14px", borderRadius: 8,
          background: isCorrect ? "#27ae6008" : `${COLORS.unknown}08`,
          border: `1px solid ${isCorrect ? "#27ae6020" : `${COLORS.unknown}20`}`,
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, marginBottom: 6,
            color: isCorrect ? "#2ecc71" : "#ff6b6b",
          }}>
            {isCorrect ? t("quizCorrect", lang) : t("quizIncorrect", lang)}
          </div>
          {question.hint && (
            <div
              style={{ fontSize: 12, color: COLORS.textDim, lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{ __html: renderLatex(question.hint) }}
            />
          )}
        </div>
      )}
    </div>
  );
}
