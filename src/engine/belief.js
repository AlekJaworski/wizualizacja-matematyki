/**
 * Belief propagation for the diagnostic mode.
 *
 * belief is a plain object mapping node id → "known" | "unknown".
 * Nodes with no entry are "unclassified".
 */

/**
 * Mark a node as known and propagate upward: all prerequisites must also be known.
 * @param {string} id
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ prereqs: Record<string,string[]> }} adjacency
 * @returns {Record<string,"known"|"unknown">}
 */
export function propagateKnown(id, belief, adjacency) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "known") continue;
    result[cur] = "known";
    adjacency.prereqs[cur]?.forEach(p => {
      if (result[p] !== "known") queue.push(p);
    });
  }
  return result;
}

/**
 * Mark a node as unknown and propagate downward: all dependents become unknown.
 * @param {string} id
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ dependents: Record<string,string[]> }} adjacency
 * @returns {Record<string,"known"|"unknown">}
 */
export function propagateUnknown(id, belief, adjacency) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "unknown") continue;
    result[cur] = "unknown";
    adjacency.dependents[cur]?.forEach(d => {
      if (result[d] !== "unknown") queue.push(d);
    });
  }
  return result;
}

/**
 * Compute the learning frontier: unclassified nodes whose every prerequisite is known.
 * @param {Array<{id:string}>} nodes
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ prereqs: Record<string,string[]> }} adjacency
 * @returns {string[]} array of frontier node ids
 */
export function computeFrontier(nodes, belief, adjacency) {
  return nodes
    .filter(n => belief[n.id] !== "known" && belief[n.id] !== "unknown")
    .filter(n => adjacency.prereqs[n.id]?.every(p => belief[p] === "known"))
    .map(n => n.id);
}
