import { SCOPE_COLORS, SCOPE_LABELS, SECTIONS } from "../../data/sections.js";

/**
 * Side panel shown when a node is selected in normal (non-diagnostic) mode.
 * Displays topic details, prerequisites, and dependents.
 */
export function InfoPanel({ nodeId, nodes, adjacency, lang }) {
  const node = nodes.find(n => n.id === nodeId);
  if (!node) return null;

  const color   = SCOPE_COLORS[node.scope] || "#aaa";
  const lbl     = lang === "pl" ? node.labelPl : node.label;
  const prereqs = adjacency.prereqs[nodeId] || [];
  const deps    = adjacency.dependents[nodeId] || [];
  const byId    = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;

  return (
    <div style={{
      position: "absolute", right: 16, top: 70, width: 240,
      background: "#0d1520",
      border: `1px solid ${color}40`,
      borderRadius: 8,
      padding: "12px 14px",
      fontSize: 11,
      color: "#c8d6e5",
      lineHeight: 1.6,
    }}>
      <div style={{ color, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{lbl}</div>
      <div style={{ color: "#6b7d9a", fontSize: 10, marginBottom: 8 }}>
        {SECTIONS[node.section]?.label}
        {" · "}
        {SCOPE_LABELS[node.scope]?.[lang === "pl" ? "pl" : "en"]}
        {" · Level "}
        {node.level}
      </div>

      {prereqs.length > 0 && (
        <>
          <div style={{ color: "#4a9eff", fontSize: 10, marginBottom: 4 }}>Prerequisites:</div>
          {prereqs.map(id => (
            <div key={id} style={{ color: "#7a9cc8", paddingLeft: 8, fontSize: 10 }}>
              ← {getLabel(id)}
            </div>
          ))}
        </>
      )}

      {deps.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <div style={{ color: "#3dc9b0", fontSize: 10, marginBottom: 4 }}>Enables:</div>
          {deps.map(id => (
            <div key={id} style={{ color: "#7ac8b0", paddingLeft: 8, fontSize: 10 }}>
              → {getLabel(id)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
