
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Find the lowest common ancestor of two nodes.
 */
var lowestCommonAncestor = function (root, p, q) {
  // Base case: reached a leaf or found one of our targets
  if (root === null || root === p || root === q) {
    return root;
  }

  // Search left and right subtrees
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // Both sides found a target, so current node is the LCA
  if (left !== null && right !== null) {
    return root;
  }

  // Otherwise, return whichever side found a target
  return left !== null ? left : right;
};

// Build this tree:
//
//         3
//        / \
//       5   1
//      / \
//     6   2
//        / \
//       7   4

const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(
      2,
      new TreeNode(7),
      new TreeNode(4)
    )
  ),
  new TreeNode(1)
);

// Find the actual node objects for p and q
const p = root.left.left;       // Node 6
const q = root.left.right.right; // Node 4

// Run the solution
const result = lowestCommonAncestor(root, p, q);

console.log("Lowest Common Ancestor:", result.val);
// Expected output: Lowest Common Ancestor: 5
