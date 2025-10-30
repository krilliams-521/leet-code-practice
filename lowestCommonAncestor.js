function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};

const root1 = new TreeNode(6);
root1.left = new TreeNode(2);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(0);
root1.left.right = new TreeNode(4);
root1.left.right.left = new TreeNode(3);
root1.left.right.right = new TreeNode(5);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(9);

console.log(
  // Find LCA of nodes 2 and 8
  lowestCommonAncestor(root1, root1.left, root1.right).val
); // Output: 6

console.log(
  // Find LCA of nodes 2 and 4
  lowestCommonAncestor(root1, root1.left, root1.left.right).val
); // Output: 2

// Output tree structure:
//        6
//      /   \
//     2     8
//    / \   / \
//   0   4 7   9
//      / \
//     3   5