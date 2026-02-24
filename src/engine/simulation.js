import { RAW_NODES } from "../data/nodes.js";
import { RAW_EDGES } from "../data/edges.js";
import { spectralInit } from "./layout.js";

export const CANVAS_W = 1400;
export const CANVAS_H = 1000;
export const MARGIN    = 60;

const IDEAL_K  = Math.sqrt((CANVAS_W * CANVAS_H) / RAW_NODES.length) * 1.4;
const DAMPING  = 0.55;
const MAX_DISP = 8;

/**
 * Pre-computed integer-index edge list for the force simulation.
 * Uses the global RAW_NODES order so indices stay stable.
 */
export const SIM_EDGES = (() => {
  const idx = Object.fromEntries(RAW_NODES.map((n, i) => [n.id, i]));
  return RAW_EDGES
    .map(([f, t]) => [idx[f], idx[t]])
    .filter(([a, b]) => a != null && b != null);
})();

/**
 * Seed particles from spectral layout + small random jitter.
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function initParticles() {
  const spec = spectralInit(RAW_NODES, RAW_EDGES, CANVAS_W, CANVAS_H, MARGIN + 20);
  return spec.map(p => ({
    id: p.id,
    x:  p.x + (Math.random() - 0.5) * 40,
    y:  p.y + (Math.random() - 0.5) * 40,
    vx: 0,
    vy: 0,
  }));
}

/**
 * Run one Fruchterman-Reingold simulation step.
 *
 * Forces applied per step:
 *   - Coulomb repulsion (O(n²))  between all node pairs
 *   - Hooke attraction            along edges
 *   - Gravity toward canvas center (prevents drift)
 *
 * @param {Array<{id:string, x:number, y:number, vx:number, vy:number}>} particles
 * @param {string|null} pinnedId  node id to pin in place this step (during drag)
 * @param {number} pinnedX
 * @param {number} pinnedY
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function simStep(particles, pinnedId, pinnedX, pinnedY) {
  const n = particles.length;
  const fx = new Float64Array(n);
  const fy = new Float64Array(n);

  // Coulomb repulsion: F = k² / d²
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist2 = Math.max(dx * dx + dy * dy, 1);
      const dist  = Math.sqrt(dist2);
      const force = (IDEAL_K * IDEAL_K) / dist2;
      fx[i] += (dx / dist) * force;  fy[i] += (dy / dist) * force;
      fx[j] -= (dx / dist) * force;  fy[j] -= (dy / dist) * force;
    }
  }

  // Hooke attraction along edges: F = d² / k
  for (const [a, b] of SIM_EDGES) {
    const dx = particles[b].x - particles[a].x;
    const dy = particles[b].y - particles[a].y;
    const dist  = Math.sqrt(dx * dx + dy * dy) || 0.1;
    const force = (dist * dist) / IDEAL_K;
    const ux = dx / dist, uy = dy / dist;
    fx[a] += ux * force;  fy[a] += uy * force;
    fx[b] -= ux * force;  fy[b] -= uy * force;
  }

  // Gravity toward canvas center — prevents drift
  const tcx = CANVAS_W / 2, tcy = CANVAS_H / 2;
  for (let i = 0; i < n; i++) {
    fx[i] += (tcx - particles[i].x) * 0.004;
    fy[i] += (tcy - particles[i].y) * 0.004;
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
