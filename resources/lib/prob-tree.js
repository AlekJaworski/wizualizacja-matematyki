/**
 * prob-tree.js — shared probability-tree renderer for Warsztat canvases.
 *
 * Given a declarative spec, draws a rooted probability tree (depth up to 3)
 * into a 2D canvas context inside the provided bounds. Leaves are laid out
 * evenly along the right edge; branches carry a label (e.g. "cz") and a
 * probability fragment rendered as plain text (e.g. "3/5"). Optionally one
 * leaf is highlighted.
 *
 * ── Schema ────────────────────────────────────────────────────────────
 *   drawProbTree(ctx, {
 *     bounds: { x, y, w, h },              // box to fit into
 *     root:   { label: '5 kul' },           // centered on left edge
 *     levels: [
 *       // depth 1: uniform branch list (same for every parent == root)
 *       {
 *         branches: [
 *           { label: 'cz', p: '3/5', color: '#E07090' },
 *           { label: 'nb', p: '2/5', color: '#58C4DD' },
 *         ],
 *       },
 *       // depth 2: per-parent list. branchesPerParent[i] is the sub-branches
 *       // under branches[i] of the previous level. Must have same arity per
 *       // parent (this lib keeps things simple).
 *       {
 *         branchesPerParent: [
 *           [ { label: 'cz', p: '2/4', color: '#E07090' },
 *             { label: 'nb', p: '2/4', color: '#58C4DD' } ],
 *           [ { label: 'cz', p: '3/4', color: '#E07090' },
 *             { label: 'nb', p: '1/4', color: '#58C4DD' } ],
 *         ],
 *       },
 *     ],
 *     leaves: [
 *       { label: 'CC', p: '6/20', highlight: true },
 *       { label: 'CN', p: '6/20' },
 *       { label: 'NC', p: '6/20' },
 *       { label: 'NN', p: '2/20' },
 *     ],
 *     // optional: title string drawn in top-left of bounds
 *     title: 'ze zwracaniem',
 *   });
 *
 * ── Notes ─────────────────────────────────────────────────────────────
 *   • Leaf count must equal the product of per-level arities. Caller is
 *     responsible for consistency; no validation beyond length check.
 *   • Branch label+probability are drawn above/below the segment midpoint.
 *   • Highlighted leaves get a green halo and bold text.
 *   • Designed for small canvases (e.g. 600×310). Text scales down with bounds.
 */

const COL_BRANCH  = 'rgba(255,255,255,0.35)';
const COL_TEXT    = 'rgba(255,255,255,0.78)';
const COL_TEXTDIM = 'rgba(255,255,255,0.55)';
const COL_HIGHLIGHT = '#83C167';
const COL_NODE    = 'rgba(255,255,255,0.2)';

export function drawProbTree(ctx, spec) {
  const { bounds, root, levels = [], leaves = [], title } = spec;
  const { x: BX, y: BY, w: BW, h: BH } = bounds;

  // column x-positions: root on left, each depth stepped right, leaves on far right
  const nCols = levels.length + 2; // root + per-level + leaves
  const padL = 54, padR = 70; // room for labels on either end
  const usableW = BW - padL - padR;
  const colX = [];
  for (let i = 0; i < nCols; i++) colX.push(BX + padL + usableW * (i / (nCols - 1)));

  // compute leaf y-positions, evenly spaced
  const leafCount = leaves.length || 1;
  const padT = title ? 24 : 14;
  const padB = 14;
  const usableH = BH - padT - padB;
  const leafY = [];
  for (let i = 0; i < leafCount; i++) {
    leafY.push(BY + padT + usableH * ((i + 0.5) / leafCount));
  }

  // For each level, compute the y-position of its nodes (midpoint of children's leaves).
  // Walk bottom-up: level N nodes = groups of leaves; higher levels merge pairs.
  // We assume uniform arity per depth (spec says so).
  const arities = levels.map((lv, i) => {
    if (i === 0) return (lv.branches || []).length;
    // deeper: branchesPerParent[0].length (assume uniform)
    const bpp = lv.branchesPerParent || [];
    return (bpp[0] || []).length;
  });

  // Build node y-positions per depth. Depth 0 = root, depth levels.length = leaves.
  // At depth d (1..levels.length), nodes = product(arities[0..d-1]).
  const nodeYByDepth = []; // nodeYByDepth[d] = array of y coords of nodes at that depth
  nodeYByDepth[levels.length] = leafY.slice();
  for (let d = levels.length - 1; d >= 0; d--) {
    const childArity = arities[d];
    const childYs = nodeYByDepth[d + 1];
    const nodeCount = childYs.length / childArity;
    const ys = [];
    for (let i = 0; i < nodeCount; i++) {
      let sum = 0;
      for (let k = 0; k < childArity; k++) sum += childYs[i * childArity + k];
      ys.push(sum / childArity);
    }
    nodeYByDepth[d] = ys;
  }
  // Depth 0 is the root — single y (centroid of all leaves)
  const rootY = nodeYByDepth[0][0];

  ctx.save();

  // Title
  if (title) {
    ctx.font = '12px monospace';
    ctx.fillStyle = COL_TEXTDIM;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(title, BX + 6, BY + 4);
  }

  // Draw edges + per-level branch labels
  // For each level d (0-indexed), parent nodes are at depth d (x = colX[d]),
  // children at depth d+1 (x = colX[d+1]). Arity a = arities[d].
  for (let d = 0; d < levels.length; d++) {
    const lv = levels[d];
    const a = arities[d];
    const parentYs = nodeYByDepth[d];
    const childYs = nodeYByDepth[d + 1];
    const xParent = colX[d];
    const xChild = colX[d + 1];

    for (let i = 0; i < parentYs.length; i++) {
      for (let k = 0; k < a; k++) {
        const childIdx = i * a + k;
        const yP = parentYs[i];
        const yC = childYs[childIdx];
        // branch spec
        let bspec;
        if (d === 0) bspec = lv.branches[k];
        else bspec = (lv.branchesPerParent[i] || [])[k];
        if (!bspec) continue;

        // edge
        ctx.strokeStyle = bspec.color ? hexWithAlpha(bspec.color, 0.55) : COL_BRANCH;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(xParent + 8, yP);
        ctx.lineTo(xChild - 8, yC);
        ctx.stroke();

        // label: "cz" above midpoint, "3/5" below
        const mx = (xParent + xChild) / 2;
        const my = (yP + yC) / 2;
        ctx.font = '11px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = bspec.color || COL_TEXT;
        if (bspec.label) ctx.fillText(bspec.label, mx, my - 2);
        if (bspec.p) {
          ctx.textBaseline = 'top';
          ctx.fillStyle = COL_TEXTDIM;
          ctx.font = '10px monospace';
          ctx.fillText(bspec.p, mx, my + 3);
        }
      }
    }
  }

  // Draw nodes (internal only — root + intermediate)
  for (let d = 0; d <= levels.length; d++) {
    const ys = nodeYByDepth[d];
    const xc = colX[d];
    for (let i = 0; i < ys.length; i++) {
      const y = ys[i];
      if (d === levels.length) {
        // leaf: draw dot + label to the right
        const leaf = leaves[i] || {};
        const isHL = leaf.highlight;
        ctx.beginPath();
        ctx.arc(xc, y, isHL ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isHL ? COL_HIGHLIGHT : COL_NODE;
        ctx.fill();
        if (isHL) {
          ctx.beginPath();
          ctx.arc(xc, y, 10, 0, Math.PI * 2);
          ctx.strokeStyle = COL_HIGHLIGHT;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.4;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.font = (isHL ? 'bold ' : '') + '12px monospace';
        ctx.fillStyle = isHL ? COL_HIGHLIGHT : COL_TEXT;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        if (leaf.label) ctx.fillText(leaf.label, xc + 10, y - 6);
        if (leaf.p) {
          ctx.font = '10px monospace';
          ctx.fillStyle = isHL ? COL_HIGHLIGHT : COL_TEXTDIM;
          ctx.fillText(leaf.p, xc + 10, y + 7);
        }
      } else {
        // internal node
        ctx.beginPath();
        ctx.arc(xc, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = COL_NODE;
        ctx.fill();
        if (d === 0 && root && root.label) {
          ctx.font = '12px monospace';
          ctx.fillStyle = COL_TEXT;
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(root.label, xc - 8, y);
        }
      }
    }
  }

  ctx.restore();
}

// tiny helper: append alpha byte to a #RRGGBB color
function hexWithAlpha(hex, a) {
  if (!hex.startsWith('#') || hex.length !== 7) return hex;
  const n = Math.round(Math.max(0, Math.min(1, a)) * 255);
  return hex + n.toString(16).padStart(2, '0');
}
