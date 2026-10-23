/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);


    if (nums[middle] === target) {
      return middle;
    }

    // check if left is sorted
    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // right is sorted
      if (nums[middle] < target && target <= nums[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }

    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0));             // -1
console.log(search([3, 1], 1));           // 1
console.log(search([5, 1, 3], 5));          // 0