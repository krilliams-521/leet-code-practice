/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {

    // if current i equals previous i, we skip to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {

      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {

        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // if new left equals the previous left, we skip to avoid duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // if new right equals the previous right, we skip to avoid duplicates
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }

      } else if (sum < 0) {

        left++;

      } else {

        right--;

      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [[0,0,0]]