#!/usr/bin/env node
/**
 * test-no-pl-strings.mjs — fail the build if hardcoded Polish strings appear
 * in JSX/JS source outside the i18n table.
 *
 * Strategy:
 *   1. Walk every .jsx / .js under src/ (skipping i18n.js itself, tests,
 *      and any line containing the magic comment "@lang-skip").
 *   2. Strip block / line comments so doc text doesn't trigger.
 *   3. Extract every string literal (single, double, template).
 *   4. Skip strings that sit inside a `lang === "pl" ? "PL" : "EN"` ternary
 *      on the same line — those are already at parity.
 *   5. Run lang-detect; report any "pl" findings with file:line context.
 *
 * Usage:
 *   node scripts/test-no-pl-strings.mjs            # exit 1 on any finding
 *   node scripts/test-no-pl-strings.mjs --report   # exit 0, just print
 *
 * Self-tests:
 *   node scripts/test-no-pl-strings.mjs --self-test
 */
import fs   from "node:fs";
import path from "node:path";
import url  from "node:url";

import { detectLang, detectLangVerbose } from "./lang-detect.mjs";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");

const SCAN_ROOTS = ["src"];
const SKIP_FILES = new Set([
  // The translation table itself contains Polish — that's the whole point.
  path.join(ROOT, "src/i18n.js"),
]);
const SKIP_DIRS  = new Set(["node_modules", "dist", "__tests__"]);

const argv = process.argv.slice(2);
const reportOnly = argv.includes("--report");
const selfTest   = argv.includes("--self-test");

// ── 1. Self-tests for the detector ─────────────────────────────────
function runSelfTests() {
  const cases = [
    // text, expected
    ["Sprawdź swoją wiedzę",         "pl"],   // diacritics
    ["jeśli się uda, to świetnie",   "pl"],   // diacritics + stopwords
    ["Click to select an answer",    "en"],   // EN stopwords
    ["The answer is correct",        "en"],   // EN stopwords
    ["Hello world",                  "neutral"], // 2 tokens, no stopwords
    ["x^2 + y^2",                    "neutral"],
    ["",                             "neutral"],
    ["a",                            "neutral"],
    ["znam ten temat",               "pl"],
    ["pokaż następne",               "pl"],
    ["Pokaż wszystkie wyniki",       "pl"],
    ["Show all results",             "en"],
    // The cases that motivated swapping in franc + onset clusters:
    ["FACTOR: 2x**2 - x +4",         "neutral"], // single EN word + math: acceptably ambiguous (we only fail on PL hits)
    ["faktoryzuj 2x**2 - x + 4",     "pl"],   // PL command (suffix -uj), no diacritics
    ["Wzory Viete",                  "pl"],   // PL onset wz-, no diacritics
    ["Solve: x^2 - 5x + 6 = 0",      "en"],
    ["Rozwiąż: x^2 - 5x + 6 = 0",    "pl"],   // diacritic ą
    ["Oblicz wartość wyrażenia",     "pl"],
    ["Compute the value",            "en"],
  ];
  let pass = 0, fail = 0;
  for (const [text, expected] of cases) {
    const got = detectLang(text);
    if (got === expected) { pass++; console.log(`  ✓ "${text}" → ${got}`); }
    else { fail++; console.error(`  ✗ "${text}" → ${got} (expected ${expected})`); }
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail === 0 ? 0 : 1);
}

if (selfTest) runSelfTests();

// ── 2. File walking ────────────────────────────────────────────────
function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (/\.(jsx?|tsx?)$/.test(e.name) && !SKIP_FILES.has(full)) yield full;
  }
}

// ── 3. Comment stripping ───────────────────────────────────────────
// Returns the source with /* … */ and // … blocks blanked out (line breaks
// preserved so line numbers match the original). Strings inside comments
// are then never extracted.
function stripComments(src) {
  // Block comments
  src = src.replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, " "));
  // Line comments — but not inside string literals. We approximate by skipping
  // any "//" preceded by ", ', or ` on the same line.
  src = src.replace(/^([^\n"'`]*?)\/\/.*$/gm, "$1");
  return src;
}

// ── 4. String extraction ───────────────────────────────────────────
// Returns { text, line } objects. Captures simple string literals + simple
// template literals (no interpolation parsing — we just take the raw text).
function extractStrings(src) {
  const out = [];
  let i = 0;
  let line = 1;
  while (i < src.length) {
    const ch = src[i];
    if (ch === "\n") { line++; i++; continue; }
    if (ch === "\"" || ch === "'" || ch === "`") {
      const quote = ch;
      const start = i;
      const startLine = line;
      i++;
      let buf = "";
      while (i < src.length && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < src.length) { buf += src[i + 1]; i += 2; continue; }
        if (src[i] === "\n") line++;
        buf += src[i];
        i++;
      }
      // Skip un-terminated literals (likely from nested template expressions).
      if (i < src.length) i++; // past closing quote
      if (buf.length > 0) out.push({ text: buf, line: startLine });
      continue;
    }
    i++;
  }
  return out;
}

// ── 5. Allowlist heuristics for "PL is OK here" ────────────────────
// "PL is already paired with EN" detection. Three accepted patterns:
//   (a) same-line `lang === "pl" ? "..." : "..."` ternary (±2 lines for multi-line)
//   (b) same-line object: `{ pl: "...", en: "..." }` or reverse — both keys present
//   (c) `xxxPl: "..."` with sibling `xxxEn:` on the immediately adjacent line (±1)
function isLangConditionalContext(srcLines, lineIdx) {
  const here  = srcLines[lineIdx]     ?? "";
  const above = srcLines[lineIdx - 1] ?? "";
  const below = srcLines[lineIdx + 1] ?? "";

  // (a) ternary — also tolerate the operands on adjacent lines.
  const ternaryWindow = [above, here, below, srcLines[lineIdx - 2] ?? "", srcLines[lineIdx + 2] ?? ""].join(" ");
  if (/lang\s*===?\s*["']pl["']/.test(ternaryWindow)) return true;

  // (b) same-line object literal with both pl: and en: keys.
  if (/\bpl\s*:\s*["'`]/.test(here) && /\ben\s*:\s*["'`]/.test(here)) return true;

  // (c) `xxxPl: …` here, sibling `xxxEn:` on the line above/below.
  const plKey = here.match(/\b(\w+)Pl\s*:/);
  if (plKey) {
    const enKey = new RegExp(`\\b${plKey[1]}En\\s*:`);
    if (enKey.test(above) || enKey.test(here) || enKey.test(below)) return true;
  }

  // (d) Same line uses both `xxxPl` and `xxxEn` as property accessors
  //     (e.g. `res.titlePl || res.titleEn`).
  const accPl = here.match(/\.(\w+)Pl\b/);
  if (accPl) {
    const accEn = new RegExp(`\\.${accPl[1]}En\\b`);
    if (accEn.test(here)) return true;
  }

  // (e) Bare `key:` here, `keyEn:` on the very next line — the convention used
  //     in COURSE_META where `title` carries the PL value and `titleEn` follows.
  const bareKey = here.match(/^\s*(\w+)\s*:\s*["'`]/);
  if (bareKey) {
    const en = new RegExp(`^\\s*${bareKey[1]}En\\s*:`);
    if (en.test(below) || en.test(above)) return true;
  }
  return false;
}

// The opt-out tag — placing `@lang-skip` on (or above) a line silences it.
function hasSkipTag(srcLines, lineIdx) {
  const here   = srcLines[lineIdx]     ?? "";
  const above  = srcLines[lineIdx - 1] ?? "";
  return here.includes("@lang-skip") || above.includes("@lang-skip");
}

// ── 6. Run on the tree ─────────────────────────────────────────────
const findings = [];
for (const root of SCAN_ROOTS) {
  const dir = path.join(ROOT, root);
  if (!fs.existsSync(dir)) continue;
  for (const file of walk(dir)) {
    const raw   = fs.readFileSync(file, "utf8");
    const lines = raw.split(/\n/);
    const src   = stripComments(raw);
    const strings = extractStrings(src);
    for (const { text, line } of strings) {
      // snake_case / kebab-case identifiers are not user-facing prose.
      if (/^[a-z][a-z0-9]*([_-][a-z0-9]+)+$/.test(text.trim())) continue;
      const lang = detectLang(text);
      if (lang !== "pl") continue;
      if (isLangConditionalContext(lines, line - 1)) continue;
      if (hasSkipTag(lines, line - 1)) continue;
      findings.push({ file: path.relative(ROOT, file), line, text, reasons: detectLangVerbose(text).reasons });
    }
  }
}

// ── 7. Report ──────────────────────────────────────────────────────
if (findings.length === 0) {
  console.log("✓ no hardcoded Polish strings found in source");
  process.exit(0);
}

const byFile = {};
for (const f of findings) {
  byFile[f.file] ??= [];
  byFile[f.file].push(f);
}

console.log(`\nFound ${findings.length} hardcoded Polish string(s) across ${Object.keys(byFile).length} file(s):\n`);
for (const [file, items] of Object.entries(byFile)) {
  console.log(`  ${file}`);
  for (const it of items) {
    const sample = it.text.length > 80 ? it.text.slice(0, 77) + "…" : it.text;
    console.log(`    L${it.line}: "${sample}"`);
    console.log(`      reasons: ${it.reasons.join(" · ")}`);
  }
  console.log("");
}

console.log("Resolution paths:");
console.log("  - move the string into src/i18n.js and use t(\"key\", lang)");
console.log("  - wrap in a lang === \"pl\" ? \"PL\" : \"EN\" ternary");
console.log("  - if intentional (e.g. a Polish-only literal in a Polish course),");
console.log("    annotate with `// @lang-skip` on or above the line\n");

process.exit(reportOnly ? 0 : 1);
