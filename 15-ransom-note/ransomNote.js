/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};

  for (const char of magazine) {
    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (const char of ransomNote) {
    if (char in map && map[char] > 0) {
      map[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("a", "b")); // Output: false
console.log(canConstruct("aa", "ab")); // Output: false
console.log(canConstruct("aa", "aab")); // Output: true