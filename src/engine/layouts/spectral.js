/**
 * Spectral layout using Laplacian eigenvectors (Fiedler vector).
 * Topology-aware organic placement — no concept of rank.
 */
export const meta = {
  id:    "spectral",
  label: "Spectral",
};

export function apply(nodes, edges, W, H, margin = 80) {
  const n   = nodes.length;
  const idx = Object.fromEntries(nodes.map((nd, i) => [nd.id, i]));

  const A = Array.from({ length: n }, () => new Float64Array(n));
  edges.forEach(([from, to]) => {
    const i = idx[from], j = idx[to];
    if (i == null || j == null) return;
    A[i][j] = 1; A[j][i] = 1;
  });

  const deg     = A.map(row => row.reduce((s, v) => s + v, 0));
  const Lv      = v => v.map((_, i) => { let s = 0; for (let j = 0; j < n; j++) s += A[i][j] * v[j]; return deg[i] * v[i] - s; });
  const dot     = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm    = v => { const d = Math.sqrt(dot(v, v)) || 1; return v.map(x => x / d); };
  const deflect = (v, evecs) => { let u = [...v]; evecs.forEach(e => { const c = dot(u, e); u = u.map((x, i) => x - c * e[i]); }); return norm(u); };
  const evec    = (prev, iters = 400) => {
    let v = norm(Array.from({ length: n }, () => Math.random() - 0.5));
    v = deflect(v, prev);
    for (let it = 0; it < iters; it++) {
      const shift = Math.max(...deg) + 1;
      v = deflect(v.map((x, i) => shift * x - Lv(v)[i]), prev);
    }
    return v;
  };

  const e0 = norm(new Array(n).fill(1));
  const e1 = evec([e0]);
  const e2 = evec([e0, e1]);

  const minX = Math.min(...e1), maxX = Math.max(...e1);
  const minY = Math.min(...e2), maxY = Math.max(...e2);
  const sx = (maxX - minX) < 1e-6 ? 1 : (W - 2 * margin) / (maxX - minX);
  const sy = (maxY - minY) < 1e-6 ? 1 : (H - 2 * margin) / (maxY - minY);

  return nodes.map((nd, i) => ({
    id: nd.id,
    x:  margin + (e1[i] - minX) * sx,
    y:  margin + (e2[i] - minY) * sy,
    vx: 0, vy: 0,
  }));
}
