/**
 * Course registry — maps courseId → course module.
 *
 * Each course module exports:
 *   RAW_NODES     — array of node objects
 *   RAW_EDGES     — array of [from, to] pairs
 *   SECTIONS      — section colour/label config
 *   SCOPE_COLORS  — scope colour map
 *   SCOPE_LABELS  — scope label map { en, pl }
 *   QUESTION_BANK — { nodeId: [{q, options, correct, hint, tests}] }
 *   COURSE_META   — { id, subject, title, titleEn, description, lang, icon, color }
 *
 * To add a new course: import its index.js and add an entry here.
 */

import * as mathPl          from "./math_pl/index.js";
import * as abstractAlgebra from "./abstract_algebra/index.js";
import * as phys             from "./phys/index.js";

export const COURSES = {
  math_pl:          mathPl,
  abstract_algebra: abstractAlgebra,
  phys:             phys,
};

/** Ordered list of course metadata for the picker UI.
 *  `phys` is intentionally omitted — it's hidden from the main UI for now
 *  and reachable only via `?course=phys`, `/phys/...` path, or the
 *  `public/phys/index.html` static redirect. */
export const COURSE_LIST = [
  mathPl.COURSE_META,
  abstractAlgebra.COURSE_META,
];

export const DEFAULT_COURSE_ID = "math_pl";

/** Determine course from URL — pathname `/phys` or `?course=<id>` query param.
 *  Falls back to DEFAULT_COURSE_ID when nothing matches. */
export function detectCourseId() {
  if (typeof window === "undefined") return DEFAULT_COURSE_ID;
  const url = new URL(window.location.href);
  const queryCourse = url.searchParams.get("course");
  if (queryCourse && COURSES[queryCourse]) return queryCourse;
  if (url.pathname.replace(/\/+$/, "").endsWith("/phys") || url.pathname.includes("/phys/")) return "phys";
  return DEFAULT_COURSE_ID;
}
