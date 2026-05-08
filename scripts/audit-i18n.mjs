#!/usr/bin/env node
/**
 * audit-i18n.mjs — find PL/EN parity gaps in node and question content files.
 *
 * For each course (math_pl: PL canonical, phys/abstract_algebra: EN canonical),
 * scans every node.md and question .md and reports:
 *   - body missing translation (no `<!-- en -->` marker for PL course; no PL part for EN course)
 *   - questions missing optionsEn / hintEn / hintsEn (when source has them)
 *   - resources frontmatter missing titlePl or titleEn
 *   - node labelPl missing (math_pl) / labelEn (other courses) — ie label-side untranslated
 *
 * Usage:
 *   node scripts/audit-i18n.mjs               # full report
 *   node scripts/audit-i18n.mjs --course=math_pl
 *   node scripts/audit-i18n.mjs --summary     # counts only
 */
import fs   from "node:fs";
import path from "node:path";

const ROOT      = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const COURSES   = {
  math_pl:          { primary: "pl", missingMarkerLabel: "no <!-- en --> marker" },
  abstract_algebra: { primary: "en", missingMarkerLabel: "no <!-- pl --> / <!-- en --> split (EN-canonical)" },
  phys:             { primary: "en", missingMarkerLabel: "no <!-- pl --> / <!-- en --> split (EN-canonical)" },
};

const argv      = process.argv.slice(2);
const onlyCourse = argv.find(a => a.startsWith("--course="))?.slice("--course=".length);
const summaryOnly = argv.includes("--summary");
const failOnIssues = argv.includes("--fail");

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw.trim(), rawYaml: "" };
  const yaml = m[1];
  const body = m[2].trim();
  const meta = {};
  const lines = yaml.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("  ")) { i++; continue; }
    const kv = line.match(/^(\w+):\s*(.*)/);
    if (!kv) { i++; continue; }
    const key = kv[1];
    let val = kv[2].trim();
    if (val === "" || val === null) {
      const next = lines[i + 1] ?? "";
      if (next.startsWith("  - ")) {
        const items = [];
        i++;
        while (i < lines.length && lines[i].startsWith("  - ")) {
          items.push(lines[i].replace(/^  - /, "").trim().replace(/^["']|["']$/g, ""));
          i++;
        }
        meta[key] = items;
      } else if (next.match(/^  \w+:/)) {
        const map = {};
        i++;
        while (i < lines.length && lines[i].match(/^  \w+:/)) {
          const mkv = lines[i].match(/^  (\w+):\s*(.*)/);
          if (mkv) map[mkv[1]] = mkv[2].trim().replace(/^["']|["']$/g, "");
          i++;
        }
        meta[key] = map;
      } else {
        meta[key] = null;
        i++;
      }
    } else {
      val = val.replace(/^["']|["']$/g, "");
      meta[key] = val;
      i++;
    }
  }
  return { meta, body, rawYaml: yaml };
}

function bodyHasMarker(body)  { return /<!--\s*en\s*-->/i.test(body); }
function bodyHasPlMarker(body){ return /<!--\s*pl\s*-->/i.test(body); }

function classifyResource(r) {
  if (typeof r !== "string") return null;
  const parts = r.split("|").map(s => s.trim());
  const [type, url, titleEn, titlePl] = parts;
  return { type, url, titleEn: titleEn ?? "", titlePl: titlePl ?? "" };
}

const issues = [];
function add(course, file, kind, detail = "") {
  issues.push({ course, file, kind, detail });
}

function shortPath(p) { return path.relative(ROOT, p); }

function auditNode(course, filePath, primary) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontmatter(raw);

  // Body parity
  if (primary === "pl") {
    if (!bodyHasMarker(body)) {
      add(course, shortPath(filePath), "node-body-no-en", "missing <!-- en --> block");
    } else {
      const enPart = body.split(/<!--\s*en\s*-->/i)[1]?.trim() ?? "";
      if (!enPart) add(course, shortPath(filePath), "node-body-empty-en", "empty EN section");
    }
  } else {
    // EN-canonical: check for PL block
    if (!bodyHasPlMarker(body)) {
      add(course, shortPath(filePath), "node-body-no-pl", "missing <!-- pl --> block");
    } else {
      const plPart = body.split(/<!--\s*pl\s*-->/i)[1]?.trim() ?? "";
      if (!plPart) add(course, shortPath(filePath), "node-body-empty-pl", "empty PL section");
    }
  }

  // Label parity. For math_pl: `label` is EN-ish, `labelPl` should exist.
  // For EN-canonical courses: `label` is EN, `labelPl` should exist.
  if (!meta.labelPl) add(course, shortPath(filePath), "node-no-labelPl", "missing labelPl frontmatter");

  // Resources: each pipe-string should have titleEn|titlePl populated
  if (Array.isArray(meta.resources)) {
    meta.resources.forEach((r, idx) => {
      const cls = classifyResource(r);
      if (!cls) return;
      if (!cls.titleEn) add(course, shortPath(filePath), "resource-no-titleEn", `resource[${idx}]: ${cls.url}`);
      if (!cls.titlePl) add(course, shortPath(filePath), "resource-no-titlePl", `resource[${idx}]: ${cls.url}`);
    });
  }
}

function auditQuestion(course, filePath, primary) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontmatter(raw);

  if (primary === "pl") {
    // Body
    if (!bodyHasMarker(body)) {
      add(course, shortPath(filePath), "q-body-no-en", "missing <!-- en --> block");
    } else {
      const enPart = body.split(/<!--\s*en\s*-->/i)[1]?.trim() ?? "";
      if (!enPart) add(course, shortPath(filePath), "q-body-empty-en", "empty EN body");
    }
    // optionsEn must exist if options does
    const hasOptions   = Array.isArray(meta.options) && meta.options.length > 0;
    const hasOptionsEn = Array.isArray(meta.optionsEn) && meta.optionsEn.length > 0;
    if (hasOptions && !hasOptionsEn) {
      add(course, shortPath(filePath), "q-no-optionsEn", `${meta.options.length} options need EN`);
    } else if (hasOptions && hasOptionsEn && meta.options.length !== meta.optionsEn.length) {
      add(course, shortPath(filePath), "q-optionsEn-mismatch", `${meta.options.length} PL vs ${meta.optionsEn.length} EN`);
    }
    // hint -> hintEn parity
    if (meta.hint && !meta.hintEn) {
      add(course, shortPath(filePath), "q-no-hintEn", "");
    }
    // hints array -> hintsEn parity
    const hasHints   = Array.isArray(meta.hints) && meta.hints.length > 0;
    const hasHintsEn = Array.isArray(meta.hintsEn) && meta.hintsEn.length > 0;
    if (hasHints && !hasHintsEn) {
      add(course, shortPath(filePath), "q-no-hintsEn", `${meta.hints.length} hints need EN`);
    } else if (hasHints && hasHintsEn && meta.hints.length !== meta.hintsEn.length) {
      add(course, shortPath(filePath), "q-hintsEn-mismatch", `${meta.hints.length} PL vs ${meta.hintsEn.length} EN`);
    }
  } else {
    // EN-canonical course: check PL parity instead
    if (!bodyHasPlMarker(body)) {
      add(course, shortPath(filePath), "q-body-no-pl", "missing <!-- pl --> block");
    }
    const hasOptions   = Array.isArray(meta.options) && meta.options.length > 0;
    const hasOptionsPl = Array.isArray(meta.optionsPl) && meta.optionsPl.length > 0;
    if (hasOptions && !hasOptionsPl) {
      add(course, shortPath(filePath), "q-no-optionsPl", `${meta.options.length} options need PL`);
    }
    if (meta.hint && !meta.hintPl) add(course, shortPath(filePath), "q-no-hintPl", "");
    const hasHints = Array.isArray(meta.hints) && meta.hints.length > 0;
    const hasHintsPl = Array.isArray(meta.hintsPl) && meta.hintsPl.length > 0;
    if (hasHints && !hasHintsPl) add(course, shortPath(filePath), "q-no-hintsPl", `${meta.hints.length} hints need PL`);
  }
}

function walk(dir, fn) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

// Walk every course
for (const [course, info] of Object.entries(COURSES)) {
  if (onlyCourse && course !== onlyCourse) continue;
  const courseDir = path.join(ROOT, "src/data/courses", course, "nodes");
  if (!fs.existsSync(courseDir)) continue;
  walk(courseDir, fp => {
    if (!fp.endsWith(".md")) return;
    if (fp.endsWith("/node.md")) auditNode(course, fp, info.primary);
    else if (fp.includes("/questions/")) auditQuestion(course, fp, info.primary);
  });
}

// ── Report ──
const byCourse = {};
for (const it of issues) {
  byCourse[it.course] ??= {};
  byCourse[it.course][it.kind] ??= [];
  byCourse[it.course][it.kind].push(it);
}

let totalIssues = 0;
for (const [course, byKind] of Object.entries(byCourse)) {
  const total = Object.values(byKind).reduce((a, l) => a + l.length, 0);
  totalIssues += total;
  console.log(`\n=== ${course} (${total} issues) ===`);
  const sortedKinds = Object.keys(byKind).sort();
  for (const kind of sortedKinds) {
    const list = byKind[kind];
    console.log(`  ${kind}: ${list.length}`);
    if (!summaryOnly) {
      for (const it of list.slice(0, 50)) {
        console.log(`    ${it.file}${it.detail ? "  -- " + it.detail : ""}`);
      }
      if (list.length > 50) console.log(`    ... and ${list.length - 50} more`);
    }
  }
}
console.log(`\nTOTAL: ${totalIssues} issues across ${Object.keys(byCourse).length} courses`);

if (totalIssues === 0) console.log("✓ no PL/EN parity gaps found");
process.exit(failOnIssues && totalIssues > 0 ? 1 : 0);
