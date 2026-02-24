/**
 * N-Partite layout — Duolingo / skill-tree grid style.
 *
 * Rules:
 *   - Each topological rank occupies a horizontal row.
 *   - Nodes within a row are evenly spaced.
 *   - No edges exist between nodes in the same row (by construction of
 *     topological ranks), so the graph is a proper n-partite DAG.
 *   - Nodes in each row are sorted to minimise edge crossings with the
 *     row above (barycenter heuristic).
 *
 * Visual feel: a clean grid where vertical lines show prerequisite chains
 * and horizontal position groups related topics.
 */
import { computeRanks } from "../ranks.js";

export const meta = {
  id:    "nPartite",
  label: "N-Partite Grid",
};

export function apply(nodes, edges, W, H, margin = 80) {
  const rank    = computeRanks(nodes, edges);
  const maxRank = Math.max(...nodes.map(n => rank[n.id] ?? 0), 0);

  // Group by rank
  const byRank = {};
  for (const n of nodes) {
    const r = rank[n.id] ?? 0;
    (byRank[r] ??= []).push(n);
  }

  // Build prereq map for barycenter sorting
  const prereqs = {};
  for (const n of nodes) prereqs[n.id] = [];
  for (const [from, to] of edges) {
    if (prereqs[to]) prereqs[to].push(from);
  }

  // Sort each rank's nodes by barycenter of parent x-positions
  // (rank 0 roots: sort by scope for a stable left-to-right domain order)
  const SCOPE_ORDER = [
    "logika", "statystyka", "kombinatoryka",
    "liczby_rzeczywiste", "wyrazenia", "rownania", "funkcje",
    "ciagi", "trygonometria", "planimetria", "geometria_analityczna",
    "stereometria", "optymalizacja", "analiza",
  ];

  // We need x positions from the previous rank to compute barycenters,
  // so process ranks in order and store positions as we go.
  const pos = {}; // nodeId → { x, y }

  const usableW = W - 2 * margin;
  const usableH = H - 2 * margin;

  for (let r = 0; r <= maxRank; r++) {
    const group = byRank[r] ?? [];

    if (r === 0) {
      // Roots: sort by domain
      group.sort((a, b) => {
        const ai = SCOPE_ORDER.indexOf(a.scope);
        const bi = SCOPE_ORDER.indexOf(b.scope);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });
    } else {
      // Sort by barycenter of parent x positions
      group.sort((a, b) => {
        const bary = n => {
          const ps = prereqs[n.id] ?? [];
          if (ps.length === 0) return W / 2;
          return ps.reduce((s, pid) => s + (pos[pid]?.x ?? W / 2), 0) / ps.length;
        };
        return bary(a) - bary(b);
      });
    }

    const y = margin + (r / Math.max(maxRank, 1)) * usableH;

    group.forEach((n, i) => {
      const x = group.length === 1
        ? W / 2
        : margin + (i / (group.length - 1)) * usableW;
      pos[n.id] = { x, y };
    });
  }

  return nodes.map(n => ({
    id: n.id,
    x:  pos[n.id]?.x ?? W / 2,
    y:  pos[n.id]?.y ?? H / 2,
    vx: 0, vy: 0,
  }));
}
