#!/usr/bin/env node
/**
 * test-viz-core.mjs — unit tests for public/resources/lib/viz-core.js
 *
 * Tests pure logic functions only (no DOM required).
 * Usage: node scripts/test-viz-core.mjs
 */

import assert from 'assert/strict';
import { makeTFn, clampStage, getVals, fmtVal } from '../public/resources/lib/viz-core.js';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  ✓ ${name}`);
  } catch (e) {
    failed++;
    console.error(`  ✗ ${name}: ${e.message}`);
  }
}

// ── makeTFn / T ───────────────────────────────────────────────────
console.log('\nmakeTFn');
test('returns Polish when lang=pl', () => {
  const T = makeTFn('pl');
  assert.equal(T('cześć', 'hello'), 'cześć');
});
test('returns English when lang=en', () => {
  const T = makeTFn('en');
  assert.equal(T('cześć', 'hello'), 'hello');
});
test('returns Polish when lang is empty string', () => {
  const T = makeTFn('');
  assert.equal(T('cześć', 'hello'), 'hello'); // non-'pl' → English
});

// ── clampStage ────────────────────────────────────────────────────
console.log('\nclampStage');
test('keeps value in range', () => {
  assert.equal(clampStage(2, 5), 2);
});
test('clamps negative to 0', () => {
  assert.equal(clampStage(-1, 5), 0);
});
test('clamps above max to last index', () => {
  assert.equal(clampStage(10, 5), 4);
});
test('clamps exactly at count to last index', () => {
  assert.equal(clampStage(5, 5), 4);
});
test('single stage always returns 0', () => {
  assert.equal(clampStage(0, 1), 0);
  assert.equal(clampStage(99, 1), 0);
});

// ── getVals ───────────────────────────────────────────────────────
console.log('\ngetVals');
test('builds dict from slider defs', () => {
  const sliders = [
    { id: 'a', val: 2 },
    { id: 'b', val: -1.5 },
  ];
  const vals = getVals(sliders);
  assert.equal(vals.a, 2);
  assert.equal(vals.b, -1.5);
});
test('returns empty dict for null', () => {
  assert.deepEqual(getVals(null), {});
});
test('returns empty dict for undefined', () => {
  assert.deepEqual(getVals(undefined), {});
});
test('returns empty dict for empty array', () => {
  assert.deepEqual(getVals([]), {});
});
test('reflects live val mutations', () => {
  const s = { id: 'x', val: 0 };
  s.val = 7;
  assert.equal(getVals([s]).x, 7);
});

// ── fmtVal ────────────────────────────────────────────────────────
console.log('\nfmtVal');
test('integer step → 0 decimals', () => {
  assert.equal(fmtVal(1, 3), '3');
  assert.equal(fmtVal(2, 10), '10');
});
test('step=0.5 → 1 decimal', () => {
  assert.equal(fmtVal(0.5, 2.5), '2.5');
  assert.equal(fmtVal(0.5, 3), '3.0');
});
test('step=0.1 → 1 decimal', () => {
  assert.equal(fmtVal(0.1, 1.3), '1.3');
});
test('step=0.01 → 2 decimals', () => {
  assert.equal(fmtVal(0.01, 1.23), '1.23');
});
test('step=0.05 → 2 decimals (< 0.1)', () => {
  assert.equal(fmtVal(0.05, 0.15), '0.15');
});
test('string value coerced to number', () => {
  assert.equal(fmtVal(1, '5'), '5');
});

// ── Summary ───────────────────────────────────────────────────────
console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
