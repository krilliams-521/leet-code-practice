// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (let char of s) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aacc', 'ccac')); // false
// console.log(isAnagram('a', 'ab')); // false
// console.log(isAnagram('aacc', 'ccac')); // false
// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'billion')); // false