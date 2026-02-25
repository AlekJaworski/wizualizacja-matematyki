import { computeRanks } from "./ranks.js";
import { getLayout, DEFAULT_LAYOUT_ID } from "./layouts/index.js";

export const CANVAS_W = 1400;
export const CANVAS_H = 1000;
export const MARGIN   = 80;

// ── Simulation constants ──────────────────────────────────────────

const DAMPING  = 0.4;
const MAX_DISP = 6;
const Y_SNAP   = 0.35;   // how hard nodes snap back to their rank Y
const H_SPRING = 0.012;  // horizontal pull along edges

// ── Per-graph helpers ─────────────────────────────────────────────

function buildRankY(nodes, edges) {
  const ranks    = computeRanks(nodes, edges);
  const maxRank  = Math.max(...nodes.map(n => ranks[n.id] ?? 0), 0);
  const rankY    = Object.fromEntries(
    nodes.map(n => [
      n.id,
      MARGIN + ((ranks[n.id] ?? 0) / Math.max(maxRank, 1)) * (CANVAS_H - 2 * MARGIN),
    ])
  );
  return { ranks, rankY };
}

function buildSimEdges(nodes, edges) {
  const idx = Object.fromEntries(nodes.map((n, i) => [n.id, i]));
  return edges
    .map(([f, t]) => [idx[f], idx[t]])
    .filter(([a, b]) => a != null && b != null);
}

function computeIdealK(nodes) {
  return Math.sqrt((CANVAS_W * CANVAS_H) / Math.max(nodes.length, 1)) * 0.9;
}

// ── Public API ────────────────────────────────────────────────────

/**
 * Seed particles from a given layout algorithm.
 * @param {string} layoutId
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges
 * @param {Record<string,number>} rankY — target Y per node id
 */
function initParticles(layoutId, nodes, edges, rankY) {
  const layout = getLayout(layoutId);
  const laid   = layout.apply(nodes, edges, CANVAS_W, CANVAS_H, MARGIN);
  return laid.map(p => ({
    id: p.id,
    x:  p.x + (Math.random() - 0.5) * 20,
    y:  rankY[p.id] ?? p.y,
    vx: 0, vy: 0,
  }));
}

/**
 * One simulation step — horizontal forces only; Y locked to rank band.
 */
function simStep(particles, pinnedId, pinnedX, pinnedY, { ranks, rankY, simEdges, idealK }) {
  const n  = particles.length;
  const fx = new Float64Array(n);

  // 1. Horizontal repulsion within same rank
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (ranks[particles[i].id] !== ranks[particles[j].id]) continue;
      const dx   = particles[i].x - particles[j].x;
      const dist = Math.abs(dx) || 0.1;
      const f    = (idealK * idealK) / (dist * dist);
      const dir  = dx < 0 ? -1 : 1;
      fx[i] += dir * f;
      fx[j] -= dir * f;
    }
  }

  // 2. Horizontal spring along edges
  for (const [a, b] of simEdges) {
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
    const targetY = rankY[p.id] ?? p.y;
    const y       = p.y + (targetY - p.y) * Y_SNAP;

    return {
      ...p, vx, vy: 0,
      x: Math.max(MARGIN, Math.min(CANVAS_W - MARGIN, p.x + vx)),
      y,
    };
  });
}

/**
 * Run the full simulation for a given course's nodes+edges and return a position map.
 *
 * @param {string} [layoutId]
 * @param {number} [iters=300]
 * @param {Array<{id:string}>} [nodes]   — if omitted, defaults to math_pl for back-compat
 * @param {Array<[string,string]>} [edges]
 * @returns {Record<string, {x:number, y:number}>}
 */
export function computePositions(layoutId = DEFAULT_LAYOUT_ID, iters = 300, nodes, edges) {
  // Fallback: if no nodes/edges provided, return empty map
  // (CourseApp always passes them; this prevents a crash if called without)
  if (!nodes || nodes.length === 0) return {};

  const { ranks, rankY } = buildRankY(nodes, edges ?? []);
  const simEdges         = buildSimEdges(nodes, edges ?? []);
  const idealK           = computeIdealK(nodes);
  const ctx              = { ranks, rankY, simEdges, idealK };

  let pts = initParticles(layoutId, nodes, edges ?? [], rankY);
  for (let i = 0; i < iters; i++) pts = simStep(pts, null, 0, 0, ctx);
  return Object.fromEntries(pts.map(p => [p.id, { x: p.x, y: p.y }]));
}
