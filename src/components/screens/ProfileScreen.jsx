import { useState, useMemo } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { renderLatex } from "../../utils/latex.js";
import { buildAdjacency } from "../../engine/adjacency.js";

/**
 * ProfileScreen — "My Learning Path" profile screen showing saved progress.
 *
 * Props:
 *   savedCourse — { goalId: string|null, belief: object, evidence: object, createdAt: string }
 *   RAW_NODES, RAW_EDGES, SCOPE_COLORS, SCOPE_LABELS, SECTIONS
 *   lang
 *   onResumePath(goalId) — resume learning where they left off
 *   onStartNew() — start a new course/assessment
 *   onSeeMap() — go to graph view
 *   onClose() — back to hero
 */
export function ProfileScreen({
  savedCourse, RAW_NODES, RAW_EDGES,
  SCOPE_COLORS, SCOPE_LABELS, SECTIONS,
  lang,
  onResumePath, onStartLesson, onStartNew, onSeeMap, onClose,
}) {
  const [confirmReset, setConfirmReset] = useState(false);

  const { goalId, belief = {}, evidence = {}, createdAt } = savedCourse ?? {};

  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), [RAW_NODES, RAW_EDGES]);
  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );
  const getLabel = (id) => lang === "pl" ? nodeById[id]?.labelPl : nodeById[id]?.label;

  // Compute topologically-sorted path
  // If goalId: prereqs of goalId. If null: ALL nodes in topo order.
  // Matura-tip nodes are pulled out into a separate optional section.
  const { path, maturaTips } = useMemo(() => {
    const subgraph = new Set();

    if (goalId) {
      const queue = [goalId];
      while (queue.length) {
        const cur = queue.shift();
        if (subgraph.has(cur)) continue;
        if (!nodeById[cur]) continue;
        subgraph.add(cur);
        for (const prereq of (adjacency.prereqs[cur] ?? [])) {
          if (!subgraph.has(prereq)) queue.push(prereq);
        }
      }
    } else {
      for (const n of RAW_NODES) subgraph.add(n.id);
    }

    const inDegree = {};
    for (const id of subgraph) inDegree[id] = 0;
    for (const id of subgraph) {
      for (const dep of (adjacency.dependents[id] ?? [])) {
        if (subgraph.has(dep)) inDegree[dep] = (inDegree[dep] || 0) + 1;
      }
    }

    const sorted = [];
    const q = [];
    for (const id of subgraph) {
      if (inDegree[id] === 0) q.push(id);
    }
    while (q.length) {
      q.sort((a, b) => (nodeById[a]?.level ?? 0) - (nodeById[b]?.level ?? 0));
      const cur = q.shift();
      sorted.push(cur);
      for (const dep of (adjacency.dependents[cur] ?? [])) {
        if (subgraph.has(dep)) {
          inDegree[dep]--;
          if (inDegree[dep] === 0) q.push(dep);
        }
      }
    }

    const tips = [];
    const main = [];
    for (const id of sorted) {
      if (nodeById[id]?.tag === "matura_tip") tips.push(id);
      else main.push(id);
    }
    return { path: main, maturaTips: tips };
  }, [goalId, adjacency, nodeById, RAW_NODES]);

  // Stats
  const knownCount = path.filter(id => belief[id] === "known").length;
  const unknownCount = path.filter(id => belief[id] === "unknown").length;
  const unclassifiedCount = path.length - knownCount - unknownCount;
  const totalCount = path.length;
  const progressPct = totalCount > 0 ? Math.round((knownCount / totalCount) * 100) : 0;

  // First unknown or unclassified node for "Continue learning"
  const firstActionableId = path.find(id => belief[id] !== "known") ?? null;

  // Format date
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US", {
        year: "numeric", month: "short", day: "numeric",
      })
    : "—";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg,
      fontFamily: FONT,
      overflowY: "auto",
      animation: "profileSlideIn 0.2s ease",
    }}>
      <style>{`
        @keyframes profileSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        maxWidth: "min(520px, calc(100% - 32px))", width: "100%",
        margin: "0 auto",
        padding: "24px 16px 48px",
      }}>
        {/* Back button */}
        <button
          onClick={onClose}
          style={{
            padding: "10px 14px", fontSize: 12, fontFamily: FONT,
            borderRadius: 6, border: `1px solid ${COLORS.border}`,
            background: "transparent", color: COLORS.textDim,
            cursor: "pointer", marginBottom: 24,
          }}
        >
          ← {t("topicBack", lang)}
        </button>

        {/* Header */}
        <div style={{ marginBottom: 6 }}>
          <span style={{
            fontSize: 10, color: COLORS.textFaint,
            letterSpacing: 1.5, textTransform: "uppercase",
          }}>
            oczochodzi.pl
          </span>
        </div>
        <h1 style={{
          margin: "0 0 8px", fontSize: 22, fontWeight: 700,
          color: COLORS.textPrimary, lineHeight: 1.3,
        }}>
          {t("profileTitle", lang)}
        </h1>

        {/* Progress summary card */}
        <div style={{
          padding: "18px 16px", borderRadius: 10,
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          marginBottom: 28,
        }}>
          {/* Goal line */}
          <div style={{
            fontSize: 12, color: COLORS.textDim, marginBottom: 10,
            lineHeight: 1.5,
          }}>
            {goalId ? (
              <span>
                {t("profileGoal", lang)}:{" "}
                <span
                  style={{ color: COLORS.textPrimary, fontWeight: 600 }}
                  dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(goalId) ?? "") }}
                />
              </span>
            ) : (
              <span style={{ color: COLORS.textPrimary, fontWeight: 600 }}>
                {t("profileFullCourse", lang)}
              </span>
            )}
          </div>

          {/* Date */}
          <div style={{ fontSize: 11, color: COLORS.textFaint, marginBottom: 14 }}>
            {t("profileStarted", lang)}: {formattedDate}
          </div>

          {/* Stat row */}
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <MiniStat count={knownCount} label={t("resultsKnown", lang)} color={COLORS.known} />
            <MiniStat count={unknownCount} label={t("resultsToStudy", lang)} color="#e74c3c" />
            <MiniStat count={unclassifiedCount} label={t("unclassified", lang)} color={COLORS.textFaint} />
          </div>

          {/* Progress bar */}
          <div style={{
            height: 4, borderRadius: 2, background: COLORS.border,
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%", borderRadius: 2,
              width: `${progressPct}%`,
              background: COLORS.known,
              transition: "width 0.4s ease",
            }} />
          </div>
          <div style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 6, textAlign: "right" }}>
            {progressPct}% ({knownCount}/{totalCount})
          </div>
        </div>

        {/* Learning path timeline */}
        <h2 style={{
          margin: "0 0 6px", fontSize: 15, fontWeight: 700,
          color: COLORS.textPrimary,
        }}>
          {t("profileTimeline", lang)}
        </h2>
        <p style={{
          margin: "0 0 16px", fontSize: 12, color: COLORS.textDim, lineHeight: 1.6,
        }}>
          {totalCount} {t("pathTopics", lang)}
        </p>

        <div style={{ position: "relative", marginBottom: 32 }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 15, top: 12, bottom: 12,
            width: 2, background: COLORS.border, borderRadius: 1,
          }} />

          {path.map((id, i) => {
            const node = nodeById[id];
            const isGoal = goalId && id === goalId;
            const status = belief[id];
            const ev = evidence[id];
            const directlyTested = !!ev;
            const scopeColor = SCOPE_COLORS?.[node?.scope] ?? "#4a9eff";
            const scopeLabel = SCOPE_LABELS?.[node?.scope]?.[lang === "pl" ? "pl" : "en"] ?? "";
            const sectionLabel = (lang === "pl"
              ? SECTIONS?.[node?.section]?.labelPl
              : SECTIONS?.[node?.section]?.labelEn) ?? "";

            let dotColor = COLORS.textFaint;
            let dotBorder = COLORS.border;
            if (status === "known") { dotColor = COLORS.known; dotBorder = COLORS.known; }
            else if (status === "unknown") { dotColor = "#e74c3c"; dotBorder = "#e74c3c"; }

            return (
              <div
                key={id}
                onClick={() => onResumePath(id)}
                style={{
                  position: "relative",
                  paddingLeft: 40, paddingBottom: i < path.length - 1 ? 6 : 0,
                  marginBottom: 6,
                  cursor: "pointer",
                }}
              >
                {/* Dot on timeline */}
                <div style={{
                  position: "absolute", left: 8, top: 12,
                  width: isGoal ? 16 : 12, height: isGoal ? 16 : 12,
                  borderRadius: "50%",
                  background: status ? dotColor : COLORS.bg,
                  border: `2px solid ${status ? dotBorder : COLORS.textFaint}`,
                  marginLeft: isGoal ? -2 : 0,
                  zIndex: 1,
                }} />

                {/* Card */}
                <div style={{
                  padding: "10px 14px", borderRadius: 8,
                  background: isGoal ? `${scopeColor}10` : "transparent",
                  border: `1px solid ${isGoal ? scopeColor + "30" : COLORS.borderSubtle}`,
                  transition: "background 0.15s, border-color 0.15s",
                }}
                  onMouseEnter={e => {
                    if (!isGoal) {
                      e.currentTarget.style.background = `${COLORS.textFaint}10`;
                      e.currentTarget.style.borderColor = COLORS.border;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isGoal) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = COLORS.borderSubtle;
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                    <span
                      style={{
                        fontSize: 13, fontWeight: isGoal ? 700 : 500,
                        color: isGoal ? COLORS.textPrimary : COLORS.textBody,
                        flex: 1, minWidth: 0,
                        overflowWrap: "break-word", wordBreak: "break-word",
                      }}
                      dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(id) ?? "") }}
                    />

                    {/* Badges */}
                    <div style={{ display: "flex", gap: 4, alignItems: "center", flexShrink: 0 }}>
                      {directlyTested && (
                        <span style={{
                          fontSize: 9, padding: "2px 6px", borderRadius: 3,
                          background: ev.correct ? "#27ae6015" : "#e74c3c15",
                          color: ev.correct ? "#2ecc71" : "#ff6b6b",
                          border: `1px solid ${ev.correct ? "#27ae6030" : "#e74c3c30"}`,
                        }}>
                          {ev.correct ? "✓" : "✗"}
                        </span>
                      )}
                      {status === "known" && !directlyTested && (
                        <span style={{
                          fontSize: 9, padding: "2px 6px", borderRadius: 3,
                          background: "#27ae6015", color: "#2ecc71",
                          border: "1px solid #27ae6030",
                        }}>✓</span>
                      )}
                      {status === "unknown" && !directlyTested && (
                        <span style={{
                          fontSize: 9, padding: "2px 6px", borderRadius: 3,
                          background: "#e74c3c15", color: "#ff6b6b",
                          border: "1px solid #e74c3c30",
                        }}>✗</span>
                      )}
                    </div>
                  </div>

                  <div style={{ fontSize: 10, color: COLORS.textFaint, marginTop: 3 }}>
                    {sectionLabel}{sectionLabel && scopeLabel ? " · " : ""}{scopeLabel}
                    {isGoal && <span style={{ color: scopeColor, marginLeft: 6 }}>{t("pathGoal", lang)}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional matura tips — separate, at the end of the path */}
        {maturaTips.length > 0 && (
          <MaturaTipsSection
            tips={maturaTips}
            nodeById={nodeById}
            belief={belief}
            evidence={evidence}
            lang={lang}
            getLabel={getLabel}
            onOpen={onResumePath}
          />
        )}

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
          {/* Primary: Continue learning — launch lesson */}
          {firstActionableId && (
            <button
              onClick={() => {
                if (onStartLesson) {
                  onStartLesson(path, goalId);
                } else {
                  onResumePath(firstActionableId);
                }
              }}
              style={{
                width: "100%", padding: "14px 24px",
                fontSize: 14, fontWeight: 600, fontFamily: FONT,
                borderRadius: 8,
                border: "1px solid #f39c1250",
                background: "#f39c1218",
                color: "#f39c12",
                cursor: "pointer",
              }}
            >
              {t("profileContinue", lang)}
            </button>
          )}

          {/* See map */}
          <button
            onClick={onSeeMap}
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
            {t("resultsSeeMap", lang)}
          </button>

          {/* Start fresh — with confirmation */}
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
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
              {t("profileStartNew", lang)}
            </button>
          ) : (
            <div style={{
              padding: "14px 16px", borderRadius: 8,
              background: "#e74c3c08", border: "1px solid #e74c3c30",
              textAlign: "center",
            }}>
              <p style={{
                margin: "0 0 10px", fontSize: 12, color: COLORS.textBody, lineHeight: 1.5,
              }}>
                {t("profileStartNewConfirm", lang)}
              </p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                <button
                  onClick={() => { setConfirmReset(false); onStartNew(); }}
                  style={{
                    padding: "8px 18px", fontSize: 12, fontFamily: FONT,
                    borderRadius: 6, border: "1px solid #e74c3c50",
                    background: "#e74c3c18", color: "#e74c3c",
                    cursor: "pointer", fontWeight: 600,
                  }}
                >
                  {t("profileStartNew", lang)}
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  style={{
                    padding: "8px 18px", fontSize: 12, fontFamily: FONT,
                    borderRadius: 6, border: `1px solid ${COLORS.border}`,
                    background: "transparent", color: COLORS.textDim,
                    cursor: "pointer",
                  }}
                >
                  {t("cancel", lang)}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Small stat block used in the progress summary card. */
function MiniStat({ count, label, color }) {
  return (
    <div style={{
      flex: 1, minWidth: 0, textAlign: "center",
      padding: "8px 4px", borderRadius: 6,
      background: `${color}08`,
      border: `1px solid ${color}20`,
    }}>
      <div style={{ fontSize: 20, fontWeight: 700, color, lineHeight: 1 }}>
        {count}
      </div>
      <div style={{
        fontSize: 10, color: COLORS.textFaint, marginTop: 4,
        overflowWrap: "break-word", wordBreak: "break-word",
        lineHeight: 1.3,
      }}>
        {label}
      </div>
    </div>
  );
}

/** Optional matura-tips collapsible section shown under the main path. */
function MaturaTipsSection({ tips, nodeById, belief, evidence, lang, getLabel, onOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 32, marginTop: -12 }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", padding: "12px 14px",
          fontSize: 12, fontFamily: FONT, fontWeight: 600,
          borderRadius: 8,
          border: `1px solid ${open ? "#FFD16640" : COLORS.border}`,
          background: open ? "#FFD16610" : "transparent",
          color: open ? "#FFD166" : COLORS.textDim,
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
          textAlign: "left",
        }}
      >
        <span>{open ? "▾" : "▸"} {t("profileMaturaTips", lang)}</span>
        <span style={{
          fontSize: 10, padding: "2px 6px", borderRadius: 4,
          background: "#FFD16622", color: "#FFD166",
          letterSpacing: "0.04em", flexShrink: 0,
        }}>{tips.length}</span>
      </button>
      {open && (
        <>
          <p style={{
            margin: "10px 2px 10px", fontSize: 11, color: COLORS.textFaint,
            lineHeight: 1.6,
          }}>
            {t("profileMaturaTipsSub", lang)}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {tips.map(id => {
              const status = belief?.[id];
              const ev = evidence?.[id];
              const directlyTested = !!ev;
              let dotColor = COLORS.textFaint;
              if (status === "known") dotColor = COLORS.known;
              else if (status === "unknown") dotColor = "#e74c3c";
              return (
                <div
                  key={id}
                  onClick={() => onOpen(id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 8,
                    background: "#FFD16608",
                    border: "1px solid #FFD16620",
                    cursor: "pointer", minWidth: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#FFD16614"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#FFD16608"; }}
                >
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: status ? dotColor : "transparent",
                    border: `1.5px solid ${status ? dotColor : COLORS.textFaint}`,
                    flexShrink: 0,
                  }} />
                  <span
                    style={{
                      fontSize: 13, color: COLORS.textBody, flex: 1, minWidth: 0,
                      overflowWrap: "break-word", wordBreak: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(id) ?? "") }}
                  />
                  {directlyTested && (
                    <span style={{
                      fontSize: 9, padding: "2px 6px", borderRadius: 3,
                      background: ev.correct ? "#27ae6015" : "#e74c3c15",
                      color: ev.correct ? "#2ecc71" : "#ff6b6b",
                      border: `1px solid ${ev.correct ? "#27ae6030" : "#e74c3c30"}`,
                      flexShrink: 0,
                    }}>{ev.correct ? "✓" : "✗"}</span>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
