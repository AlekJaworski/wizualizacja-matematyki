/**
 * courseLoader.js — shared utilities for course data loading.
 *
 * Each course lives at src/data/courses/<courseId>/ and has its own
 * index.js that does the Vite globs (which must be literal strings).
 *
 * This file provides:
 *  - parseFrontmatter()  — shared YAML-subset parser
 *  - buildQuestionBank() — build the question bank from parsed question files
 *  - buildNodes()        — build RAW_NODES from parsed node files
 *  - getQuestion()       — pick a random non-repeated question for a node
 */

// ── Frontmatter parser ─────────────────────────────────────────────
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw.trim() };

  const yamlBlock = match[1];
  const body      = match[2].trim();
  const meta      = {};

  const lines = yamlBlock.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("  ")) { i++; continue; }

    const kv = line.match(/^(\w+):\s*(.*)/);
    if (!kv) { i++; continue; }

    const key = kv[1];
    let   val = kv[2].trim();

    if (val === "" || val === null) {
      const nextLine = lines[i + 1] ?? "";
      if (nextLine.startsWith("  - ")) {
        const items = [];
        i++;
        while (i < lines.length && lines[i].startsWith("  - ")) {
          let item = lines[i].replace(/^  - /, "").trim();
          item = item.replace(/^["']|["']$/g, "");
          items.push(item);
          i++;
        }
        meta[key] = items.length > 0 ? items : null;
      } else if (nextLine.match(/^  \w+:/)) {
        const map = {};
        i++;
        while (i < lines.length && lines[i].match(/^  \w+:/)) {
          const mapKv = lines[i].match(/^  (\w+):\s*(.*)/);
          if (mapKv) {
            const mKey = mapKv[1];
            let mVal = mapKv[2].trim().replace(/^["']|["']$/g, "");
            map[mKey] = !isNaN(mVal) && mVal !== "" ? Number(mVal) : mVal;
          }
          i++;
        }
        meta[key] = map;
      } else {
        meta[key] = null;
        i++;
      }
    } else {
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

// Split a body on the `<!-- en -->` marker.
// PL is the canonical body; EN follows the marker if present.
// Each side keeps its own `<!-- example -->`, `<!-- mistakes -->`, `<!-- see-also -->`
// structure independently — translators just author the EN side once.
function splitBodyByLang(body) {
  const marker = "<!-- en -->";
  if (!body || !body.includes(marker)) return { bodyPl: body || "", bodyEn: "" };
  const idx = body.indexOf(marker);
  return {
    bodyPl: body.slice(0, idx).trim(),
    bodyEn: body.slice(idx + marker.length).trim(),
  };
}

/**
 * Build RAW_NODES from a Vite glob result of node.md files.
 * @param {Record<string, string>} nodeFiles — result of import.meta.glob
 * @param {RegExp} idPattern — regex with one capture group for the node id
 */
export function buildNodes(nodeFiles, idPattern) {
  return Object.entries(nodeFiles).map(([path, raw]) => {
    const id = path.match(idPattern)?.[1];
    const { meta, body } = parseFrontmatter(raw);
    const { bodyPl, bodyEn } = splitBodyByLang(body);
    return {
      id,
      body:      bodyPl,
      bodyEn:    bodyEn,
      label:     meta.label     ?? id,
      labelPl:   meta.labelPl   ?? meta.label ?? id,
      scope:     meta.scope     ?? "default",
      section:   meta.section   ?? "default",
      level:     meta.level     ?? 1,
      tag:       meta.tag       ?? null,
      x:         meta.x         ?? 0,
      y:         meta.y         ?? 0,
      // Optional array of learning resource objects parsed from pipe-delimited strings:
      // "type|url|titleEn|titlePl"  e.g.  "interactive|derivation.html|Parabola Explorer|Eksplorator paraboli"
      // URLs without "/" are auto-resolved to resources/<nodeId>/<filename>
      resources: Array.isArray(meta.resources)
        ? meta.resources.map(r => {
            if (typeof r !== "string") return null;
            const [type, url, titleEn, titlePl] = r.split("|").map(s => s.trim());
            const resolvedUrl = url && !url.includes("/") && !url.startsWith("http")
              ? `resources/${id}/${url}`
              : url ?? "";
            return { type: type ?? "article", url: resolvedUrl, titleEn: titleEn ?? "", titlePl: titlePl ?? titleEn ?? "" };
          }).filter(Boolean)
        : [],
    };
  });
}

/**
 * Build QUESTION_BANK from a Vite glob result of question files.
 * @param {Record<string, string>} questionFiles
 * @param {RegExp} idPattern — regex with one capture group for the node id
 */
export function buildQuestionBank(questionFiles, idPattern) {
  const bank = {};
  for (const [path, raw] of Object.entries(questionFiles)) {
    const id = path.match(idPattern)?.[1];
    if (!id) continue;

    const { meta, body } = parseFrontmatter(raw);
    const { bodyPl, bodyEn } = splitBodyByLang(body);
    if (!bank[id]) bank[id] = [];
    bank[id].push({
      q:        bodyPl,
      qEn:      bodyEn || null,
      options:  meta.options ?? [],
      optionsEn: Array.isArray(meta.optionsEn) ? meta.optionsEn : null,
      correct:  meta.correct ?? 0,
      hint:     meta.hint    ?? "",
      hintEn:   meta.hintEn  ?? null,
      hints:    Array.isArray(meta.hints) ? meta.hints : (meta.hint ? [meta.hint] : []),
      hintsEn:  Array.isArray(meta.hintsEn) ? meta.hintsEn : null,
      source:   meta.source  ?? null,
      tests:    (meta.tests && typeof meta.tests === "object" && Object.keys(meta.tests).length > 0)
                  ? meta.tests
                  : { [id]: 1.0 },
    });
  }
  return bank;
}

/**
 * Pick the lang-appropriate fields for a question.
 * If EN is incomplete (no qEn or no optionsEn), fall back to PL with `pending: true`.
 */
export function pickQuestionLang(q, lang) {
  if (lang === "en" && q.qEn && q.optionsEn) {
    return {
      ...q,
      q:       q.qEn,
      options: q.optionsEn,
      hint:    q.hintEn ?? q.hint,
      hints:   (q.hintsEn && q.hintsEn.length) ? q.hintsEn : q.hints,
      pending: false,
    };
  }
  return { ...q, pending: lang === "en" };
}

/**
 * Pick the lang-appropriate body for a node.
 * Falls back to PL (with `pending: true`) when EN is missing.
 */
export function pickNodeBodyLang(node, lang) {
  if (lang === "en" && node.bodyEn) {
    return { body: node.bodyEn, pending: false };
  }
  return { body: node.body, pending: lang === "en" };
}

/**
 * Pick a random question for a node, skipping already-answered indices.
 * @param {Record<string, Array>} questionBank
 * @param {string} nodeId
 * @param {number[]} excludeIndices
 */
export function getQuestion(questionBank, nodeId, excludeIndices = [], sourceFilter = null, forceIndex = null) {
  const qs = questionBank[nodeId];
  if (!qs || qs.length === 0) return null;

  // Forced index (used by deep-linked question routes) — bypass filters so a shared URL always resolves.
  if (typeof forceIndex === "number" && qs[forceIndex]) {
    return { ...qs[forceIndex], index: forceIndex };
  }

  // Sentinel -1 means "node was manually classified with no question available".
  // Treat the node as fully exhausted so it won't be re-asked.
  if (excludeIndices.includes(-1)) return null;

  const available = qs
    .map((q, i) => ({ q, i }))
    .filter(({ q, i }) => !excludeIndices.includes(i) && (sourceFilter ? q.source?.startsWith(sourceFilter) : true));

  if (available.length === 0) return null;

  const picked = available[Math.floor(Math.random() * available.length)];
  return { ...picked.q, index: picked.i };
}
