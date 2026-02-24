/**
 * Spectral graph layout using Laplacian eigenvectors.
 *
 * Computes the Fiedler vector (2nd eigenvector) and its companion
 * to give a topology-aware 2-D starting position for each node.
 *
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges
 * @param {number} W  canvas width
 * @param {number} H  canvas height
 * @param {number} [margin=80]
 * @returns {Array<{id:string, x:number, y:number, vx:number, vy:number}>}
 */
export function spectralInit(nodes, edges, W, H, margin = 80) {
  const n = nodes.length;
  const idx = Object.fromEntries(nodes.map((nd, i) => [nd.id, i]));

  // Adjacency matrix (undirected)
  const A = Array.from({ length: n }, () => new Float64Array(n));
  edges.forEach(([from, to]) => {
    const i = idx[from], j = idx[to];
    if (i == null || j == null) return;
    A[i][j] = 1;
    A[j][i] = 1;
  });

  const deg = A.map(row => row.reduce((s, v) => s + v, 0));

  // Laplacian-vector product: L·v = D·v − A·v
  const Lv = v => v.map((_, i) => {
    let sum = 0;
    for (let j = 0; j < n; j++) sum += A[i][j] * v[j];
    return deg[i] * v[i] - sum;
  });

  const dot  = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm = v => { const d = Math.sqrt(dot(v, v)) || 1; return v.map(x => x / d); };
  const deflect = (v, evecs) => {
    let u = [...v];
    evecs.forEach(e => { const c = dot(u, e); u = u.map((x, i) => x - c * e[i]); });
    return norm(u);
  };

  // Power iteration with deflation to find the k-th eigenvector
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

  const e0 = norm(new Array(n).fill(1)); // constant vector (0th eigenvector)
  const e1 = eigenvector([e0]);           // Fiedler vector (x axis)
  const e2 = eigenvector([e0, e1]);       // 3rd eigenvector (y axis)

  const xs = e1, ys = e2;
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const sx = (maxX - minX) < 1e-6 ? 1 : (W - 2 * margin) / (maxX - minX);
  const sy = (maxY - minY) < 1e-6 ? 1 : (H - 2 * margin) / (maxY - minY);

  return nodes.map((nd, i) => ({
    id: nd.id,
    x: margin + (xs[i] - minX) * sx,
    y: margin + (ys[i] - minY) * sy,
    vx: 0,
    vy: 0,
  }));
}
