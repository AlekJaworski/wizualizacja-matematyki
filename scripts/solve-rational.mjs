#!/usr/bin/env node
/**
 * solve-rational.mjs — solve rational inequalities from factored form.
 *
 * Usage:
 *   node scripts/solve-rational.mjs
 *
 * Define problems as factored numerator/denominator roots + inequality type.
 * The solver builds the sign chart and outputs the exact solution intervals.
 */

/**
 * Solve a rational inequality given in factored form.
 *
 * @param {number[]} numRoots  — roots of the numerator (where expression = 0)
 * @param {number[]} denRoots  — roots of the denominator (excluded from domain)
 * @param {"<"|"<="|">"|">="} ineq — inequality type
 * @param {number} [leadingSign=1] — sign of leading coefficient (1 or -1)
 * @returns {{ intervals: string, points: {x:number, sign:string}[] }}
 */
function solveRational(numRoots, denRoots, ineq, leadingSign = 1) {
  // Collect all critical points, sorted
  const allRoots = [
    ...numRoots.map(r => ({ val: r, type: "num" })),
    ...denRoots.map(r => ({ val: r, type: "den" })),
  ].sort((a, b) => a.val - b.val);

  const criticalValues = allRoots.map(r => r.val);
  const unique = [...new Set(criticalValues)].sort((a, b) => a - b);

  // Build test points: one in each interval between critical points
  const testPoints = [];
  if (unique.length === 0) {
    testPoints.push(0);
  } else {
    testPoints.push(unique[0] - 1); // before first
    for (let i = 0; i < unique.length - 1; i++) {
      testPoints.push((unique[i] + unique[i + 1]) / 2); // between
    }
    testPoints.push(unique[unique.length - 1] + 1); // after last
  }

  // Evaluate sign at each test point
  function evalSign(x) {
    let sign = leadingSign > 0 ? 1 : -1;
    for (const r of numRoots) sign *= Math.sign(x - r);
    for (const r of denRoots) sign *= Math.sign(x - r);
    return sign;
  }

  // Determine which intervals satisfy the inequality
  const denRootSet = new Set(denRoots);
  const numRootSet = new Set(numRoots);
  const includesZero = ineq === "<=" || ineq === ">=";
  const wantPositive = ineq === ">" || ineq === ">=";

  const intervals = [];

  // Check each interval
  const boundaries = [-Infinity, ...unique, Infinity];
  for (let i = 0; i < boundaries.length - 1; i++) {
    const lo = boundaries[i];
    const hi = boundaries[i + 1];
    const testX = testPoints[i];
    const sign = evalSign(testX);
    const satisfies = wantPositive ? sign > 0 : sign < 0;

    if (satisfies) {
      // Determine bracket types
      const loIncl = isFinite(lo) && includesZero && numRootSet.has(lo) && !denRootSet.has(lo);
      const hiIncl = isFinite(hi) && includesZero && numRootSet.has(hi) && !denRootSet.has(hi);
      intervals.push({ lo, hi, loIncl, hiIncl });
    }
  }

  // Also check critical points themselves (for = 0 cases)
  // Already handled by loIncl/hiIncl above

  // Merge adjacent intervals (when a critical point between them is included)
  const merged = [];
  for (const iv of intervals) {
    if (merged.length > 0) {
      const prev = merged[merged.length - 1];
      if (prev.hi === iv.lo && (prev.hiIncl || iv.loIncl)) {
        prev.hi = iv.hi;
        prev.hiIncl = iv.hiIncl;
        continue;
      }
    }
    merged.push({ ...iv });
  }

  // Format as math notation
  function fmt(iv) {
    const l = iv.loIncl ? "[" : "(";
    const r = iv.hiIncl ? "]" : ")";
    const lo = iv.lo === -Infinity ? "-∞" : iv.lo;
    const hi = iv.hi === Infinity ? "+∞" : iv.hi;
    return `${l}${lo}, ${hi}${r}`;
  }

  const result = merged.map(fmt).join(" ∪ ");

  // Sign chart for display
  const chart = testPoints.map((x, i) => ({
    interval: `${boundaries[i] === -Infinity ? "-∞" : boundaries[i]} < x < ${boundaries[i+1] === Infinity ? "+∞" : boundaries[i+1]}`,
    testX: x,
    sign: evalSign(x) > 0 ? "+" : "−",
  }));

  return { answer: result || "∅", intervals: merged, chart };
}

// ── Define problems ─────────────────────────────────────────────

const problems = [
  {
    desc: "(x+1)/(x-3) > 0",
    numRoots: [-1],
    denRoots: [3],
    ineq: ">",
  },
  {
    desc: "(x-5)/(x-2) ≤ 0",
    numRoots: [5],
    denRoots: [2],
    ineq: "<=",
  },
  {
    desc: "(x²+x-6)/(x+1) ≤ 0  →  (x+3)(x-2)/(x+1)",
    numRoots: [-3, 2],
    denRoots: [-1],
    ineq: "<=",
  },
  {
    desc: "(x²-2x-8)/x ≥ 0  →  (x-4)(x+2)/x",
    numRoots: [-2, 4],
    denRoots: [0],
    ineq: ">=",
  },
];

// ── Run ──────────────────────────────────────────────────────────
console.log("Rational inequality solver\n");

for (const p of problems) {
  const { answer, chart } = solveRational(p.numRoots, p.denRoots, p.ineq, p.leadingSign);
  console.log(`${p.desc}`);
  console.log(`  Answer: ${answer}`);
  console.log(`  Sign chart:`);
  for (const row of chart) {
    console.log(`    ${row.interval}  (x=${row.testX})  → ${row.sign}`);
  }
  console.log();
}
