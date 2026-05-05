function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {

  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return maxDiameter;

};

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root1)); // Output: 3

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);

console.log(diameterOfBinaryTree(root2)); // Output: 1
