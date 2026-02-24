/**
 * Build adjacency maps from nodes and edges.
 * @param {Array<{id:string}>} nodes
 * @param {Array<[string,string]>} edges
 * @returns {{ prereqs: Record<string,string[]>, dependents: Record<string,string[]> }}
 */
export function buildAdjacency(nodes, edges) {
  const prereqs = {}, dependents = {};
  nodes.forEach(n => {
    prereqs[n.id] = [];
    dependents[n.id] = [];
  });
  edges.forEach(([from, to]) => {
    prereqs[to]?.push(from);
    dependents[from]?.push(to);
  });
  return { prereqs, dependents };
}
