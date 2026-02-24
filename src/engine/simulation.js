import { RAW_NODES } from "../data/curriculum.js";
import { RAW_EDGES } from "../data/edges.js";
import { topoRankLayout, computeRanks } from "./layout.js";

export const CANVAS_W = 1400;
export const CANVAS_H = 1000;
export const MARGIN    = 60;

const IDEAL_K  = Math.sqrt((CANVAS_W * CANVAS_H) / RAW_NODES.length) * 1.4;
const DAMPING  = 0.55;
const MAX_DISP = 8;

// Rank gravity strength — pulls nodes toward their assigned y band.
// Higher = stricter skill-tree layering, lower = more organic.
const RANK_GRAVITY = 0.012;

/**
 * Pre-computed integer-index edge list for the force simulation.
 */
export const SIM_EDGES = (() => {
  const idx = Object.fromEntries(RAW_NODES.map((n, i) => [n.id, i]));
  return RAW_EDGES
    .map(([f, t]) => [idx[f], idx[t]])
    .filter(([a, b]) => a != null && b != null);
})();

/**
 * Target Y position for each node based on its topological rank.
 * Used by the rank-gravity force to keep the skill-tree shape intact.
 */
const RANK_TARGET_Y = (() => {
  const ranks   = computeRanks(RAW_NODES, RAW_EDGES);
  const maxRank = Math.max(...Object.values(ranks), 0);
  const usableH = CANVAS_H - 2 * MARGIN;
  const target  = {};
  for (const n of RAW_NODES) {
    target[n.id] = MARGIN + (ranks[n.id] / Math.max(maxRank, 1)) * usableH;
  }
  return target;
})();

/**
 * Seed particles from the topological rank layout with small random jitter.
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function initParticles() {
  const laid = topoRankLayout(RAW_NODES, RAW_EDGES, CANVAS_W, CANVAS_H, MARGIN + 20);
  return laid.map(p => ({
    id: p.id,
    x:  p.x + (Math.random() - 0.5) * 30,
    y:  p.y + (Math.random() - 0.5) * 10, // less y-jitter to preserve rank bands
    vx: 0,
    vy: 0,
  }));
}

/**
 * Run one Fruchterman-Reingold simulation step with rank-gravity.
 *
 * Forces per step:
 *   1. Coulomb repulsion (O(n²)) between all node pairs
 *   2. Hooke attraction  along edges
 *   3. Rank gravity      pulls each node toward its topological y-band
 *   4. Horizontal centering — light pull toward canvas x-center
 *
 * @param {Array<{id,x,y,vx,vy}>} particles
 * @param {string|null} pinnedId
 * @param {number} pinnedX
 * @param {number} pinnedY
 * @returns {Array<{id,x,y,vx,vy}>}
 */
export function simStep(particles, pinnedId, pinnedX, pinnedY) {
  const n  = particles.length;
  const fx = new Float64Array(n);
  const fy = new Float64Array(n);

  // 1. Coulomb repulsion: F = k² / d²
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx    = particles[i].x - particles[j].x;
      const dy    = particles[i].y - particles[j].y;
      const dist2 = Math.max(dx * dx + dy * dy, 1);
      const dist  = Math.sqrt(dist2);
      const force = (IDEAL_K * IDEAL_K) / dist2;
      fx[i] += (dx / dist) * force;  fy[i] += (dy / dist) * force;
      fx[j] -= (dx / dist) * force;  fy[j] -= (dy / dist) * force;
    }
  }

  // 2. Hooke attraction along edges: F = d² / k
  for (const [a, b] of SIM_EDGES) {
    const dx    = particles[b].x - particles[a].x;
    const dy    = particles[b].y - particles[a].y;
    const dist  = Math.sqrt(dx * dx + dy * dy) || 0.1;
    const force = (dist * dist) / IDEAL_K;
    const ux = dx / dist, uy = dy / dist;
    fx[a] += ux * force;  fy[a] += uy * force;
    fx[b] -= ux * force;  fy[b] -= uy * force;
  }

  // 3. Rank gravity — pull toward topological y-band (the skill-tree force)
  for (let i = 0; i < n; i++) {
    const targetY = RANK_TARGET_Y[particles[i].id] ?? CANVAS_H / 2;
    fy[i] += (targetY - particles[i].y) * RANK_GRAVITY;
  }

  // 4. Horizontal centering — gentle pull so the graph doesn't drift sideways
  const tcx = CANVAS_W / 2;
  for (let i = 0; i < n; i++) {
    fx[i] += (tcx - particles[i].x) * 0.002;
  }

  return particles.map((p, i) => {
    if (p.id === pinnedId) return { ...p, x: pinnedX, y: pinnedY, vx: 0, vy: 0 };

    let vx = (p.vx + fx[i]) * DAMPING;
    let vy = (p.vy + fy[i]) * DAMPING;

    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > MAX_DISP) { vx *= MAX_DISP / speed; vy *= MAX_DISP / speed; }

    return {
      ...p, vx, vy,
      x: Math.max(MARGIN, Math.min(CANVAS_W - MARGIN, p.x + vx)),
      y: Math.max(MARGIN, Math.min(CANVAS_H - MARGIN, p.y + vy)),
    };
  });
}

/**
 * Run the full simulation synchronously and return a position map.
 * @param {number} [iters=500]
 * @returns {Record<string, {x:number, y:number}>}
 */
export function computePositions(iters = 500) {
  let pts = initParticles();
  for (let i = 0; i < iters; i++) pts = simStep(pts, null, 0, 0);
  return Object.fromEntries(pts.map(p => [p.id, { x: p.x, y: p.y }]));
}
