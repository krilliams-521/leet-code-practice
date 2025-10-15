/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};


const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(invertTree(root));

// The tree structure before inversion:
//       4
//      / \
//     2   7
//    / \ / \
//   1  3 6  9

// The tree structure after inversion:
//       4
//      / \
//     7   2
//    / \ / \
//   9  6 3  1