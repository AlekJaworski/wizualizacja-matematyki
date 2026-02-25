/**
 * math_pl — Polish high school mathematics curriculum (Podstawa Programowa).
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
  id:          "math_pl",
  subject:     "mathematics",
  title:       "Matematyka — Podstawa Programowa",
  titleEn:     "Mathematics — Polish National Curriculum",
  description: "Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",
  descriptionEn: "Full Polish mathematics curriculum: primary school year 8 through university/IB level.",
  lang:        "pl",   // primary language of content
  icon:        "∑",
  color:       "#4a9eff",
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
