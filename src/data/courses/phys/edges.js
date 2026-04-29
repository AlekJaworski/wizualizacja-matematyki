/** @type {Array<[string, string]>} Directed prerequisite edges: [from_id, to_id] */
export const RAW_EDGES = [
  // ── Tier 0 foundations into the rest of the graph ──────────────
  ["coordinates_as_labels",  "vectors_as_displacement"],
  ["coordinates_as_labels",  "time_as_coordinate"],
  ["coordinates_as_labels",  "change_of_basis"],
  ["coordinates_as_labels",  "manifold_intuition"],
  ["vectors_as_displacement", "newtons_laws"],
  ["vectors_as_displacement", "four_vectors"],
  ["vectors_as_displacement", "tangent_space"],
  ["derivative_as_rate",     "newtons_laws"],
  ["derivative_as_rate",     "partial_derivatives"],
  ["derivative_as_rate",     "c_invariance"],
  ["force_vs_freefall",      "newtonian_gravity"],
  ["force_vs_freefall",      "equivalence_principle"],
  ["time_as_coordinate",     "c_invariance"],
  ["time_as_coordinate",     "simultaneity"],
  ["time_as_coordinate",     "light_cone"],

  // ── Tier 1 math toolkit ────────────────────────────────────────
  ["multivar_functions",     "partial_derivatives"],
  ["partial_derivatives",    "gradient"],
  ["partial_derivatives",    "christoffel"],
  ["change_of_basis",        "minkowski_metric"],
  ["change_of_basis",        "metric_tensor"],
  ["change_of_basis",        "riemann_curvature"],

  // ── Tier 2 classical ───────────────────────────────────────────
  ["newtons_laws",           "newtonian_gravity"],
  ["newtons_laws",           "lagrangian_intuition"],
  ["newtonian_gravity",      "equivalence_principle"],
  ["newtonian_gravity",      "einstein_field_eq"],
  ["lagrangian_intuition",   "geodesic"],

  // ── Tier 3 SR internal ─────────────────────────────────────────
  ["c_invariance",           "simultaneity"],
  ["c_invariance",           "light_cone"],
  ["simultaneity",           "time_dilation"],
  ["time_dilation",          "length_contraction"],
  ["time_dilation",          "e_mc2"],
  ["four_vectors",           "minkowski_metric"],
  ["four_vectors",           "e_mc2"],
  ["four_vectors",           "stress_energy"],
  ["e_mc2",                  "stress_energy"],

  // ── Tier 4 diff geom internal ──────────────────────────────────
  ["manifold_intuition",     "tangent_space"],
  ["tangent_space",          "metric_tensor"],
  ["tangent_space",          "parallel_transport"],
  ["metric_tensor",          "christoffel"],
  ["christoffel",            "geodesic"],
  ["christoffel",            "parallel_transport"],
  ["parallel_transport",     "riemann_curvature"],
  ["riemann_curvature",      "ricci_and_scalar"],

  // ── SR → diff geom bridge ──────────────────────────────────────
  ["minkowski_metric",       "metric_tensor"],

  // ── Tier 5 GR core ─────────────────────────────────────────────
  ["equivalence_principle",  "einstein_field_eq"],
  ["ricci_and_scalar",       "einstein_field_eq"],
  ["stress_energy",          "einstein_field_eq"],
  ["geodesic",               "einstein_field_eq"],
  ["einstein_field_eq",      "schwarzschild_solution"],
  ["einstein_field_eq",      "flrw_cosmology"],
  ["einstein_field_eq",      "grav_waves"],

  // ── Tier 6 phenomena ───────────────────────────────────────────
  ["schwarzschild_solution", "gps_relativity"],
  ["time_dilation",          "gps_relativity"],
  ["schwarzschild_solution", "light_bending_eclipse"],
  ["schwarzschild_solution", "mercury_perihelion"],
  ["schwarzschild_solution", "black_holes"],
  ["light_cone",             "black_holes"],
];
