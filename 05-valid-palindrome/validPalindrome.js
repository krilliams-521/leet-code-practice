/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare lowercase versions
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Helper function
function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
// console.log(isPalindrome('kayak'));
// console.log(isPalindrome(' '));
