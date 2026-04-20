#!/usr/bin/env node
/**
 * test-warsztat-render.mjs — headless render check for every Warsztat.
 *
 * Spins up a local static server, loads each `*warsztat.html` in headless
 * Brave, and asserts that the first challenge's panel actually rendered:
 *   - #step has text ("Wyzwanie 1 / N")
 *   - #title has text
 *   - the panel contains at least ONE of: predict MCQ options, sliders, choices
 *
 * Catches the failure mode where the canvas draws but the panel is empty
 * (regressions in initWarsztat, challenge data shape, etc.).
 */

import { spawn, spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve as pathResolve, extname, join } from "node:path";

const ROOT = pathResolve(new URL(".", import.meta.url).pathname, "..");
const PORT = 8766;

// ── Find browser ──────────────────────────────────────────────────────
const BROWSERS = ["brave", "chromium", "google-chrome", "chrome"];
function findBrowser() {
  for (const b of BROWSERS) {
    const r = spawnSync("which", [b], { stdio: ["ignore", "pipe", "ignore"] });
    if (r.status === 0) return r.stdout.toString().trim();
  }
  return null;
}
const BROWSER = findBrowser();
if (!BROWSER) {
  console.error("⚠️  No headless browser found (tried: brave, chromium, chrome). Skipping.");
  process.exit(0);
}

// ── Find warsztat files ───────────────────────────────────────────────
function findWarsztats(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...findWarsztats(full));
    else if (entry.endsWith("warsztat.html")) out.push(full);
  }
  return out;
}
const files = findWarsztats(join(ROOT, "public/resources"));
console.log(`Warsztat render check — ${files.length} files`);

// ── Static server ─────────────────────────────────────────────────────
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };
const server = createServer(async (req, res) => {
  const url = req.url.split("?")[0];
  try {
    const data = await readFile(join(ROOT, url));
    res.writeHead(200, { "content-type": MIME[extname(url)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end();
  }
});
await new Promise(r => server.listen(PORT, r));

// ── DOM-dump render check ─────────────────────────────────────────────
function renderAndExtract(url) {
  return new Promise(resolve => {
    const p = spawn(BROWSER, [
      "--headless=new", "--disable-gpu", "--no-sandbox",
      "--virtual-time-budget=3000", "--dump-dom", url,
    ], { stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    p.stdout.on("data", d => out += d);
    p.on("close", () => resolve(out));
    setTimeout(() => p.kill(), 15000);
  });
}

function checkDom(html) {
  const issues = [];
  const stepMatch = html.match(/id="step"[^>]*>([^<]*)/);
  const titleMatch = html.match(/id="title"[^>]*>([^<]*)/);

  if (!stepMatch || !/Wyzwanie\s+\d+\s*\/\s*\d+/.test(stepMatch[1])) {
    issues.push(`#step not populated (got: "${stepMatch?.[1]?.slice(0, 40) ?? 'missing'}")`);
  }
  if (!titleMatch || titleMatch[1].trim().length < 3) {
    issues.push(`#title empty`);
  }

  // Check for interactive elements anywhere in the document body — don't rely
  // on panel-div boundary (nested divs make regex unreliable).
  const hasPredictButtons = /id="predict"[\s\S]{0,3000}?<button/.test(html);
  const hasSliders = /class="slider-row"/.test(html);
  const hasChoiceButtons = /id="choices-wrap"[\s\S]{0,3000}?<button/.test(html);

  if (!hasPredictButtons && !hasSliders && !hasChoiceButtons) {
    issues.push(`no predict/sliders/choices rendered — initWarsztat likely failed`);
  }
  return issues;
}

// ── Run checks ────────────────────────────────────────────────────────
let failed = 0;
for (const f of files) {
  const rel = f.replace(ROOT + "/", "");
  const url = `http://localhost:${PORT}/${rel}`;
  const dom = await renderAndExtract(url);
  const issues = checkDom(dom);
  if (issues.length === 0) {
    console.log(`  ✓ ${rel}`);
  } else {
    failed++;
    console.log(`  ✗ ${rel}`);
    for (const i of issues) console.log(`      ${i}`);
  }
}

server.close();

if (failed > 0) {
  console.error(`\nFAIL: ${failed}/${files.length} Warsztats failed to render properly`);
  process.exit(1);
}
console.log(`\nAll ${files.length} Warsztats rendered ✓`);
