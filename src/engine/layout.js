/**
 * Graph layout algorithms.
 *
 * topoRankLayout  — primary layout: roots at top, dependents flow downward
 *                   like a Diablo 2 skill tree. Uses longest-path rank
 *                   assignment (critical-path layering).
 *
 * spectralInit    — kept as fallback / reference; no longer used for initial
 *                   positions but useful for future experimentation.
 */

// ── Topological rank layout ───────────────────────────────────────

/**
 * Assign each node a rank = length of its longest incoming path.
 * Roots (no prerequisites) get rank 0.
 *
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges  directed [from, to]
 * @returns {Record<string, number>}      nodeId → rank
 */
export function computeRanks(nodes, edges) {
  const prereqCount = Object.fromEntries(nodes.map(n => [n.id, 0]));
  const dependents  = Object.fromEntries(nodes.map(n => [n.id, []]));

  for (const [from, to] of edges) {
    if (prereqCount[to]  !== undefined) prereqCount[to]++;
    if (dependents[from] !== undefined) dependents[from].push(to);
  }

  // Kahn's topological sort — propagate rank as longest incoming path
  const rank = Object.fromEntries(nodes.map(n => [n.id, 0]));
  const queue = nodes.filter(n => prereqCount[n.id] === 0).map(n => n.id);

  while (queue.length) {
    const cur = queue.shift();
    for (const dep of dependents[cur]) {
      rank[dep] = Math.max(rank[dep], rank[cur] + 1);
      prereqCount[dep]--;
      if (prereqCount[dep] === 0) queue.push(dep);
    }
  }

  return rank;
}

/**
 * Lay out nodes in a skill-tree style:
 *   - Y axis = topological rank (roots at top, leaves at bottom)
 *   - X axis = spread evenly within each rank band, sorted by scope
 *     so related topics cluster horizontally
 *
 * @param {Array<{id:string, scope:string}>} nodes
 * @param {Array<[string,string]>} edges
 * @param {number} W   canvas width
 * @param {number} H   canvas height
 * @param {number} [margin=80]
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function topoRankLayout(nodes, edges, W, H, margin = 80) {
  const rank = computeRanks(nodes, edges);
  const maxRank = Math.max(...Object.values(rank), 0);

  // Group nodes by rank
  const byRank = {};
  for (const n of nodes) {
    const r = rank[n.id];
    if (!byRank[r]) byRank[r] = [];
    byRank[r].push(n);
  }

  // Within each rank, sort by scope for horizontal clustering
  const scopeOrder = [
    "liczby_rzeczywiste", "wyrazenia", "rownania", "funkcje",
    "ciagi", "trygonometria", "planimetria", "geometria_analityczna",
    "stereometria", "kombinatoryka", "statystyka", "logika",
    "optymalizacja", "analiza",
  ];
  for (const r of Object.keys(byRank)) {
    byRank[r].sort((a, b) => {
      const ai = scopeOrder.indexOf(a.scope);
      const bi = scopeOrder.indexOf(b.scope);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
  }

  const usableW = W - 2 * margin;
  const usableH = H - 2 * margin;

  const positions = {};
  for (const [r, group] of Object.entries(byRank)) {
    const y = margin + (Number(r) / Math.max(maxRank, 1)) * usableH;
    group.forEach((n, i) => {
      const x = margin + ((i + 0.5) / group.length) * usableW;
      positions[n.id] = { x, y };
    });
  }

  return nodes.map(n => ({
    id: n.id,
    x:  positions[n.id]?.x ?? W / 2,
    y:  positions[n.id]?.y ?? H / 2,
    vx: 0,
    vy: 0,
  }));
}

// ── Spectral layout (kept for reference) ─────────────────────────

/**
 * Spectral graph layout using Laplacian eigenvectors.
 * Computes the Fiedler vector and its companion for a topology-aware
 * 2-D starting position. No longer used as primary layout.
 *
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges
 * @param {number} W
 * @param {number} H
 * @param {number} [margin=80]
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function spectralInit(nodes, edges, W, H, margin = 80) {
  const n = nodes.length;
  const idx = Object.fromEntries(nodes.map((nd, i) => [nd.id, i]));

  const A = Array.from({ length: n }, () => new Float64Array(n));
  edges.forEach(([from, to]) => {
    const i = idx[from], j = idx[to];
    if (i == null || j == null) return;
    A[i][j] = 1;
    A[j][i] = 1;
  });

  const deg = A.map(row => row.reduce((s, v) => s + v, 0));
  const Lv  = v => v.map((_, i) => {
    let sum = 0;
    for (let j = 0; j < n; j++) sum += A[i][j] * v[j];
    return deg[i] * v[i] - sum;
  });

  const dot     = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm    = v => { const d = Math.sqrt(dot(v, v)) || 1; return v.map(x => x / d); };
  const deflect = (v, evecs) => {
    let u = [...v];
    evecs.forEach(e => { const c = dot(u, e); u = u.map((x, i) => x - c * e[i]); });
    return norm(u);
  };
  const eigenvector = (prevEvecs, iters = 400) => {
    let v = norm(Array.from({ length: n }, () => Math.random() - 0.5));
    v = deflect(v, prevEvecs);
    for (let it = 0; it < iters; it++) {
      const shift = Math.max(...deg) + 1;
      const Mv = v.map((x, i) => shift * x - Lv(v)[i]);
      v = deflect(Mv, prevEvecs);
    }
    return v;
  };

  const e0 = norm(new Array(n).fill(1));
  const e1 = eigenvector([e0]);
  const e2 = eigenvector([e0, e1]);

  const xs = e1, ys = e2;
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const sx = (maxX - minX) < 1e-6 ? 1 : (W - 2 * margin) / (maxX - minX);
  const sy = (maxY - minY) < 1e-6 ? 1 : (H - 2 * margin) / (maxY - minY);

  return nodes.map((nd, i) => ({
    id: nd.id,
    x:  margin + (xs[i] - minX) * sx,
    y:  margin + (ys[i] - minY) * sy,
    vx: 0,
    vy: 0,
  }));
}
