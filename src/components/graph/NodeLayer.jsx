import { useMemo } from "react";
import { COLORS } from "../../styles/tokens.js";

/** Node radius: base from level + boost from connection degree. */
function nodeRadius(n, degree) {
  const base = 8 + n.level * 3;
  const degreeBoost = Math.min(4.8, (degree || 0) * 0.6);
  return base + degreeBoost;
}

function labelMaxChars(scale) {
  if (scale < 0.3)  return 6;
  if (scale < 0.5)  return 12;
  if (scale < 0.8)  return 18;
  return 30;
}

function labelFontSize(scale) {
  if (scale < 0.3) return 9;
  if (scale < 0.6) return 10;
  return 11;
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
  edges,
}) {
  const hasBelief = belief && Object.keys(belief).length > 0;

  // Compute degree map for node sizing
  const degreeMap = useMemo(() => {
    const m = {};
    if (!edges) return m;
    for (const [from, to] of edges) {
      m[from] = (m[from] || 0) + 1;
      m[to] = (m[to] || 0) + 1;
    }
    return m;
  }, [edges]);

  return (
    <g>
      {nodes.map(n => {
        const degree = degreeMap[n.id] || 0;
        const r         = nodeRadius(n, degree);
        const baseColor = scopeColors?.[n.scope] || "#4a9eff";
        const filtered  = filteredIds && !filteredIds.has(n.id);
        const highlighted = highlightedIds?.has(n.id);
        const isSelected  = selected === n.id;
        const dimmed   = (highlightedIds && !highlighted) || filtered;
        const lbl      = lang === "pl" ? n.labelPl : n.label;
        const maxChars = labelMaxChars(scale ?? 1);
        const fontSize = labelFontSize(scale ?? 1);

        let fillColor    = baseColor;
        let fillOpacity  = dimmed ? 0.15 : 0.9;
        let labelOpacity = dimmed ? 0.2  : 0.85;
        let ringColor    = null;
        let ringWidth    = 2;

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
            fillOpacity = filtered ? 0.1 : (diagMode ? 0.35 : 0.5);
            labelOpacity = filtered ? 0.15 : 0.7;
          }
        }

        const truncLbl = lbl.length > maxChars ? lbl.slice(0, maxChars - 1) + "…" : lbl;

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
            {/* Label background for readability */}
            <rect
              x={n.x - truncLbl.length * fontSize * 0.3}
              y={n.y + r + 3}
              width={truncLbl.length * fontSize * 0.6}
              height={fontSize + 4}
              rx={2}
              fill={COLORS.bg}
              fillOpacity={labelOpacity * 0.6}
              style={{ pointerEvents: "none" }}
            />
            <text
              x={n.x} y={n.y + r + fontSize + 2}
              textAnchor="middle"
              fontSize={fontSize}
              fill={COLORS.textBody}
              opacity={labelOpacity}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {truncLbl}
            </text>
          </g>
        );
      })}
    </g>
  );
}
