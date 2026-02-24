/**
 * Layout registry.
 *
 * Every layout module exports:
 *   meta   { id: string, label: string }
 *   apply  (nodes, edges, W, H, margin?) → Array<{id,x,y,vx,vy}>
 *
 * To add a new layout: create a file here, import it below, add to LAYOUTS.
 * The UI switcher and simulation both consume LAYOUTS automatically.
 */

import * as spectral  from "./spectral.js";
import * as topoRank  from "./topoRank.js";
import * as nPartite  from "./nPartite.js";

/** Ordered list of all available layouts. */
export const LAYOUTS = [nPartite, topoRank, spectral];

/** Default layout id used on first load. */
export const DEFAULT_LAYOUT_ID = "nPartite";

/**
 * Look up a layout by id.
 * @param {string} id
 * @returns {typeof nPartite}
 */
export function getLayout(id) {
  return LAYOUTS.find(l => l.meta.id === id) ?? nPartite;
}
