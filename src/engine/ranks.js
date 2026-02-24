/**
 * Topological rank assignment via Kahn's longest-path algorithm.
 *
 * rank[id] = length of the longest prerequisite chain leading to that node.
 * Roots (no prerequisites) get rank 0.
 *
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges  directed [from, to]
 * @returns {Record<string, number>}
 */
export function computeRanks(nodes, edges) {
  const prereqCount = Object.fromEntries(nodes.map(n => [n.id, 0]));
  const dependents  = Object.fromEntries(nodes.map(n => [n.id, []]));

  for (const [from, to] of edges) {
    if (prereqCount[to]  !== undefined) prereqCount[to]++;
    if (dependents[from] !== undefined) dependents[from].push(to);
  }

  const rank  = Object.fromEntries(nodes.map(n => [n.id, 0]));
  const queue = nodes.filter(n => prereqCount[n.id] === 0).map(n => n.id);

  while (queue.length) {
    const cur = queue.shift();
    for (const dep of dependents[cur]) {
      rank[dep] = Math.max(rank[dep], rank[cur] + 1);
      if (--prereqCount[dep] === 0) queue.push(dep);
    }
  }

  return rank;
}
