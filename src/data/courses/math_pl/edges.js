/** @type {Array<[string, string]>} Directed prerequisite edges: [from_id, to_id] */
export const RAW_EDGES = [
  // ── SP8 foundations ──────────────────────────────────────────
  ["integers",       "linear_eq"],
  ["fractions",      "linear_eq"],
  ["powers",         "linear_eq"],
  ["linear_eq",      "linear_ineq"],
  ["linear_eq",      "linear_sys"],
  ["linear_eq",      "abs_value"],
  ["fractions",      "sequences"],
  ["powers",         "sequences"],

  // ── Geometry SP8 ─────────────────────────────────────────────
  ["thales",         "pythagoras"],
  ["thales",         "trig_basic"],
  ["pythagoras",     "trig_basic"],
  ["pythagoras",     "solid_geom"],
  ["area_perimeter", "solid_geom"],
  ["area_perimeter", "planimetria_lp"],
  ["thales",         "planimetria_lp"],
  ["pythagoras",     "planimetria_lp"],
  ["trig_basic",     "trig_lp"],

  // ── LP algebra ───────────────────────────────────────────────
  ["linear_eq",      "polynomials"],
  ["powers",         "polynomials"],
  ["polynomials",    "rational_expr"],
  ["polynomials",    "factoring"],
  ["factoring",      "quadratic_eq"],
  ["polynomials",    "quadratic_eq"],
  ["quadratic_eq",   "quadratic_ineq"],
  ["quadratic_eq",   "vieta"],
  ["quadratic_eq",   "param_eq"],
  ["quadratic_ineq", "param_eq"],
  ["polynomials",    "poly_roots"],
  ["factoring",      "poly_roots"],
  ["powers",         "log_exp"],
  ["log_exp",        "log_eq"],
  ["log_exp",        "fn_exp"],
  ["log_exp",        "fn_log"],
  ["trig_lp",        "sin_cos_law"],
  ["trig_lp",        "trig_formulas"],
  ["trig_formulas",  "trig_eq"],
  ["sequences",      "arith_geom"],
  ["arith_geom",     "seq_limits"],
  ["arith_geom",     "geo_series"],

  // ── LP functions ─────────────────────────────────────────────
  ["fn_concept",     "fn_linear"],
  ["fn_concept",     "fn_quadratic"],
  ["fn_linear",      "fn_quadratic"],
  ["quadratic_eq",   "fn_quadratic"],
  ["fn_quadratic",   "fn_poly"],
  ["polynomials",    "fn_poly"],
  ["fn_quadratic",   "optimization_lp"],
  ["fn_poly",        "fn_compositions"],
  ["fn_exp",         "fn_compositions"],

  // ── Trig functions (LR) ───────────────────────────────────────
  ["trig_formulas",  "fn_trig"],
  ["trig_eq",        "fn_trig"],

  // ── LP geometry ──────────────────────────────────────────────
  ["linear_sys",     "analytic_geom"],
  ["analytic_geom",  "circle_eq"],
  ["quadratic_eq",   "circle_eq"],
  ["sin_cos_law",    "solid_geom"],
  ["planimetria_lp", "solid_geom"],
  ["trig_lp",        "planimetria_lp"],

  // ── LR geometry ──────────────────────────────────────────────
  ["analytic_geom",  "vectors"],
  ["circle_eq",      "conic_sections"],

  // ── Statistics ───────────────────────────────────────────────
  ["data_basics",    "stat_lp"],
  ["stat_lp",        "probability"],
  ["sets",           "probability"],
  ["counting",       "probability"],
  ["probability",    "cond_prob"],
  ["probability",    "bernoulli"],
  ["cond_prob",      "distributions"],
  ["bernoulli",      "distributions"],

  // ── Logic ────────────────────────────────────────────────────
  ["sets",           "logic_basics"],
  ["logic_basics",   "proof"],
  ["sets",           "proof"],

  // ── Combinatorics ────────────────────────────────────────────
  ["counting",       "permutations"],
  ["counting",       "combinations"],
  ["combinations",   "binom_theorem"],
  ["permutations",   "binom_theorem"],
  ["powers",         "binom_theorem"],

  // ── LR calculus ──────────────────────────────────────────────
  ["fn_poly",        "limits"],
  ["fn_exp",         "limits"],
  ["fn_log",         "limits"],
  ["fn_trig",        "limits"],
  ["seq_limits",     "limits"],
  ["limits",         "derivative"],
  ["derivative",     "deriv_apps"],
  ["optimization_lp","deriv_apps"],

  // ── UNIV extensions ──────────────────────────────────────────
  ["quadratic_eq",   "complex"],
  ["poly_roots",     "complex"],
  ["derivative",     "integral"],
];
