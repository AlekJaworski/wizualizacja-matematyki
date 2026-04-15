#!/usr/bin/env node
/**
 * verify-questions.mjs — spot-check rational inequality questions.
 *
 * Usage:
 *   node scripts/verify-questions.mjs
 *
 * Defines questions as { expr, ineq, answer } and verifies by evaluating
 * the expression at test points inside/outside the claimed solution intervals.
 *
 * Not a CAS — just numeric spot-checking. Catches wrong answers, wrong
 * brackets, and sign errors.
 */

// ── Define questions to verify ──────────────────────────────────
// expr: a function (x) => number (the rational expression)
// ineq: "<" | "<=" | ">" | ">="
// answer: array of [lo, hi, loInclusive, hiInclusive] intervals
// excluded: x values where denominator = 0
// file: source file for reference

const questions = [
  {
    file: "rational_expr/04.md",
    desc: "(x+1)/(x-3) > 0",
    expr: x => (x + 1) / (x - 3),
    ineq: ">",
    excluded: [3],
    answer: [[-Infinity, -1, false, false], [3, Infinity, false, false]],
  },
  {
    file: "rational_expr/05.md",
    desc: "(x²-2x-8)/x >= 0",
    expr: x => (x * x - 2 * x - 8) / x,
    ineq: ">=",
    excluded: [0],
    answer: [[-2, 0, true, false], [4, Infinity, true, false]],
  },
  {
    file: "rational_expr/06.md",
    desc: "(x-5)/(x-2) <= 0",
    expr: x => (x - 5) / (x - 2),
    ineq: "<=",
    excluded: [2],
    answer: [[2, 5, false, true]],
  },
  {
    file: "rational_expr/07.md",
    desc: "(x²+x-6)/(x+1) <= 0",
    expr: x => (x * x + x - 6) / (x + 1),
    ineq: "<=",
    excluded: [-1],
    answer: [[-Infinity, -3, false, true], [-1, 2, false, true]],
  },
];

// ── Verifier ────────────────────────────────────────────────────

function satisfiesIneq(val, ineq) {
  if (!isFinite(val)) return false;
  switch (ineq) {
    case ">":  return val > 0;
    case ">=": return val >= 0;
    case "<":  return val < 0;
    case "<=": return val <= 0;
  }
}

function inAnswer(x, answer) {
  for (const [lo, hi, loIncl, hiIncl] of answer) {
    const aboveLo = loIncl ? x >= lo : x > lo;
    const belowHi = hiIncl ? x <= hi : x < hi;
    if (aboveLo && belowHi) return true;
  }
  return false;
}

function verify(q) {
  const errors = [];

  // Generate test points: near boundaries, in/out each interval, and random
  const testPoints = new Set();

  // Collect all boundary points
  const boundaries = [];
  for (const [lo, hi] of q.answer) {
    if (isFinite(lo)) boundaries.push(lo);
    if (isFinite(hi)) boundaries.push(hi);
  }
  for (const ex of q.excluded) boundaries.push(ex);

  // Add test points near each boundary
  for (const b of boundaries) {
    testPoints.add(b);
    testPoints.add(b - 0.5);
    testPoints.add(b + 0.5);
    testPoints.add(b - 0.01);
    testPoints.add(b + 0.01);
  }

  // Add some far-out points
  const allBounds = boundaries.filter(isFinite);
  const min = allBounds.length ? Math.min(...allBounds) : 0;
  const max = allBounds.length ? Math.max(...allBounds) : 0;
  testPoints.add(min - 10);
  testPoints.add(max + 10);
  testPoints.add(0);

  // Remove excluded points (domain restrictions)
  for (const ex of q.excluded) testPoints.delete(ex);

  let tested = 0;
  for (const x of testPoints) {
    const val = q.expr(x);
    if (!isFinite(val)) continue;
    tested++;

    const exprSatisfied = satisfiesIneq(val, q.ineq);
    const inSolution = inAnswer(x, q.answer);

    if (exprSatisfied !== inSolution) {
      errors.push(
        `  x=${x}: expr=${val.toFixed(4)}, ${q.ineq}0? ${exprSatisfied}, in answer? ${inSolution}`
      );
    }
  }

  return { tested, errors };
}

// ── Run ──────────────────────────────────────────────────────────
console.log("Verifying rational inequality questions...\n");
let allOk = true;

for (const q of questions) {
  const { tested, errors } = verify(q);
  if (errors.length === 0) {
    console.log(`✓ ${q.file}: ${q.desc} — ${tested} test points OK`);
  } else {
    allOk = false;
    console.log(`✗ ${q.file}: ${q.desc} — ${errors.length} FAILURES:`);
    errors.forEach(e => console.log(e));
  }
}

console.log(allOk ? "\nAll questions verified ✓" : "\nSome questions have errors!");
process.exit(allOk ? 0 : 1);
