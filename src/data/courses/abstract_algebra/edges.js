/** @type {Array<[string, string]>} Directed prerequisite edges: [from_id, to_id] */
export const RAW_EDGES = [
  // ── Foundations ──────────────────────────────────────────────────
  ["sets_functions",      "relations"],
  ["sets_functions",      "induction"],
  ["sets_functions",      "binary_ops"],
  ["relations",           "binary_ops"],

  // ── Into groups ──────────────────────────────────────────────────
  ["binary_ops",          "groups_intro"],
  ["induction",           "groups_intro"],
  ["groups_intro",        "subgroups"],
  ["groups_intro",        "cyclic_groups"],
  ["subgroups",           "cosets"],
  ["cosets",              "normal_subgroups"],
  ["groups_intro",        "group_homomorphisms"],
  ["group_homomorphisms", "normal_subgroups"],
  ["normal_subgroups",    "iso_theorem"],
  ["cosets",              "iso_theorem"],
  ["groups_intro",        "group_actions"],
  ["group_actions",       "sylow"],
  ["cosets",              "sylow"],

  // ── Into rings ───────────────────────────────────────────────────
  ["groups_intro",        "rings_intro"],
  ["rings_intro",         "ideals"],
  ["rings_intro",         "ring_homomorphisms"],
  ["ideals",              "ring_homomorphisms"],
  ["ring_homomorphisms",  "integral_domains"],
  ["integral_domains",    "poly_rings"],
  ["integral_domains",    "fields_intro"],

  // ── Into fields ──────────────────────────────────────────────────
  ["fields_intro",        "field_extensions"],
  ["poly_rings",          "field_extensions"],
];
