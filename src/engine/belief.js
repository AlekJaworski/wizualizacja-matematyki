/**
 * Belief propagation for the diagnostic mode.
 *
 * belief is a plain object mapping node id → "known" | "unknown".
 * Nodes with no entry are "unclassified".
 *
 * The active DAG is the full graph with all unknown nodes (and their
 * descendants, which are also marked unknown by propagation) removed.
 * The algorithm only operates within this pruned graph.
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
 * Unknown nodes are effectively removed from the active DAG — the algorithm
 * will never ask about them or their descendants again.
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
 * Compute the learning frontier within the active DAG.
 * Frontier = unclassified nodes whose every prerequisite is known.
 * Unknown nodes are excluded (they are outside the active DAG).
 * @param {Array<{id:string}>} nodes
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ prereqs: Record<string,string[]> }} adjacency
 * @returns {string[]} array of frontier node ids
 */
export function computeFrontier(nodes, belief, adjacency) {
  return nodes
    .filter(n => belief[n.id] !== "known" && belief[n.id] !== "unknown")
    .filter(n => (adjacency.prereqs[n.id] ?? []).every(p => belief[p] === "known"))
    .map(n => n.id);
}

/**
 * Pick the most informative next question from the active (pruned) DAG.
 *
 * Active DAG = full graph minus all unknown nodes and their descendants
 * (descendants are already marked unknown by propagateUnknown).
 *
 * Scoring: degree within the pruned graph only.
 *   - prereq edges to unknown nodes don't count (those nodes are gone)
 *   - dependent edges to unknown nodes don't count
 * A high-degree node, when answered:
 *   - Correct  → propagateKnown marks all ancestors known (big upward sweep)
 *   - Incorrect → propagateUnknown removes it and all descendants from the DAG
 * Either way, one answer resolves the maximum number of remaining nodes.
 *
 * Returns null when the active DAG is fully classified (session complete).
 *
 * @param {Array<{id:string}>} nodes
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @returns {string|null}
 */
export function pickNextQuestion(nodes, belief, adjacency) {
  // Active DAG: nodes that are not unknown (includes known + unclassified)
  const activeIds = new Set(
    nodes.filter(n => belief[n.id] !== "unknown").map(n => n.id)
  );

  // Candidates: unclassified nodes within the active DAG
  const candidates = nodes.filter(
    n => belief[n.id] !== "known" && belief[n.id] !== "unknown"
  );

  if (candidates.length === 0) return null;

  // Degree within pruned graph: only count edges to other active nodes
  const scored = candidates.map(n => {
    const prereqDeg   = (adjacency.prereqs[n.id]   ?? []).filter(p => activeIds.has(p)).length;
    const dependDeg   = (adjacency.dependents[n.id] ?? []).filter(d => activeIds.has(d)).length;
    return { id: n.id, score: prereqDeg + dependDeg };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0].id;
}

/**
 * Check whether the diagnostic session is complete.
 * Complete = no unclassified nodes remain in the active DAG.
 * (Every node is either known, unknown, or blocked by an unknown ancestor —
 * but blocked nodes are themselves marked unknown by propagateUnknown, so
 * "no unclassified nodes" is the exact right check.)
 *
 * @param {Array<{id:string}>} nodes
 * @param {Record<string,"known"|"unknown">} belief
 * @returns {boolean}
 */
export function isSessionComplete(nodes, belief) {
  return nodes.every(n => belief[n.id] === "known" || belief[n.id] === "unknown");
}
