import { useMemo } from "react";

/** Returns the visual radius of a node by curriculum level. */
function nodeRadius(n) { return 6 + n.level * 2; }

/**
 * Renders all directed prerequisite edges as SVG lines with arrowheads.
 *
 * @param {{ edges: [string,string][], nodes: Array<{id,x,y,level}>, highlightedIds: Set<string>|null }} props
 */
export function EdgeLayer({ edges, nodes, highlightedIds }) {
  const byId = useMemo(
    () => Object.fromEntries(nodes.map(n => [n.id, n])),
    [nodes]
  );

  return (
    <g>
      {edges.map(([from, to]) => {
        const a = byId[from], b = byId[to];
        if (!a || !b) return null;

        const isHighlighted = highlightedIds?.has(from) && highlightedIds?.has(to);
        const isDimmed      = highlightedIds && !isHighlighted;

        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        // Shorten line so arrowhead lands at target node circumference
        const rB = nodeRadius(b) + 3;
        const ex = b.x - (dx / dist) * rB;
        const ey = b.y - (dy / dist) * rB;

        // Start just outside source node
        const rA = nodeRadius(a) + 2;
        const sx = a.x + (dx / dist) * rA;
        const sy = a.y + (dy / dist) * rA;

        const stroke      = isDimmed ? "#0f1825" : isHighlighted ? "#4a9eff" : "#2a3f5a";
        const strokeWidth = isHighlighted ? 1.8 : 1;
        const opacity     = isDimmed ? 0.15 : isHighlighted ? 1 : 0.55;
        const markerId    = isDimmed
          ? "url(#arrow-dim)"
          : isHighlighted
          ? "url(#arrow-hi)"
          : "url(#arrow-default)";

        return (
          <line
            key={`${from}-${to}`}
            x1={sx} y1={sy} x2={ex} y2={ey}
            stroke={stroke}
            strokeWidth={strokeWidth}
            opacity={opacity}
            markerEnd={markerId}
          />
        );
      })}
    </g>
  );
}
