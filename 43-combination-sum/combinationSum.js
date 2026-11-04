/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];
  const currentCombination = [];

  function backtrack(startIndex, remainingTarget) {
    // Found a valid combination
    if (remainingTarget === 0) {
      results.push([...currentCombination]);
      return;
    }

    // Try each candidate from the current starting index
    for (let index = startIndex; index < candidates.length; index++) {
      const candidate = candidates[index];

      // This candidate is too large
      if (candidate > remainingTarget) {
        continue;
      }

      // Choose the candidate
      currentCombination.push(candidate);

      // Reuse the same candidate if needed
      backtrack(index, remainingTarget - candidate);

      // Undo the choice before trying another candidate
      currentCombination.pop();
    }
  }

  backtrack(0, target);
  return results;
};

console.log(combinationSum([2, 3, 6, 7], 7));
// [[2,2,3], [7]]

console.log(combinationSum([2, 3, 5], 8));
// [[2,2,2,2], [2,3,3], [3,5]]

console.log(combinationSum([2], 1));
// []
