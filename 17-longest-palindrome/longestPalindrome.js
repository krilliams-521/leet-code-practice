/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let length = 0;
  let hasOdd = false;

  for (let key in freq) {
    length += Math.floor(freq[key] / 2) * 2;
    if (freq[key] % 2 === 1) hasOdd = true;
  }

  if (hasOdd) length += 1;

  return length;
};

console.log(longestPalindrome("abccccdd")); // Output: 7
console.log(longestPalindrome("a")); // Output: 1
console.log(longestPalindrome("bb")); // Output: 2
console.log(longestPalindrome("AaBbCc")); // Output: 1 (case-sensitive)
console.log(longestPalindrome("")); // Output: 0
console.log(longestPalindrome("abcde")); // Output: 1