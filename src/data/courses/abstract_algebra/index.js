/**
 * abstract_algebra — Abstract Algebra course (English).
 *
 * This file owns all Vite globs for this course.
 * Globs must be literal strings — they cannot be dynamic.
 *
 * To add a topic:    create nodes/<id>/node.md + questions/01.md
 * To add a question: drop another .md into nodes/<id>/questions/
 */

import { buildNodes, buildQuestionBank } from "../../courseLoader.js";
export { RAW_EDGES } from "./edges.js";
export { SECTIONS, SCOPE_COLORS, SCOPE_LABELS } from "./sections.js";

// ── Course metadata ────────────────────────────────────────────────
export const COURSE_META = {
  id:          "abstract_algebra",
  subject:     "mathematics",
  title:       "Abstract Algebra",
  titleEn:     "Abstract Algebra",
  description: "Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",
  descriptionEn: "Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",
  lang:        "en",   // primary language of content
  icon:        "∘",
  color:       "#2ecc71",
};

// ── Node files (literal glob — do not change to a variable) ───────
const nodeFiles = import.meta.glob(
  "./nodes/*/node.md",
  { eager: true, query: "?raw", import: "default" }
);

export const RAW_NODES = buildNodes(
  nodeFiles,
  /\.\/nodes\/([^/]+)\/node\.md$/
);

// ── Question files ─────────────────────────────────────────────────
const questionFiles = import.meta.glob(
  "./nodes/*/questions/*.md",
  { eager: true, query: "?raw", import: "default" }
);

export const QUESTION_BANK = buildQuestionBank(
  questionFiles,
  /\.\/nodes\/([^/]+)\/questions\//
);
