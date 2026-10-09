function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var isValidBST = function (root) {
  function validate(node, min, max) {
    if (node === null) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return validate(node.left, min, node.val) &&
      validate(node.right, node.val, max);
  }

  return validate(root, -Infinity, Infinity);
};


// Example 1: Valid BST → true
//       8
//      / \
//     3  10
//    / \   \
//   1   6   14

const root1 = new TreeNode(
  8,
  new TreeNode(3, new TreeNode(1), new TreeNode(6)),
  new TreeNode(10, null, new TreeNode(14))
);

console.log('Example 1:', isValidBST(root1));


// Example 2: Invalid BST → false
//       5
//      / \
//     3   8
//        /
//       4
//
// 4 violates the lower bound of 5.

const root2 = new TreeNode(
  5,
  new TreeNode(3),
  new TreeNode(8, new TreeNode(4))
);

console.log('Example 2:', isValidBST(root2));