import { useState, useMemo } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { renderLatex } from "../../utils/latex.js";
import { buildAdjacency } from "../../engine/adjacency.js";

/**
 * Learning Path — a guided linear sequence from foundations to a keystone topic.
 *
 * Computes the transitive prerequisite chain, topologically sorts it,
 * and presents it as a vertical timeline the student works through.
 *
 * Props:
 *   goalId — the keystone topic to reach
 *   RAW_NODES, RAW_EDGES — course data
 *   SCOPE_COLORS, SCOPE_LABELS, SECTIONS
 *   belief — optional belief map from diagnostic
 *   evidence — optional evidence map
 *   lang
 *   onSelectTopic(nodeId) — open TopicView for this node
 *   onClose — go back
 */
export function LearningPath({
  goalId, RAW_NODES, RAW_EDGES,
  SCOPE_COLORS, SCOPE_LABELS, SECTIONS,
  belief, evidence, lang,
  onSelectTopic, onStartLesson, onClose,
}) {
  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), [RAW_NODES, RAW_EDGES]);
  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );
  const getLabel = (id) => lang === "pl" ? nodeById[id]?.labelPl : nodeById[id]?.label;
  const goalNode = nodeById[goalId];

  // Compute topologically-sorted prerequisite chain (BFS from goal, reverse order).
  // Matura-tip nodes are pulled out into a separate optional list.
  const { path, maturaTips } = useMemo(() => {
    const visited = new Set();
    const order = [];

    const queue = [goalId];
    while (queue.length) {
      const cur = queue.shift();
      if (visited.has(cur)) continue;
      if (!nodeById[cur]) continue;
      visited.add(cur);
      order.push(cur);
      for (const prereq of (adjacency.prereqs[cur] ?? [])) {
        if (!visited.has(prereq)) queue.push(prereq);
      }
    }

    const subgraph = new Set(order);
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
      // Never filter the goal itself, even if it happens to be tagged.
      if (id !== goalId && nodeById[id]?.tag === "matura_tip") tips.push(id);
      else main.push(id);
    }
    return { path: main, maturaTips: tips };
  }, [goalId, adjacency, nodeById]);

  // Stats
  const knownCount = path.filter(id => belief?.[id] === "known").length;
  const unknownCount = path.filter(id => belief?.[id] === "unknown").length;
  const totalCount = path.length;
  const progressPct = totalCount > 0 ? Math.round((knownCount / totalCount) * 100) : 0;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg,
      fontFamily: FONT,
      overflowY: "auto",
      animation: "pathSlideIn 0.2s ease",
    }}>
      <style>{`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        maxWidth: "min(520px, calc(100% - 32px))", width: "100%",
        margin: "0 auto",
        padding: "24px 16px 48px",
      }}>
        {/* Back */}
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
            {t("pathLabel", lang)}
          </span>
        </div>
        <h1
          style={{
            margin: "0 0 8px", fontSize: 22, fontWeight: 700,
            color: COLORS.textPrimary, lineHeight: 1.3,
          }}
          dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(goalId) ?? "") }}
        />
        <p style={{
          margin: "0 0 20px", fontSize: 12, color: COLORS.textDim,
        }}>
          {totalCount} {t("pathTopics", lang)}
          {belief && Object.keys(belief).length > 0 && (
            <> · <span style={{ color: COLORS.known }}>{knownCount}</span> {t("pathKnown", lang)} · <span style={{ color: "#e74c3c" }}>{unknownCount}</span> {t("pathToStudy", lang)}</>
          )}
        </p>

        {/* Progress bar */}
        {belief && Object.keys(belief).length > 0 && (
          <div style={{
            height: 4, borderRadius: 2, background: COLORS.border,
            overflow: "hidden", marginBottom: 20,
          }}>
            <div style={{
              height: "100%", borderRadius: 2,
              width: `${progressPct}%`,
              background: COLORS.known,
              transition: "width 0.4s ease",
            }} />
          </div>
        )}

        {/* Start lesson button */}
        {onStartLesson && (
          <button
            onClick={() => onStartLesson(path, goalId)}
            style={{
              width: "100%", padding: "14px 24px", marginBottom: 28,
              fontSize: 14, fontWeight: 600, fontFamily: FONT,
              borderRadius: 8,
              border: "1px solid #f39c1250",
              background: "#f39c1218",
              color: "#f39c12",
              cursor: "pointer",
            }}
          >
            {t("startLesson", lang)}
          </button>
        )}

        {/* Path timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 15, top: 12, bottom: 12,
            width: 2, background: COLORS.border, borderRadius: 1,
          }} />

          {path.map((id, i) => {
            const node = nodeById[id];
            const isGoal = id === goalId;
            const status = belief?.[id];
            const ev = evidence?.[id];
            const directlyTested = !!ev;
            const hasResources = node?.resources?.length > 0;
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
                onClick={() => onSelectTopic(id)}
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
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8, minWidth: 0,
                  }}>
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
                      {hasResources && (
                        <span style={{
                          fontSize: 9, padding: "2px 6px", borderRadius: 3,
                          background: "#58C4DD15", color: "#58C4DD", border: "1px solid #58C4DD30",
                        }}>⬡</span>
                      )}
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
                    </div>
                  </div>

                  <div style={{
                    fontSize: 10, color: COLORS.textFaint, marginTop: 3,
                  }}>
                    {sectionLabel} · {scopeLabel}
                    {isGoal && <span style={{ color: scopeColor, marginLeft: 6 }}>{t("pathGoal", lang)}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {maturaTips.length > 0 && (
          <MaturaTipsBlock
            tips={maturaTips}
            nodeById={nodeById}
            belief={belief}
            lang={lang}
            getLabel={getLabel}
            onOpen={onSelectTopic}
          />
        )}
      </div>
    </div>
  );
}

function MaturaTipsBlock({ tips, nodeById, belief, lang, getLabel, onOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 24 }}>
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
            margin: "10px 2px 10px", fontSize: 11, color: COLORS.textFaint, lineHeight: 1.6,
          }}>
            {t("profileMaturaTipsSub", lang)}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {tips.map(id => {
              const status = belief?.[id];
              let dot = COLORS.textFaint;
              if (status === "known") dot = COLORS.known;
              else if (status === "unknown") dot = "#e74c3c";
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
                >
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: status ? dot : "transparent",
                    border: `1.5px solid ${status ? dot : COLORS.textFaint}`,
                    flexShrink: 0,
                  }} />
                  <span
                    style={{
                      fontSize: 13, color: COLORS.textBody, flex: 1, minWidth: 0,
                      overflowWrap: "break-word", wordBreak: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: renderLatex(getLabel(id) ?? "") }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
