// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {

  let oldToNew = new Map();

  function dfs(node) {
    if (!node) return null;

    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    let copy = new _Node(node.val);
    oldToNew.set(node, copy);

    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return dfs(node);
};


// --------------------------------------------------
// Build graph from LeetCode-style adjacency list
// --------------------------------------------------

const adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3]
];

// Create the nodes
const nodes = adjList.map((_, index) => {
  return new _Node(index + 1);
});

// Connect the nodes
for (let i = 0; i < adjList.length; i++) {
  for (let neighbor of adjList[i]) {
    nodes[i].neighbors.push(nodes[neighbor - 1]);
  }
}

const originalGraph = nodes[0];


// --------------------------------------------------
// Clone the graph
// --------------------------------------------------

const clonedGraph = cloneGraph(originalGraph);


// --------------------------------------------------
// Print graph in adjacency-list format
// --------------------------------------------------

function graphToAdjList(node) {
  if (!node) return [];

  const visited = new Set();
  const result = [];

  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    result[current.val - 1] = current.neighbors.map(
      neighbor => neighbor.val
    );

    for (let neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}


console.log("Original:");
console.log(graphToAdjList(originalGraph));

console.log("Clone:");
console.log(graphToAdjList(clonedGraph));

console.log(
  "Same object?",
  originalGraph === clonedGraph
);