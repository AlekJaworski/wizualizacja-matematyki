/**
 * phys — General Relativity learning path (English).
 *
 * Companion to the math_pl curriculum. Hidden from the main hero screen for now.
 * Reachable via `?course=phys`, `pathname=/phys/...`, or the static `public/phys/index.html` redirect.
 *
 * Sister design doc: ObsidianVault/Projects/oczochodzi-fizyka/oczochodzi-fizyka - GR learning path.md
 */

import { buildNodes, buildQuestionBank } from "../../courseLoader.js";
export { RAW_EDGES } from "./edges.js";
export { SECTIONS, SCOPE_COLORS, SCOPE_LABELS } from "./sections.js";

export const COURSE_META = {
  id:          "phys",
  subject:     "physics",
  title:       "General Relativity — learning path",
  titleEn:     "General Relativity — learning path",
  description: "Foundation chunks → SR → differential geometry → GR. Two exits: read-Wikipedia-without-panic, and compute-Christoffels-for-Schwarzschild.",
  descriptionEn: "Foundation chunks → SR → differential geometry → GR. Two exits: read-Wikipedia-without-panic, and compute-Christoffels-for-Schwarzschild.",
  lang:        "en",
  icon:        "G",
  color:       "#e74c3c",
};

const nodeFiles = import.meta.glob(
  "./nodes/*/node.md",
  { eager: true, query: "?raw", import: "default" }
);

export const RAW_NODES = buildNodes(
  nodeFiles,
  /\.\/nodes\/([^/]+)\/node\.md$/,
  COURSE_META.lang
);

const questionFiles = import.meta.glob(
  "./nodes/*/questions/*.md",
  { eager: true, query: "?raw", import: "default" }
);

export const QUESTION_BANK = buildQuestionBank(
  questionFiles,
  /\.\/nodes\/([^/]+)\/questions\//,
  COURSE_META.lang
);
