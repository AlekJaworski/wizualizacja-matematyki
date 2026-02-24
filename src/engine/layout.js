/**
 * Re-exports for backwards compatibility.
 * New code should import directly from:
 *   src/engine/ranks.js
 *   src/engine/layouts/index.js
 *   src/engine/layouts/<name>.js
 */
export { computeRanks }          from "./ranks.js";
export { apply as topoRankLayout } from "./layouts/topoRank.js";
export { apply as spectralInit }   from "./layouts/spectral.js";
