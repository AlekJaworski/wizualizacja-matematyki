import { RAW_NODES } from "../data/curriculum.js";
import { RAW_EDGES } from "../data/edges.js";
import { computeRanks } from "./ranks.js";
import { getLayout, DEFAULT_LAYOUT_ID } from "./layouts/index.js";

export const CANVAS_W = 1400;
export const CANVAS_H = 1000;
export const MARGIN   = 80;

// ── Rank metadata (used by the rank-gravity force) ────────────────

const RANKS    = computeRanks(RAW_NODES, RAW_EDGES);
const MAX_RANK = Math.max(...RAW_NODES.map(n => RANKS[n.id] ?? 0), 0);

/** Fixed Y target for each node — used by rank-gravity. */
export const RANK_Y = Object.fromEntries(
  RAW_NODES.map(n => [
    n.id,
    MARGIN + ((RANKS[n.id] ?? 0) / Math.max(MAX_RANK, 1)) * (CANVAS_H - 2 * MARGIN),
  ])
);

/** Integer-index undirected edge list for the force simulation. */
export const SIM_EDGES = (() => {
  const idx = Object.fromEntries(RAW_NODES.map((n, i) => [n.id, i]));
  return RAW_EDGES
    .map(([f, t]) => [idx[f], idx[t]])
    .filter(([a, b]) => a != null && b != null);
})();

// ── Simulation constants ──────────────────────────────────────────

const IDEAL_K  = Math.sqrt((CANVAS_W * CANVAS_H) / RAW_NODES.length) * 0.9;
const DAMPING  = 0.4;
const MAX_DISP = 6;
const Y_SNAP   = 0.35;   // how hard nodes snap back to their rank Y
const H_SPRING = 0.012;  // horizontal pull along edges

// ── Public API ────────────────────────────────────────────────────

/**
 * Seed particles from a given layout algorithm.
 * @param {string} [layoutId]
 */
export function initParticles(layoutId = DEFAULT_LAYOUT_ID) {
  const layout = getLayout(layoutId);
  const laid   = layout.apply(RAW_NODES, RAW_EDGES, CANVAS_W, CANVAS_H, MARGIN);
  return laid.map(p => ({
    id: p.id,
    x:  p.x + (Math.random() - 0.5) * 20,
    y:  RANK_Y[p.id] ?? p.y,
    vx: 0, vy: 0,
  }));
}

/**
 * One simulation step — horizontal forces only; Y locked to rank band.
 *
 *   1. Horizontal Coulomb repulsion within the same rank (prevents overlap)
 *   2. Horizontal spring along edges (aligns parent/child x columns)
 *   3. Gentle pull toward horizontal centre (prevents drift)
 *   4. Hard Y snap to rank band
 *
 * @param {Array<{id,x,y,vx,vy}>} particles
 * @param {string|null} pinnedId   node being dragged
 * @param {number} pinnedX
 * @param {number} pinnedY
 */
export function simStep(particles, pinnedId, pinnedX, pinnedY) {
  const n  = particles.length;
  const fx = new Float64Array(n);

  // 1. Horizontal repulsion within same rank
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (RANKS[particles[i].id] !== RANKS[particles[j].id]) continue;
      const dx   = particles[i].x - particles[j].x;
      const dist = Math.abs(dx) || 0.1;
      const f    = (IDEAL_K * IDEAL_K) / (dist * dist);
      const dir  = dx < 0 ? -1 : 1;
      fx[i] += dir * f;
      fx[j] -= dir * f;
    }
  }

  // 2. Horizontal spring along edges
  for (const [a, b] of SIM_EDGES) {
    const dx = particles[b].x - particles[a].x;
    fx[a] += dx * H_SPRING;
    fx[b] -= dx * H_SPRING;
  }

  // 3. Pull toward horizontal centre
  for (let i = 0; i < n; i++) {
    fx[i] += (CANVAS_W / 2 - particles[i].x) * 0.003;
  }

  return particles.map((p, i) => {
    if (p.id === pinnedId) return { ...p, x: pinnedX, y: pinnedY, vx: 0, vy: 0 };

    let vx = (p.vx + fx[i]) * DAMPING;
    if (Math.abs(vx) > MAX_DISP) vx *= MAX_DISP / Math.abs(vx);

    // 4. Hard Y snap — no vertical drift
    const targetY = RANK_Y[p.id] ?? p.y;
    const y       = p.y + (targetY - p.y) * Y_SNAP;

    return {
      ...p, vx, vy: 0,
      x: Math.max(MARGIN, Math.min(CANVAS_W - MARGIN, p.x + vx)),
      y,
    };
  });
}

/**
 * Run the full simulation and return a position map.
 * @param {string} [layoutId]
 * @param {number} [iters=300]
 * @returns {Record<string, {x:number, y:number}>}
 */
export function computePositions(layoutId = DEFAULT_LAYOUT_ID, iters = 300) {
  let pts = initParticles(layoutId);
  for (let i = 0; i < iters; i++) pts = simStep(pts, null, 0, 0);
  return Object.fromEntries(pts.map(p => [p.id, { x: p.x, y: p.y }]));
}
