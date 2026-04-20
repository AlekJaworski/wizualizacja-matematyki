import { useMemo, useState } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * "You are here" minimap — a windowed cutout of the full curriculum graph
 * centered on the currently-selected node.
 *
 * UX:
 *   - Collapsed by default: a small "Mapa" button floats top-right.
 *   - Click to expand into a fixed card that shows every node within a
 *     ~radius (in graph coords) of the current node, plus the edges
 *     connecting any two visible nodes. Not just immediate neighbors —
 *     the aim is "where does this topic live in the curriculum".
 *   - Clicking any non-current visible node navigates to it.
 *   - Escape or the × button collapses.
 *
 * Desktop-only by convention — caller skips on mobile.
 *
 * Props:
 *   nodeId       — the currently-selected node id
 *   nodes        — array of all curriculum nodes (for coords + labels)
 *   adjacency    — { prereqs: {id: [ids]}, dependents: {id: [ids]} }
 *   SCOPE_COLORS — scope → color map
 *   belief       — optional belief map (for coloring known/unknown)
 *   lang         — "pl" | "en"
 *   onNavigate(id)
 */
export function LocalMap({
  nodeId, nodes, adjacency, SCOPE_COLORS,
  belief, lang, onNavigate,
}) {
  const [open, setOpen] = useState(false);

  // Graph-coord radius around the current node's (x, y) to include.
  // Curriculum x/y values span ~0–1300 and ~0–1100 respectively, so ~350
  // picks up two layers of prereqs/dependents without overwhelming.
  const RADIUS = 350;

  const layout = useMemo(() => {
    if (!open) return null;
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    const center = byId[nodeId];
    if (!center) return null;

    // 1. pick every node within the radius in graph coords
    const visible = nodes.filter(n => {
      const dx = n.x - center.x;
      const dy = n.y - center.y;
      return dx * dx + dy * dy <= RADIUS * RADIUS;
    });
    if (visible.length === 0) return null;
    const visibleIds = new Set(visible.map(n => n.id));

    // 2. collect every edge where both endpoints are visible
    const edges = [];
    const seen = new Set();
    for (const n of visible) {
      const prereqs = adjacency.prereqs[n.id] ?? [];
      for (const p of prereqs) {
        if (!visibleIds.has(p)) continue;
        const key = p + ">" + n.id;
        if (seen.has(key)) continue;
        seen.add(key);
        edges.push({ from: p, to: n.id });
      }
    }

    // 3. project into minimap pixel space
    const W = 380, H = 260, PAD = 18;
    const xs = visible.map(n => n.x);
    const ys = visible.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const spanX = Math.max(1, maxX - minX);
    const spanY = Math.max(1, maxY - minY);
    const iw = W - 2 * PAD;
    const ih = H - 2 * PAD;
    const scale = Math.min(iw / spanX, ih / spanY);
    const ox = PAD + (iw - spanX * scale) / 2;
    const oy = PAD + (ih - spanY * scale) / 2;
    const toScreen = (gx, gy) => [
      ox + (gx - minX) * scale,
      oy + (gy - minY) * scale,
    ];

    const positioned = visible.map(n => {
      const [sx, sy] = toScreen(n.x, n.y);
      return { ...n, sx, sy };
    });

    return { W, H, nodes: positioned, edges };
  }, [open, nodeId, nodes, adjacency]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 20, right: 20,
          padding: "8px 14px",
          fontSize: 12, fontFamily: FONT, fontWeight: 600,
          background: COLORS.surfaceHi ?? "#16161a",
          color: COLORS.textBody,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 8,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 60,
        }}
        title={t("mapShowCutout", lang)}
      >
        ⌖ {t("mapLabel", lang)}
      </button>
    );
  }

  if (!layout) {
    return (
      <div style={{
        position: "fixed",
        top: 20, right: 20,
        padding: "8px 14px",
        fontSize: 11, color: COLORS.textDim,
        background: COLORS.surfaceHi ?? "#16161a",
        border: `1px solid ${COLORS.border}`,
        borderRadius: 8,
        zIndex: 60,
      }}>
        {t("mapNoNeighbors", lang)}
        <button
          onClick={() => setOpen(false)}
          style={{
            marginLeft: 10, background: "transparent", border: "none",
            color: COLORS.textFaint, cursor: "pointer",
          }}
        >×</button>
      </div>
    );
  }

  const posOf = Object.fromEntries(layout.nodes.map(n => [n.id, n]));
  const visibleIdSet = new Set(layout.nodes.map(n => n.id));
  const currentPrereqs = new Set(adjacency.prereqs[nodeId] ?? []);
  const currentDeps    = new Set(adjacency.dependents[nodeId] ?? []);

  return (
    <div style={{
      position: "fixed",
      top: 20, right: 20,
      width: layout.W, height: layout.H + 44,
      background: COLORS.surfaceHi ?? "#16161a",
      border: `1px solid ${COLORS.border}`,
      borderRadius: 10,
      padding: "10px 12px 12px",
      fontFamily: FONT,
      boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
      zIndex: 60,
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 6,
      }}>
        <div style={{
          fontSize: 10, color: COLORS.textFaint,
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {t("mapCutoutTitle", lang)}
          <span style={{ marginLeft: 8, color: COLORS.textDim, textTransform: "none", letterSpacing: 0 }}>
            · {layout.nodes.length} {t("mapTopics", lang)}
          </span>
        </div>
        <button
          onClick={() => setOpen(false)}
          style={{
            background: "transparent", border: "none",
            color: COLORS.textFaint, cursor: "pointer",
            fontSize: 16, lineHeight: 1, padding: "2px 6px",
          }}
          title={t("mapClose", lang)}
        >×</button>
      </div>
      <svg
        width={layout.W - 24}
        height={layout.H}
        viewBox={`0 0 ${layout.W} ${layout.H}`}
        style={{ display: "block" }}
      >
        {/* edges */}
        {layout.edges.map((e, i) => {
          const a = posOf[e.from], b = posOf[e.to];
          if (!a || !b) return null;
          const touchesCurrent = e.from === nodeId || e.to === nodeId;
          return (
            <line
              key={i}
              x1={a.sx} y1={a.sy}
              x2={b.sx} y2={b.sy}
              stroke={touchesCurrent ? (COLORS.textBody ?? "#cfd8e3") : (COLORS.border ?? "rgba(255,255,255,0.2)")}
              strokeOpacity={touchesCurrent ? 0.7 : 0.35}
              strokeWidth={touchesCurrent ? 1.4 : 1}
            />
          );
        })}
        {/* nodes */}
        {layout.nodes.map(n => {
          const isCurrent = n.id === nodeId;
          const isPrereq  = currentPrereqs.has(n.id);
          const isDep     = currentDeps.has(n.id);
          const color = SCOPE_COLORS?.[n.scope] ?? "#4a9eff";
          const status = belief?.[n.id];
          const border = status === "known"   ? "#27ae60"
                       : status === "unknown" ? "#e74c3c"
                       : color;
          const r = isCurrent ? 7 : (isPrereq || isDep) ? 5 : 3.5;
          const fillAlpha = isCurrent ? "" : (isPrereq || isDep) ? "cc" : "66";
          const label = lang === "pl" ? (n.labelPl ?? n.id) : (n.label ?? n.id);
          const role = isCurrent ? "" : isPrereq ? " (prereq)" : isDep ? " (dependent)" : "";
          return (
            <g key={n.id}>
              <circle
                cx={n.sx} cy={n.sy}
                r={r}
                fill={isCurrent ? color : `${color}${fillAlpha}`}
                stroke={border}
                strokeWidth={isCurrent ? 2 : 1}
                style={{ cursor: isCurrent ? "default" : "pointer" }}
                onClick={() => { if (!isCurrent) onNavigate?.(n.id); }}
              >
                <title>{label + role}</title>
              </circle>
              {isCurrent && (
                <circle
                  cx={n.sx} cy={n.sy}
                  r={r + 5}
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
