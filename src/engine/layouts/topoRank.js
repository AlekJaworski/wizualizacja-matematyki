/**
 * Topological rank layout.
 * Roots at top, longest-path rank assignment, nodes spread horizontally
 * within each rank band sorted by scope for domain clustering.
 */
import { computeRanks } from "../ranks.js";

export const meta = {
  id:    "topoRank",
  label: "Topo Rank",
};

const SCOPE_ORDER = [
  "liczby_rzeczywiste", "wyrazenia", "rownania", "funkcje",
  "ciagi", "trygonometria", "planimetria", "geometria_analityczna",
  "stereometria", "kombinatoryka", "statystyka", "logika",
  "optymalizacja", "analiza",
];

export function apply(nodes, edges, W, H, margin = 80) {
  const rank    = computeRanks(nodes, edges);
  const maxRank = Math.max(...nodes.map(n => rank[n.id] ?? 0), 0);

  const byRank = {};
  for (const n of nodes) {
    const r = rank[n.id] ?? 0;
    (byRank[r] ??= []).push(n);
  }
  for (const group of Object.values(byRank)) {
    group.sort((a, b) => {
      const ai = SCOPE_ORDER.indexOf(a.scope);
      const bi = SCOPE_ORDER.indexOf(b.scope);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  }

  const usableW = W - 2 * margin;
  const usableH = H - 2 * margin;

  return nodes.map(n => {
    const r     = rank[n.id] ?? 0;
    const group = byRank[r];
    const pos   = group.indexOf(n);
    return {
      id: n.id,
      x:  margin + ((pos + 0.5) / group.length) * usableW,
      y:  margin + (r / Math.max(maxRank, 1)) * usableH,
      vx: 0, vy: 0,
    };
  });
}
