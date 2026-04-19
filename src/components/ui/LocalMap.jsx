import { useMemo } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";

/**
 * Small "you are here" minimap for the TopicView.
 *
 * Shows the current node + its immediate prereqs and dependents, laid out
 * using each node's (x, y) coordinate from the curriculum graph, scaled to
 * fit. The current node is highlighted; neighbors are clickable.
 *
 * Desktop-only by convention — caller should skip rendering on mobile.
 *
 * Props:
 *   nodeId       — the currently-selected node
 *   nodes        — array of all curriculum nodes (for coords + labels)
 *   adjacency    — { prereqs, dependents } from buildAdjacency
 *   SCOPE_COLORS — scope → color map
 *   belief       — optional belief map (for coloring known/unknown neighbors)
 *   lang         — "pl" | "en"
 *   onNavigate(id)
 */
export function LocalMap({
  nodeId, nodes, adjacency, SCOPE_COLORS,
  belief, lang, onNavigate,
}) {
  const W = 240;
  const H = 160;
  const PAD = 14;

  const layout = useMemo(() => {
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    const node = byId[nodeId];
    if (!node) return null;

    const prereqs = adjacency.prereqs[nodeId] ?? [];
    const deps    = adjacency.dependents[nodeId] ?? [];
    const shown = [nodeId, ...prereqs, ...deps]
      .map(id => byId[id])
      .filter(Boolean);

    if (shown.length === 0) return null;

    // bounding box in graph coords
    const xs = shown.map(n => n.x);
    const ys = shown.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const spanX = Math.max(1, maxX - minX);
    const spanY = Math.max(1, maxY - minY);

    // scale into minimap interior
    const iw = W - 2 * PAD;
    const ih = H - 2 * PAD;
    const scale = Math.min(iw / spanX, ih / spanY);
    // center the layout if one axis is smaller
    const ox = PAD + (iw - spanX * scale) / 2;
    const oy = PAD + (ih - spanY * scale) / 2;

    const toScreen = (gx, gy) => [
      ox + (gx - minX) * scale,
      oy + (gy - minY) * scale,
    ];

    const positioned = shown.map(n => {
      const [sx, sy] = toScreen(n.x, n.y);
      return { ...n, sx, sy };
    });

    const edges = [
      ...prereqs.map(pid => ({ from: pid, to: nodeId })),
      ...deps.map(did => ({ from: nodeId, to: did })),
    ];

    return { nodes: positioned, edges, current: positioned.find(n => n.id === nodeId) };
  }, [nodeId, nodes, adjacency]);

  if (!layout) return null;

  const posOf = Object.fromEntries(layout.nodes.map(n => [n.id, n]));

  return (
    <div style={{
      position: "fixed",
      top: 20, right: 20,
      width: W, height: H + 28,
      background: COLORS.surfaceHi ?? "#16161a",
      border: `1px solid ${COLORS.border}`,
      borderRadius: 10,
      padding: 8,
      fontFamily: FONT,
      boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
      zIndex: 60,
    }}>
      <div style={{
        fontSize: 10, color: COLORS.textFaint,
        letterSpacing: "0.08em", textTransform: "uppercase",
        marginBottom: 4, paddingLeft: 2,
      }}>
        {lang === "pl" ? "Gdzie jesteś" : "You are here"}
      </div>
      <svg width={W - 16} height={H} viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
        {/* edges */}
        {layout.edges.map((e, i) => {
          const a = posOf[e.from], b = posOf[e.to];
          if (!a || !b) return null;
          return (
            <line
              key={i}
              x1={a.sx} y1={a.sy}
              x2={b.sx} y2={b.sy}
              stroke={COLORS.border ?? "rgba(255,255,255,0.25)"}
              strokeWidth={1}
            />
          );
        })}
        {/* nodes */}
        {layout.nodes.map(n => {
          const isCurrent = n.id === nodeId;
          const isPrereq  = (adjacency.prereqs[nodeId] ?? []).includes(n.id);
          const color = SCOPE_COLORS?.[n.scope] ?? "#4a9eff";
          const status = belief?.[n.id];
          const border = status === "known"   ? "#27ae60"
                       : status === "unknown" ? "#e74c3c"
                       : color;
          const r = isCurrent ? 7 : 4.5;
          const label = lang === "pl" ? (n.labelPl ?? n.id) : (n.label ?? n.id);
          return (
            <g key={n.id}>
              <circle
                cx={n.sx} cy={n.sy}
                r={r}
                fill={isCurrent ? color : `${color}aa`}
                stroke={border}
                strokeWidth={isCurrent ? 2 : 1.2}
                style={{ cursor: isCurrent ? "default" : "pointer" }}
                onClick={() => { if (!isCurrent) onNavigate?.(n.id); }}
              >
                <title>{label + (isPrereq ? " (prereq)" : isCurrent ? "" : " (dependent)")}</title>
              </circle>
              {isCurrent && (
                <circle
                  cx={n.sx} cy={n.sy}
                  r={r + 4}
                  fill="none"
                  stroke={color}
                  strokeOpacity={0.35}
                  strokeWidth={1.5}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
