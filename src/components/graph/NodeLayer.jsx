import { SCOPE_COLORS } from "../../data/sections.js";

/** Returns the visual radius of a node by curriculum level. */
function nodeRadius(n) { return 6 + n.level * 2; }

/**
 * Renders all curriculum topic nodes as SVG groups (circle + label).
 * Supports normal inspection mode and diagnostic quiz mode styling.
 */
export function NodeLayer({
  nodes,
  filteredIds,
  highlightedIds,
  selected,
  onSelect,
  onHover,
  lang,
  diagMode,
  belief,
  frontier,
}) {
  return (
    <g>
      {nodes.map(n => {
        const r         = nodeRadius(n);
        const baseColor = SCOPE_COLORS[n.scope] || "#aaa";
        const filtered  = filteredIds && !filteredIds.has(n.id);
        const highlighted = highlightedIds?.has(n.id);
        const isSelected  = selected === n.id;
        const dimmed = (highlightedIds && !highlighted) || filtered;
        const lbl    = lang === "pl" ? n.labelPl : n.label;

        let fillColor    = baseColor;
        let fillOpacity  = dimmed ? 0.15 : 0.9;
        let labelOpacity = dimmed ? 0.2  : 0.85;
        let ringColor    = null;
        let ringWidth    = 2;

        if (diagMode) {
          const state      = belief[n.id];
          const isFrontier = frontier.includes(n.id);
          fillOpacity  = filtered ? 0.1 : 0.9;
          labelOpacity = filtered ? 0.15 : 0.9;

          if (state === "known") {
            fillColor = "#27ae60";
            ringColor = "#2ecc71";
          } else if (state === "unknown") {
            fillColor   = "#c0392b";
            fillOpacity = filtered ? 0.1 : 0.5;
            ringColor   = "#e74c3c";
          } else if (isFrontier) {
            fillColor = "#f39c12";
            ringColor = "#f1c40f";
            ringWidth = 3;
          } else {
            fillColor   = baseColor;
            fillOpacity = filtered ? 0.1 : 0.35;
          }
        }

        return (
          <g
            key={n.id}
            data-node-id={n.id}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(n.id === selected ? null : n.id)}
            onMouseEnter={() => onHover(n.id)}
            onMouseLeave={() => onHover(null)}
          >
            {(isSelected || (diagMode && ringColor)) && (
              <circle
                cx={n.x} cy={n.y}
                r={r + (isSelected ? 5 : 4)}
                fill="none"
                stroke={isSelected ? baseColor : ringColor}
                strokeWidth={isSelected ? 2 : ringWidth}
                opacity={isSelected ? 0.5 : 0.9}
              />
            )}
            <circle
              cx={n.x} cy={n.y} r={r}
              fill={fillColor}
              fillOpacity={fillOpacity}
              stroke={!diagMode && (highlighted || isSelected) ? baseColor : "none"}
              strokeWidth={1.5}
            />
            <text
              x={n.x} y={n.y + r + 10}
              textAnchor="middle"
              fontSize={8}
              fill="#c8d6e5"
              opacity={labelOpacity}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {lbl.length > 20 ? lbl.slice(0, 18) + "…" : lbl}
            </text>
          </g>
        );
      })}
    </g>
  );
}
