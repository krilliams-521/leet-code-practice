/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  let firstStep = 1;
  let secondStep = 2;
  for (let i = 3; i <= n; i++) {
    let thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }
  return secondStep;
};

console.log(climbStairs(1)); // Output: 1
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(5)); // Output: 8