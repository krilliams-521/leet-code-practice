// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;


  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // search right half
    } else if (nums[mid] > target) {
      right = mid - 1; // search left half
    }

  }

  return -1; // target not found
};


console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Output: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Output: -1
