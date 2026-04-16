#!/usr/bin/env node
/**
 * graph-query.mjs — query the curriculum graph from the command line.
 *
 * Usage:
 *   node scripts/graph-query.mjs ancestors derivative
 *   node scripts/graph-query.mjs dependents integers
 *   node scripts/graph-query.mjs path integers derivative
 *   node scripts/graph-query.mjs audit-chain quadratics
 *   node scripts/graph-query.mjs audit-chain probability
 *   node scripts/graph-query.mjs missing-viz
 *   node scripts/graph-query.mjs stats
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── Load graph ──────────────────────────────────────────────────
const edgesSrc = readFileSync(join(root, "src/data/courses/math_pl/edges.js"), "utf-8");
const edgesMatch = edgesSrc.match(/\["(\w+)",\s*"(\w+)"\]/g);
const RAW_EDGES = edgesMatch.map(m => {
  const [, a, b] = m.match(/\["(\w+)",\s*"(\w+)"\]/);
  return [a, b];
});

const prereqs = {};
const dependents = {};
const allIds = new Set();
for (const [from, to] of RAW_EDGES) {
  allIds.add(from); allIds.add(to);
  if (!prereqs[to]) prereqs[to] = [];
  prereqs[to].push(from);
  if (!dependents[from]) dependents[from] = [];
  dependents[from].push(to);
}

// ── Load node metadata ──────────────────────────────────────────
function loadNode(id) {
  const path = join(root, `src/data/courses/math_pl/nodes/${id}/node.md`);
  if (!existsSync(path)) return { id, exists: false };
  const content = readFileSync(path, "utf-8");
  const hasResource = content.includes("interactive|");
  const parts = content.split("---");
  const body = parts.length > 2 ? parts.slice(2).join("---").trim() : "";
  const hasBody = body.length > 10;
  const hasExample = body.includes("<!-- example -->");
  // Extract label
  const labelMatch = content.match(/labelPl:\s*"([^"]+)"/);
  const label = labelMatch ? labelMatch[1] : id;
  // Count questions
  const qDir = join(root, `src/data/courses/math_pl/nodes/${id}/questions`);
  let qCount = 0;
  try { qCount = readdirSync(qDir).filter(f => f.endsWith(".md")).length; } catch(e) {}

  return { id, label, exists: true, hasResource, hasBody, hasExample, qCount };
}

// ── Graph traversal ─────────────────────────────────────────────
function getAncestors(id, visited = new Set()) {
  if (visited.has(id)) return visited;
  visited.add(id);
  for (const p of (prereqs[id] ?? [])) getAncestors(p, visited);
  return visited;
}

function getDescendants(id, visited = new Set()) {
  if (visited.has(id)) return visited;
  visited.add(id);
  for (const d of (dependents[id] ?? [])) getDescendants(d, visited);
  return visited;
}

function topoSort(ids) {
  const subset = new Set(ids);
  const inDeg = {};
  for (const id of subset) inDeg[id] = 0;
  for (const id of subset) {
    for (const d of (dependents[id] ?? [])) {
      if (subset.has(d)) inDeg[d] = (inDeg[d] || 0) + 1;
    }
  }
  const sorted = [];
  const q = [...subset].filter(id => inDeg[id] === 0);
  while (q.length) {
    q.sort();
    const cur = q.shift();
    sorted.push(cur);
    for (const d of (dependents[cur] ?? [])) {
      if (subset.has(d)) {
        inDeg[d]--;
        if (inDeg[d] === 0) q.push(d);
      }
    }
  }
  return sorted;
}

// ── Named chains ────────────────────────────────────────────────
const CHAINS = {
  quadratics: ["polynomials","factoring","quadratic_eq","fn_quadratic","vieta","quadratic_ineq","optimization_lp"],
  probability: ["sets","counting","permutations","combinations","probability","cond_prob","bernoulli","binom_theorem"],
};

// ── Commands ────────────────────────────────────────────────────
const [cmd, ...args] = process.argv.slice(2);

if (cmd === "ancestors") {
  const id = args[0];
  const anc = getAncestors(id);
  anc.delete(id);
  const sorted = topoSort(anc);
  console.log(`Ancestors of ${id} (${sorted.length}):`);
  for (const a of sorted) {
    const n = loadNode(a);
    console.log(`  ${n.hasResource ? "✓" : "✗"} ${a.padEnd(18)} ${n.label} (${n.qCount}q)`);
  }
}

else if (cmd === "dependents") {
  const id = args[0];
  const desc = getDescendants(id);
  desc.delete(id);
  console.log(`Dependents of ${id} (${desc.size}):`);
  for (const d of [...desc].sort()) console.log(`  ${d}`);
}

else if (cmd === "path") {
  const [from, to] = args;
  const anc = getAncestors(to);
  if (!anc.has(from)) { console.log(`${from} is not an ancestor of ${to}`); process.exit(1); }
  // Filter ancestors to only those reachable from 'from'
  const desc = getDescendants(from);
  const pathNodes = [...anc].filter(id => desc.has(id));
  const sorted = topoSort(pathNodes);
  console.log(`Path from ${from} to ${to} (${sorted.length} nodes):`);
  for (const id of sorted) {
    const n = loadNode(id);
    console.log(`  ${n.hasResource ? "✓" : "✗"} ${id.padEnd(18)} ${n.label}`);
  }
}

else if (cmd === "audit-chain") {
  const chainName = args[0];
  const chain = CHAINS[chainName];
  if (!chain) { console.log(`Unknown chain: ${chainName}. Options: ${Object.keys(CHAINS).join(", ")}`); process.exit(1); }

  // Get all ancestors
  const allNeeded = new Set();
  for (const id of chain) {
    for (const a of getAncestors(id)) allNeeded.add(a);
  }
  const sorted = topoSort(allNeeded);

  console.log(`Chain "${chainName}" — ${chain.length} showcase + ${sorted.length - chain.length} ancestors = ${sorted.length} total\n`);
  for (const id of sorted) {
    const n = loadNode(id);
    const inChain = chain.includes(id);
    const marker = inChain ? "★" : " ";
    const viz = n.hasResource ? "✓ viz" : "✗ viz";
    const desc = n.hasBody ? "✓ desc" : "✗ desc";
    const ex = n.hasExample ? "✓ ex" : "✗ ex";
    console.log(`  ${marker} ${id.padEnd(18)} ${viz}  ${desc}  ${ex}  ${n.qCount}q  ${n.label}`);
  }
}

else if (cmd === "missing-viz") {
  console.log("Nodes without interactive visualizations:\n");
  for (const id of [...allIds].sort()) {
    const n = loadNode(id);
    if (!n.hasResource) {
      console.log(`  ✗ ${id.padEnd(18)} ${n.label} (${n.qCount}q)`);
    }
  }
}

else if (cmd === "stats") {
  let withViz = 0, withDesc = 0, withEx = 0, totalQ = 0;
  for (const id of [...allIds].sort()) {
    const n = loadNode(id);
    if (n.hasResource) withViz++;
    if (n.hasBody) withDesc++;
    if (n.hasExample) withEx++;
    totalQ += n.qCount;
  }
  console.log(`Graph: ${allIds.size} nodes, ${RAW_EDGES.length} edges`);
  console.log(`Visualizations: ${withViz}/${allIds.size}`);
  console.log(`Descriptions: ${withDesc}/${allIds.size}`);
  console.log(`"Nie kumam" examples: ${withEx}/${allIds.size}`);
  console.log(`Questions: ${totalQ}`);
}

else {
  console.log("Usage:");
  console.log("  node scripts/graph-query.mjs ancestors <nodeId>");
  console.log("  node scripts/graph-query.mjs dependents <nodeId>");
  console.log("  node scripts/graph-query.mjs path <from> <to>");
  console.log("  node scripts/graph-query.mjs audit-chain quadratics|probability");
  console.log("  node scripts/graph-query.mjs missing-viz");
  console.log("  node scripts/graph-query.mjs stats");
}
