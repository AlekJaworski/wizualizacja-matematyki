/** Returns the visual radius of a node by curriculum level. */
function nodeRadius(n) { return 6 + n.level * 2; }

/**
 * How many characters to show in a node label given the current zoom scale.
 */
function labelMaxChars(scale) {
  if (scale < 0.4)  return 8;
  if (scale < 0.65) return 13;
  if (scale < 1.0)  return 18;
  return 28;
}

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
  scale,
  scopeColors,
}) {
  // Show belief colors if belief has any entries (works in both diagMode and explore with overlay)
  const hasBelief = belief && Object.keys(belief).length > 0;

  return (
    <g>
      {nodes.map(n => {
        const r         = nodeRadius(n);
        const baseColor = scopeColors?.[n.scope] || "#4a9eff";
        const filtered  = filteredIds && !filteredIds.has(n.id);
        const highlighted = highlightedIds?.has(n.id);
        const isSelected  = selected === n.id;
        const dimmed   = (highlightedIds && !highlighted) || filtered;
        const lbl      = lang === "pl" ? n.labelPl : n.label;
        const maxChars = labelMaxChars(scale ?? 1);

        let fillColor    = baseColor;
        let fillOpacity  = dimmed ? 0.15 : 0.9;
        let labelOpacity = dimmed ? 0.2  : 0.85;
        let ringColor    = null;
        let ringWidth    = 2;

        // Apply belief coloring (diagMode OR explore with quiz results overlay)
        if (hasBelief) {
          const state      = belief[n.id];
          const isFrontier = frontier?.includes(n.id);

          if (state === "known") {
            fillColor = "#27ae60";
            ringColor = "#2ecc71";
            fillOpacity = filtered ? 0.1 : 0.85;
            labelOpacity = filtered ? 0.15 : 0.9;
          } else if (state === "unknown") {
            fillColor   = "#c0392b";
            fillOpacity = filtered ? 0.1 : 0.45;
            ringColor   = "#e74c3c";
            labelOpacity = filtered ? 0.15 : 0.7;
          } else if (isFrontier) {
            fillColor = "#f39c12";
            ringColor = "#f1c40f";
            ringWidth = 3;
            fillOpacity = filtered ? 0.1 : 0.9;
            labelOpacity = filtered ? 0.15 : 0.9;
          } else {
            // Unclassified — keep scope color but dimmer
            fillOpacity = filtered ? 0.1 : (diagMode ? 0.35 : 0.5);
            labelOpacity = filtered ? 0.15 : 0.7;
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
            {(isSelected || ringColor) && (
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
              stroke={(highlighted || isSelected) && !hasBelief ? baseColor : "none"}
              strokeWidth={1.5}
            />
            <text
              x={n.x} y={n.y + r + 10}
              textAnchor="middle"
              fontSize={8}
              fill="#cdd8e4"
              opacity={labelOpacity}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {lbl.length > maxChars ? lbl.slice(0, maxChars - 1) + "…" : lbl}
            </text>
          </g>
        );
      })}
    </g>
  );
}
