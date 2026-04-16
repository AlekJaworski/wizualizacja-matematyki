/**
 * shareCode.js — encode/decode belief maps as compact URL-safe strings.
 *
 * Format: sorted node IDs mapped to single chars:
 *   0 = unclassified, 1 = known, 2 = unknown
 * Result: 62-char string like "110020011..." that goes in the URL hash.
 *
 * URL: #/results/<code>
 */

// Fixed sorted order — must match across encode/decode.
// If nodes are added, old links gracefully degrade (extra chars ignored, missing = unclassified).
const NODE_ORDER = [
  "abs_value","analytic_geom","area_perimeter","arith_geom","bernoulli",
  "binom_theorem","circle_eq","combinations","complex","cond_prob",
  "conic_sections","counting","data_basics","deriv_apps","derivative",
  "distributions","factoring","fn_compositions","fn_concept","fn_exp",
  "fn_linear","fn_log","fn_poly","fn_quadratic","fn_trig","fractions",
  "geo_series","integers","integral","limits","linear_eq","linear_ineq",
  "linear_sys","log_eq","log_exp","logic_basics","optimization_lp",
  "param_eq","permutations","planimetria_lp","poly_roots","polynomials",
  "powers","probability","proof","pythagoras","quadratic_eq",
  "quadratic_ineq","rational_expr","seq_limits","sequences","sets",
  "sin_cos_law","solid_geom","stat_lp","thales","trig_basic","trig_eq",
  "trig_formulas","trig_lp","vectors","vieta",
];

/**
 * Encode a belief map to a compact string.
 * @param {Record<string,"known"|"unknown">} belief
 * @returns {string} 62-char string of 0/1/2
 */
export function encodeBelief(belief) {
  return NODE_ORDER.map(id => {
    if (belief[id] === "known") return "1";
    if (belief[id] === "unknown") return "2";
    return "0";
  }).join("");
}

/**
 * Decode a compact string back to a belief map.
 * @param {string} code
 * @returns {Record<string,"known"|"unknown">}
 */
export function decodeBelief(code) {
  const belief = {};
  for (let i = 0; i < NODE_ORDER.length && i < code.length; i++) {
    if (code[i] === "1") belief[NODE_ORDER[i]] = "known";
    else if (code[i] === "2") belief[NODE_ORDER[i]] = "unknown";
  }
  return belief;
}
