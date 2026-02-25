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

export const COURSES = {
  math_pl:          mathPl,
  abstract_algebra: abstractAlgebra,
};

/** Ordered list of course metadata for the picker UI. */
export const COURSE_LIST = [
  mathPl.COURSE_META,
  abstractAlgebra.COURSE_META,
];

export const DEFAULT_COURSE_ID = "math_pl";
