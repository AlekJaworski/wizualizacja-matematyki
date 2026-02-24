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
 * Pick the most informative next question using Expected Resolution Value (ERV).
 *
 * ERV = P(correct) × ancestors_resolved + P(incorrect) × descendants_resolved
 *
 * Where:
 *   - ancestors_resolved = unclassified ancestors that would become "known" if correct
 *   - descendants_resolved = unclassified descendants that would become "unknown" if incorrect
 *
 * P(correct) is estimated via Bayesian update: (correct + 0.5) / (total + 1)
 * A wrong answer on a high-degree root node is very valuable (removes many nodes).
 * A correct answer on a leaf node removes few nodes.
 *
 * @param {Array<{id:string}>} nodes
 * @param {Record<string,"known"|"unknown">} belief
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @param {number} pCorrect - Bayesian P(correct) estimate
 * @returns {string|null}
 */
export function pickNextQuestion(nodes, belief, adjacency, pCorrect = 0.5) {
  const pIncorrect = 1 - pCorrect;

  // Candidates: unclassified nodes within the active DAG
  const candidates = nodes.filter(
    n => belief[n.id] !== "known" && belief[n.id] !== "unknown"
  );

  if (candidates.length === 0) return null;

  // For each candidate, compute ERV
  const scored = candidates.map(n => {
    // Count unclassified ancestors that would become known if correct
    const ancestorsToReveal = countAncestorsToReveal(n.id, belief, adjacency);

    // Count unclassified descendants that would become unknown if incorrect
    const descendantsToReveal = countDescendantsToReveal(n.id, belief, adjacency);

    // ERV = P(correct) × ancestors + P(incorrect) × descendants
    const erv = pCorrect * ancestorsToReveal + pIncorrect * descendantsToReveal;

    return { id: n.id, erv, ancestorsToReveal, descendantsToReveal };
  });

  // Sort by ERV descending (highest expected resolution value)
  scored.sort((a, b) => b.erv - a.erv);

  return scored[0].id;
}

/**
 * Count unclassified ancestors that would become "known" if this node is answered correctly.
 * Only counts ancestors that aren't already known.
 */
function countAncestorsToReveal(nodeId, belief, adjacency) {
  const visited = new Set();
  const queue = [...(adjacency.prereqs[nodeId] ?? [])];
  let count = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);

    // Only count if it's currently unclassified
    if (belief[cur] !== "known" && belief[cur] !== "unknown") {
      count++;
    }

    // Continue BFS upward
    const parents = adjacency.prereqs[cur] ?? [];
    for (const p of parents) {
      if (!visited.has(p)) queue.push(p);
    }
  }

  return count;
}

/**
 * Count unclassified descendants that would become "unknown" if this node is answered incorrectly.
 * Only counts descendants that aren't already unknown.
 */
function countDescendantsToReveal(nodeId, belief, adjacency) {
  const visited = new Set();
  const queue = [...(adjacency.dependents[nodeId] ?? [])];
  let count = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);

    // Only count if it's currently unclassified
    if (belief[cur] !== "known" && belief[cur] !== "unknown") {
      count++;
    }

    // Continue BFS downward
    const children = adjacency.dependents[cur] ?? [];
    for (const c of children) {
      if (!visited.has(c)) queue.push(c);
    }
  }

  return count;
}

/**
 * Estimate expected number of questions remaining to fully classify the graph.
 *
 * Uses a recursive approximation:
 * - For each unclassified node, compute its ERV
 * - Expected remaining ≈ (total_unclassified_nodes²) / (sum of all ERVs)
 *
 * Why? Each question, on average, resolves roughly (ERV) nodes.
 * If we have N nodes and each answer resolves R nodes on average, we need ~N/R questions.
 * We weight by P(outcome) to favor nodes with high info value.
 *
 * Returns null if session is complete (no unclassified nodes).
 */
export function estimateRemainingQuestions(nodes, belief, adjacency, pCorrect = 0.5) {
  const candidates = nodes.filter(
    n => belief[n.id] !== "known" && belief[n.id] !== "unknown"
  );

  if (candidates.length === 0) return 0;

  // Compute ERV for each candidate
  const pIncorrect = 1 - pCorrect;
  let totalERV = 0;

  for (const n of candidates) {
    const ancestors = countAncestorsToReveal(n.id, belief, adjacency);
    const descendants = countDescendantsToReveal(n.id, belief, adjacency);
    const erv = pCorrect * ancestors + pIncorrect * descendants;
    totalERV += erv;
  }

  if (totalERV === 0) return candidates.length; // Fallback

  // Rough heuristic: N² / total_ERV
  // Why N²? Because each question removes from consideration both the node
  // and some of its connected nodes, reducing future options.
  const n = candidates.length;
  const estimate = (n * n) / totalERV;

  return Math.ceil(estimate);
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
