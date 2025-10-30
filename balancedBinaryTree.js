function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function checkBalance(node) {
    if (!node) return 0; // height = 0

    const left = checkBalance(node.left);
    if (left === -1) return -1; // left subtree not balanced

    const right = checkBalance(node.right);
    if (right === -1) return -1; // right subtree not balanced

    if (Math.abs(left - right) > 1) return -1; // current node not balanced

    return 1 + Math.max(left, right); // return height if balanced
  }

  return checkBalance(root) !== -1;
};

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
console.log(isBalanced(root1)); // true

// tree structure:
//        1
//      /   \
//     2     3
//    / \
//   4   5

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.left.left = new TreeNode(4);
console.log(isBalanced(root2)); // false

// tree structure:
//        1
//      /
//     2
//    /
//   3
//  /
// 4 