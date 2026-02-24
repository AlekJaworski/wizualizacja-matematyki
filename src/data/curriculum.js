/**
 * curriculum.js — filesystem-driven data loader
 *
 * Reads every  src/data/nodes/<id>/node.md       → builds RAW_NODES
 * Reads every  src/data/nodes/<id>/questions/*.md → builds QUESTION_BANK
 *
 * Format of node.md frontmatter:
 *   label, labelPl, scope, section, level, x, y
 *
 * Format of question frontmatter:
 *   options: string[]   (exactly 4)
 *   correct: number     (0-based index)
 *   hint: string
 *   body (markdown below ---): question text
 *
 * Adding a new topic = create src/data/nodes/<id>/node.md + questions/01.md
 * Adding a new question = drop another .md into the node's questions/ folder
 * No JS files need editing.
 *
 * DB migration path: replace the glob calls below with fetch('/api/nodes') etc.
 */

// ── Frontmatter parser ────────────────────────────────────────────
// Vite doesn't bundle a YAML parser by default, but frontmatter is a
// simple enough subset that we can parse it with a small hand-rolled
// parser — no extra dependency needed.

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw.trim() };

  const yamlBlock = match[1];
  const body      = match[2].trim();
  const meta      = {};

  // Parse line-by-line; handles scalars, quoted strings, and simple lists
  const lines = yamlBlock.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // List item belonging to previous key — already handled below
    if (line.startsWith("  - ")) { i++; continue; }

    const kv = line.match(/^(\w+):\s*(.*)/);
    if (!kv) { i++; continue; }

    const key = kv[1];
    let   val = kv[2].trim();

    if (val === "" || val === null) {
      // Possibly a list following on next lines
      const items = [];
      i++;
      while (i < lines.length && lines[i].startsWith("  - ")) {
        let item = lines[i].replace(/^  - /, "").trim();
        // Strip surrounding quotes
        item = item.replace(/^["']|["']$/g, "");
        items.push(item);
        i++;
      }
      meta[key] = items.length > 0 ? items : null;
    } else {
      // Strip surrounding quotes, parse numbers/booleans
      val = val.replace(/^["']|["']$/g, "");
      if (!isNaN(val) && val !== "") meta[key] = Number(val);
      else if (val === "true")       meta[key] = true;
      else if (val === "false")      meta[key] = false;
      else                           meta[key] = val;
      i++;
    }
  }

  return { meta, body };
}

// ── Load all node.md files ─────────────────────────────────────────
const nodeFiles = import.meta.glob(
  "./nodes/*/node.md",
  { eager: true, query: "?raw", import: "default" }
);

export const RAW_NODES = Object.entries(nodeFiles).map(([path, raw]) => {
  // Extract node id from path: ./nodes/<id>/node.md
  const id = path.match(/\.\/nodes\/([^/]+)\/node\.md$/)?.[1];
  const { meta } = parseFrontmatter(raw);
  return {
    id,
    label:   meta.label   ?? id,
    labelPl: meta.labelPl ?? meta.label ?? id,
    scope:   meta.scope   ?? "unknown",
    section: meta.section ?? "SP8",
    level:   meta.level   ?? 1,
    x:       meta.x       ?? 0,
    y:       meta.y       ?? 0,
  };
});

// ── Load all question files ────────────────────────────────────────
const questionFiles = import.meta.glob(
  "./nodes/*/questions/*.md",
  { eager: true, query: "?raw", import: "default" }
);

/**
 * QUESTION_BANK maps nodeId → array of parsed questions.
 * QuizPanel picks one at random so teachers can keep adding more.
 *
 * @type {Record<string, Array<{q:string, options:string[], correct:number, hint:string}>>}
 */
export const QUESTION_BANK = (() => {
  const bank = {};
  for (const [path, raw] of Object.entries(questionFiles)) {
    // Extract node id: ./nodes/<id>/questions/<file>.md
    const id = path.match(/\.\/nodes\/([^/]+)\/questions\//)?.[1];
    if (!id) continue;

    const { meta, body } = parseFrontmatter(raw);
    if (!bank[id]) bank[id] = [];
    bank[id].push({
      q:       body,
      options: meta.options ?? [],
      correct: meta.correct ?? 0,
      hint:    meta.hint    ?? "",
    });
  }
  return bank;
})();

/**
 * Pick a random question for a node, or null if none exist.
 * @param {string} nodeId
 * @returns {{ q:string, options:string[], correct:number, hint:string } | null}
 */
export function getQuestion(nodeId) {
  const qs = QUESTION_BANK[nodeId];
  if (!qs || qs.length === 0) return null;
  return qs[Math.floor(Math.random() * qs.length)];
}
