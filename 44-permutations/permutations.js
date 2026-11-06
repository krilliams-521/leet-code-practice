/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const results = [];
  const currentPermutation = [];
  const used = new Array(nums.length).fill(false);

  function backtrack() {
    // A complete permutation contains every number
    if (currentPermutation.length === nums.length) {
      results.push([...currentPermutation]);
      return;
    }

    for (let index = 0; index < nums.length; index++) {
      // Skip numbers already in the current permutation
      if (used[index]) {
        continue;
      }

      // Choose this number
      currentPermutation.push(nums[index]);
      used[index] = true;

      // Explore the next position
      backtrack();

      // Undo the choice
      currentPermutation.pop();
      used[index] = false;
    }
  }

  backtrack();
  return results;
};

console.log(permute([1, 2, 3]));
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

console.log(permute([0, 1]));
// [[0, 1], [1, 0]]

console.log(permute([1]));
// [[1]]