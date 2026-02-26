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
 * Handle answer with weighted tests.
 * - Correct: mark tested topics as known, propagate to ancestors (prerequisites)
 * - Wrong: mark tested topics as unknown, propagate to descendants (dependents)
 * 
 * @param {string} id - the node that was asked about
 * @param {boolean} correct - whether the answer was correct
 * @param {Record<string,number>} tests - { topicId: weight } from the question
 * @param {Record<string,"known"|"unknown">} belief - current belief
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @returns {Record<string,"known"|"unknown">}
 */
export function propagateWithTests(id, correct, tests, belief, adjacency) {
  let result = { ...belief };
  
  if (correct) {
    // Mark all tested topics as known
    for (const topicId of Object.keys(tests)) {
      result[topicId] = "known";
    }
    // Propagate to ancestors (prerequisites) - if you know A, you likely know its prereqs
    for (const topicId of Object.keys(tests)) {
      result = propagateKnown(topicId, result, adjacency);
    }
  } else {
    // Mark all tested topics as unknown
    for (const topicId of Object.keys(tests)) {
      result[topicId] = "unknown";
    }
    // Propagate to descendants (dependents) - if you don't know A, you likely don't know what depends on it
    for (const topicId of Object.keys(tests)) {
      result = propagateUnknown(topicId, result, adjacency);
    }
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
  try {
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

      return { id: n.id, erv: erv || 0, ancestorsToReveal, descendantsToReveal };
    });

    // Sort by ERV descending (highest expected resolution value)
    scored.sort((a, b) => b.erv - a.erv);

    const result = scored[0]?.id;
    return result || candidates[0]?.id || null;
  } catch (e) {
    console.error("pickNextQuestion error:", e);
    // Fallback: return first unclassified node
    const candidates = nodes.filter(
      n => belief[n.id] !== "known" && belief[n.id] !== "unknown"
    );
    return candidates[0]?.id || null;
  }
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
  try {
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
      totalERV += (erv || 0);
    }

    if (!totalERV || totalERV === 0) return candidates.length; // Fallback

    // Rough heuristic: N² / total_ERV
    // Why N²? Because each question removes from consideration both the node
    // and some of its connected nodes, reducing future options.
    const n = candidates.length;
    const estimate = (n * n) / totalERV;

    return isNaN(estimate) ? candidates.length : Math.ceil(estimate);
  } catch (e) {
    console.error("estimateRemainingQuestions error:", e);
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Deep-Dive mode: Beta distribution belief engine
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Update Beta belief states given a question answer.
 *
 * Each question has a `tests` map: { nodeId: weight, ... }
 * A correct answer increments alpha for each tested node by its weight.
 * A wrong answer increments beta for each tested node by its weight.
 *
 * @param {Record<string,{alpha:number,beta:number}>} betaBeliefs  current state
 * @param {Record<string,number>} tests   question's tests map (nodeId → weight)
 * @param {boolean} correct
 * @returns {Record<string,{alpha:number,beta:number}>} new state (immutable update)
 */
export function updateBetaBelief(betaBeliefs, tests, correct) {
  const result = { ...betaBeliefs };
  for (const [nodeId, weight] of Object.entries(tests)) {
    const prev = result[nodeId] ?? { alpha: 1, beta: 1 }; // prior Beta(1,1)
    result[nodeId] = {
      alpha: prev.alpha + (correct ? weight : 0),
      beta:  prev.beta  + (correct ? 0 : weight),
    };
  }
  return result;
}

/**
 * Classify nodes based on their Beta belief state.
 *
 * Mean of Beta(alpha, beta) = alpha / (alpha + beta)
 * Strength = alpha + beta (how many pseudo-observations we have)
 *
 * Classification thresholds (strength > 2 required to avoid premature classification):
 *   mean > 0.75 AND strength > 2  → "known"
 *   mean < 0.25 AND strength > 2  → "unknown"
 *   otherwise                     → "uncertain"
 *
 * @param {string[]} nodeIds
 * @param {Record<string,{alpha:number,beta:number}>} betaBeliefs
 * @returns {Record<string, "known"|"unknown"|"uncertain">}
 */
export function classifyNodes(nodeIds, betaBeliefs) {
  const result = {};
  for (const id of nodeIds) {
    const b = betaBeliefs[id] ?? { alpha: 1, beta: 1 };
    const strength = b.alpha + b.beta;
    const mean = b.alpha / strength;

    if (mean > 0.75 && strength > 2) {
      result[id] = "known";
    } else if (mean < 0.25 && strength > 2) {
      result[id] = "unknown";
    } else {
      result[id] = "uncertain";
    }
  }
  return result;
}

/**
 * Compute the subgraph of transitive prerequisites for a target node.
 * Returns all node ids that must be classified before the target can be mastered,
 * including the target itself.
 *
 * @param {string} targetId
 * @param {{ prereqs: Record<string,string[]> }} adjacency
 * @param {Array<{id:string}>} nodes
 * @returns {Set<string>}
 */
export function computeSubgraph(targetId, adjacency, nodes) {
  const subgraph = new Set();
  const nodeSet = new Set(nodes.map(n => n.id));
  const queue = [targetId];
  while (queue.length) {
    const cur = queue.shift();
    if (subgraph.has(cur)) continue;
    if (!nodeSet.has(cur)) continue;
    subgraph.add(cur);
    for (const prereq of (adjacency.prereqs[cur] ?? [])) {
      if (!subgraph.has(prereq)) queue.push(prereq);
    }
  }
  return subgraph;
}

/**
 * Pick the next best question for the deep-dive session.
 *
 * Selects from the question pool (all questions whose node is in the subgraph)
 * preferring questions that test nodes currently "uncertain" with low strength
 * (i.e., least information gathered about that node so far).
 *
 * Among uncertain nodes, picks the one with:
 *   - highest ERV score (using Beta mean as pCorrect estimate)
 *   - tie-break: lowest strength (needs more evidence)
 *
 * @param {string[]} subgraphIds - node ids in the subgraph
 * @param {Record<string,{alpha:number,beta:number}>} betaBeliefs
 * @param {Record<string,"known"|"unknown"|"uncertain">} classification
 * @param {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }} adjacency
 * @param {Array<{id:string}>} allNodes
 * @returns {string|null} node id to ask next, or null if all classified
 */
export function pickNextQuestionForSubgraph(subgraphIds, betaBeliefs, classification, adjacency, allNodes) {
  // Only ask about uncertain nodes in the subgraph
  const uncertain = subgraphIds.filter(id => classification[id] === "uncertain");
  if (uncertain.length === 0) return null;

  // Score each uncertain node: prefer low-strength + high ERV within subgraph
  const scored = uncertain.map(id => {
    const b = betaBeliefs[id] ?? { alpha: 1, beta: 1 };
    const strength = b.alpha + b.beta;
    const pC = b.alpha / strength; // Beta mean as P(correct)
    const pI = 1 - pC;

    // ERV restricted to subgraph: only count ancestors/descendants within subgraph
    const subgraphSet = new Set(subgraphIds);

    let ancestorsToReveal = 0;
    const aQueue = [...(adjacency.prereqs[id] ?? [])];
    const aVisited = new Set();
    while (aQueue.length) {
      const cur = aQueue.shift();
      if (aVisited.has(cur)) continue;
      aVisited.add(cur);
      if (subgraphSet.has(cur) && classification[cur] === "uncertain") {
        ancestorsToReveal++;
      }
      for (const p of (adjacency.prereqs[cur] ?? [])) {
        if (!aVisited.has(p)) aQueue.push(p);
      }
    }

    let descendantsToReveal = 0;
    const dQueue = [...(adjacency.dependents[id] ?? [])];
    const dVisited = new Set();
    while (dQueue.length) {
      const cur = dQueue.shift();
      if (dVisited.has(cur)) continue;
      dVisited.add(cur);
      if (subgraphSet.has(cur) && classification[cur] === "uncertain") {
        descendantsToReveal++;
      }
      for (const d of (adjacency.dependents[cur] ?? [])) {
        if (!dVisited.has(d)) dQueue.push(d);
      }
    }

    const erv = pC * ancestorsToReveal + pI * descendantsToReveal;
    return { id, erv, strength };
  });

  // Sort: highest ERV first, tie-break by lowest strength
  scored.sort((a, b) => {
    if (Math.abs(a.erv - b.erv) > 0.01) return b.erv - a.erv;
    return a.strength - b.strength;
  });

  return scored[0]?.id ?? uncertain[0];
}

/**
 * Check if all nodes in a subgraph are classified (no "uncertain" remain).
 * @param {string[]} subgraphIds
 * @param {Record<string,"known"|"unknown"|"uncertain">} classification
 * @returns {boolean}
 */
export function isDeepDiveComplete(subgraphIds, classification) {
  return subgraphIds.every(id => classification[id] !== "uncertain");
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
