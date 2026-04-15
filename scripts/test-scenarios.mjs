#!/usr/bin/env node
/**
 * test-scenarios.mjs — simulate different student profiles through the diagnostic.
 *
 * Runs the belief engine with predefined answer patterns and shows
 * what the diagnosis would look like. Useful for testing:
 * - Does a strong student get mostly green?
 * - Does a weak student's gaps make sense?
 * - Does a mixed student get the right frontier?
 *
 * Usage: node scripts/test-scenarios.mjs
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── Load edges ──────────────────────────────────────────────────
// Parse edges.js manually (it's an ES module with export)
const edgesSrc = readFileSync(join(root, "src/data/courses/math_pl/edges.js"), "utf-8");
const edgesMatch = edgesSrc.match(/\["(\w+)",\s*"(\w+)"\]/g);
const RAW_EDGES = edgesMatch.map(m => {
  const [, a, b] = m.match(/\["(\w+)",\s*"(\w+)"\]/);
  return [a, b];
});

// Build adjacency
const prereqs = {};
const dependents = {};
for (const [from, to] of RAW_EDGES) {
  if (!prereqs[to]) prereqs[to] = [];
  prereqs[to].push(from);
  if (!dependents[from]) dependents[from] = [];
  dependents[from].push(to);
}
const adjacency = { prereqs, dependents };

// All node IDs
const allIds = new Set();
for (const [a, b] of RAW_EDGES) { allIds.add(a); allIds.add(b); }
const allNodeIds = [...allIds].map(id => ({ id }));

// ── Belief propagation (simplified from belief.js) ──────────────
function propagateKnown(id, belief) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "known") continue;
    result[cur] = "known";
    (prereqs[cur] ?? []).forEach(p => {
      if (result[p] !== "known") queue.push(p);
    });
  }
  return result;
}

function propagateUnknown(id, belief) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "unknown") continue;
    result[cur] = "unknown";
    (dependents[cur] ?? []).forEach(d => {
      if (result[d] !== "unknown") queue.push(d);
    });
  }
  return result;
}

function applyAnswer(nodeId, correct, belief) {
  if (correct) return propagateKnown(nodeId, belief);
  return propagateUnknown(nodeId, belief);
}

// ── Compute frontier ────────────────────────────────────────────
function computeFrontier(belief) {
  return allNodeIds
    .filter(n => belief[n.id] !== "known" && belief[n.id] !== "unknown")
    .filter(n => (prereqs[n.id] ?? []).every(p => belief[p] === "known"))
    .map(n => n.id);
}

// ── Scenarios ───────────────────────────────────────────────────
const scenarios = [
  {
    name: "Strong SP8 student — knows basics, fails at LP",
    desc: "Gets SP8 topics right, fails when hitting LP algebra",
    answers: [
      { node: "integers", correct: true },
      { node: "fractions", correct: true },
      { node: "powers", correct: true },
      { node: "fn_concept", correct: true },
      { node: "area_perimeter", correct: true },
      { node: "thales", correct: true },
      { node: "polynomials", correct: false },
      { node: "quadratic_eq", correct: false },
      { node: "data_basics", correct: true },
      { node: "counting", correct: true },
    ],
    expect: {
      minKnown: 5,
      minUnknown: 10,
      knownIncludes: ["integers", "fractions", "powers"],
      unknownIncludes: ["polynomials", "quadratic_eq", "fn_quadratic", "derivative"],
      frontierIncludes: ["linear_eq"],
      frontierExcludes: ["derivative", "integral"],
    },
  },
  {
    name: "Good at algebra, weak at geometry and probability",
    desc: "Nails equations and functions, fails shapes and counting",
    answers: [
      { node: "integers", correct: true },
      { node: "fractions", correct: true },
      { node: "powers", correct: true },
      { node: "polynomials", correct: true },
      { node: "factoring", correct: true },
      { node: "quadratic_eq", correct: true },
      { node: "fn_concept", correct: true },
      { node: "fn_quadratic", correct: true },
      { node: "thales", correct: false },
      { node: "pythagoras", correct: false },
      { node: "probability", correct: false },
      { node: "sets", correct: false },
    ],
    expect: {
      minKnown: 8,
      knownIncludes: ["polynomials", "quadratic_eq", "fn_quadratic"],
      unknownIncludes: ["thales", "pythagoras", "probability", "solid_geom"],
      frontierExcludes: ["derivative", "thales"],
    },
  },
  {
    name: "Almost matura-ready — fails on LR topics only",
    desc: "Knows all LP, struggles with rozszerzona material",
    answers: [
      { node: "integers", correct: true },
      { node: "powers", correct: true },
      { node: "polynomials", correct: true },
      { node: "quadratic_eq", correct: true },
      { node: "fn_quadratic", correct: true },
      { node: "probability", correct: true },
      { node: "trig_basic", correct: true },
      { node: "sequences", correct: true },
      { node: "log_exp", correct: true },
      { node: "limits", correct: false },
      { node: "derivative", correct: false },
      { node: "cond_prob", correct: false },
      { node: "binom_theorem", correct: false },
    ],
    expect: {
      minKnown: 15,
      unknownIncludes: ["limits", "derivative", "integral", "cond_prob"],
      knownIncludes: ["integers", "powers", "polynomials", "probability"],
      frontierExcludes: ["integers", "derivative"],
    },
  },
  {
    name: "Total beginner — fails everything",
    desc: "First question wrong, cascades to most of the graph",
    answers: [
      { node: "integers", correct: false },
      { node: "fractions", correct: false },
      { node: "sets", correct: false },
      { node: "thales", correct: false },
      { node: "fn_concept", correct: false },
    ],
    expect: {
      minUnknown: 40,
      minCoverage: 70,
      unknownIncludes: ["integers", "derivative", "quadratic_eq"],
      frontierIncludes: ["powers"],
      frontierExcludes: ["derivative", "quadratic_eq"],
    },
  },
  {
    name: "Knows everything — perfect run",
    desc: "Top student, answers high-level topics correctly",
    answers: [
      { node: "derivative", correct: true },
      { node: "integral", correct: true },
      { node: "distributions", correct: true },
      { node: "binom_theorem", correct: true },
      { node: "conic_sections", correct: true },
      { node: "solid_geom", correct: true },
      { node: "complex", correct: true },
      { node: "fn_trig", correct: true },
      { node: "proof", correct: true },
    ],
    expect: {
      minKnown: 45,
      maxUnknown: 0,
      minCoverage: 70,
      knownIncludes: ["integers", "powers", "polynomials", "limits", "derivative"],
    },
  },
];

// ── Run scenarios ───────────────────────────────────────────────
console.log("Test Scenarios — Diagnostic Simulation\n");
console.log(`Graph: ${allNodeIds.length} nodes, ${RAW_EDGES.length} edges\n`);

let failures = 0;

function assert(condition, msg) {
  if (!condition) {
    console.log(`  FAIL: ${msg}`);
    failures++;
  }
}

for (const scenario of scenarios) {
  console.log(`━━━ ${scenario.name} ━━━`);

  let belief = {};
  for (const { node, correct } of scenario.answers) {
    belief = applyAnswer(node, correct, belief);
  }

  const known = allNodeIds.filter(n => belief[n.id] === "known").map(n => n.id);
  const unknown = allNodeIds.filter(n => belief[n.id] === "unknown").map(n => n.id);
  const unclassified = allNodeIds.filter(n => !belief[n.id]).map(n => n.id);
  const frontier = computeFrontier(belief);
  const coverage = Math.round(((known.length + unknown.length) / allNodeIds.length) * 100);

  console.log(`  Known: ${known.length}  Unknown: ${unknown.length}  Unclassified: ${unclassified.length}  Coverage: ${coverage}%`);
  console.log(`  Frontier: ${frontier.slice(0, 6).join(", ")}${frontier.length > 6 ? ` (+${frontier.length - 6} more)` : ""}`);

  // ── Assertions per scenario ──────────────────────────────────
  if (scenario.expect) {
    const e = scenario.expect;
    if (e.minKnown != null) assert(known.length >= e.minKnown, `expected ≥${e.minKnown} known, got ${known.length}`);
    if (e.maxKnown != null) assert(known.length <= e.maxKnown, `expected ≤${e.maxKnown} known, got ${known.length}`);
    if (e.minUnknown != null) assert(unknown.length >= e.minUnknown, `expected ≥${e.minUnknown} unknown, got ${unknown.length}`);
    if (e.maxUnknown != null) assert(unknown.length <= e.maxUnknown, `expected ≤${e.maxUnknown} unknown, got ${unknown.length}`);
    if (e.minCoverage != null) assert(coverage >= e.minCoverage, `expected ≥${e.minCoverage}% coverage, got ${coverage}%`);
    if (e.frontierIncludes) {
      for (const id of e.frontierIncludes) {
        assert(frontier.includes(id), `expected "${id}" in frontier`);
      }
    }
    if (e.frontierExcludes) {
      for (const id of e.frontierExcludes) {
        assert(!frontier.includes(id), `expected "${id}" NOT in frontier`);
      }
    }
    if (e.knownIncludes) {
      for (const id of e.knownIncludes) {
        assert(known.includes(id), `expected "${id}" to be known`);
      }
    }
    if (e.unknownIncludes) {
      for (const id of e.unknownIncludes) {
        assert(unknown.includes(id), `expected "${id}" to be unknown`);
      }
    }
  }

  console.log();
}

if (failures > 0) {
  console.log(`\n${failures} assertion(s) FAILED`);
  process.exit(1);
} else {
  console.log("All scenarios passed ✓");
  process.exit(0);
}
