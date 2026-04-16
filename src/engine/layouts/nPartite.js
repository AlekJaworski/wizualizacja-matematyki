/**
 * N-Partite layout — Duolingo / skill-tree grid style.
 *
 * Rules:
 *   - Each topological rank occupies a horizontal row.
 *   - Nodes within a row are evenly spaced with a minimum gap.
 *   - Multi-pass barycenter heuristic minimises edge crossings.
 */
import { computeRanks } from "../ranks.js";

export const meta = {
  id:    "nPartite",
  label: "N-Partite Grid",
};

const MIN_GAP = 90; // minimum px between node centres in a row

export function apply(nodes, edges, W, H, margin = 120) {
  const rank    = computeRanks(nodes, edges);
  const maxRank = Math.max(...nodes.map(n => rank[n.id] ?? 0), 0);

  // Group by rank
  const byRank = {};
  for (const n of nodes) {
    const r = rank[n.id] ?? 0;
    (byRank[r] ??= []).push(n);
  }

  // Build prereq + dependent maps
  const prereqs = {};
  const deps = {};
  for (const n of nodes) { prereqs[n.id] = []; deps[n.id] = []; }
  for (const [from, to] of edges) {
    if (prereqs[to]) prereqs[to].push(from);
    if (deps[from]) deps[from].push(to);
  }

  const SCOPE_ORDER = [
    "logika", "statystyka", "kombinatoryka",
    "liczby_rzeczywiste", "wyrazenia", "rownania", "funkcje",
    "ciagi", "trygonometria", "planimetria", "geometria_analityczna",
    "stereometria", "optymalizacja", "analiza",
  ];

  const pos = {}; // nodeId → { x, y }
  const usableW = W - 2 * margin;
  const usableH = H - 2 * margin;

  // Initial placement: roots by scope, rest by parent barycenter
  for (let r = 0; r <= maxRank; r++) {
    const group = byRank[r] ?? [];
    if (r === 0) {
      group.sort((a, b) => {
        const ai = SCOPE_ORDER.indexOf(a.scope);
        const bi = SCOPE_ORDER.indexOf(b.scope);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      });
    } else {
      group.sort((a, b) => bary(a, prereqs, pos, W) - bary(b, prereqs, pos, W));
    }
    spreadRow(group, margin, usableW, W, r, maxRank, usableH, pos);
  }

  // Multi-pass barycenter: 6 alternating sweeps to reduce crossings
  for (let pass = 0; pass < 6; pass++) {
    if (pass % 2 === 0) {
      // Top-down: sort by parent positions
      for (let r = 1; r <= maxRank; r++) {
        const group = byRank[r] ?? [];
        group.sort((a, b) => bary(a, prereqs, pos, W) - bary(b, prereqs, pos, W));
        spreadRow(group, margin, usableW, W, r, maxRank, usableH, pos);
      }
    } else {
      // Bottom-up: sort by child positions
      for (let r = maxRank - 1; r >= 0; r--) {
        const group = byRank[r] ?? [];
        if (r === 0) {
          // Roots: use child barycenter, tiebreak by scope
          group.sort((a, b) => {
            const ba = bary(a, deps, pos, W);
            const bb = bary(b, deps, pos, W);
            if (Math.abs(ba - bb) > 1) return ba - bb;
            const ai = SCOPE_ORDER.indexOf(a.scope);
            const bi = SCOPE_ORDER.indexOf(b.scope);
            return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
          });
        } else {
          group.sort((a, b) => bary(a, deps, pos, W) - bary(b, deps, pos, W));
        }
        spreadRow(group, margin, usableW, W, r, maxRank, usableH, pos);
      }
    }
  }

  return nodes.map(n => ({
    id: n.id,
    x:  pos[n.id]?.x ?? W / 2,
    y:  pos[n.id]?.y ?? H / 2,
    vx: 0, vy: 0,
  }));
}

function bary(node, adjMap, pos, W) {
  const neighbours = adjMap[node.id] ?? [];
  if (neighbours.length === 0) return W / 2;
  return neighbours.reduce((s, pid) => s + (pos[pid]?.x ?? W / 2), 0) / neighbours.length;
}

function spreadRow(group, margin, usableW, W, r, maxRank, usableH, pos) {
  const y = margin + (r / Math.max(maxRank, 1)) * usableH;
  const neededW = (group.length - 1) * MIN_GAP;
  const actualW = Math.max(neededW, usableW);
  const offsetX = margin + (usableW - actualW) / 2;

  group.forEach((n, i) => {
    const x = group.length === 1
      ? W / 2
      : offsetX + (i / (group.length - 1)) * actualW;
    pos[n.id] = { x, y };
  });
}
