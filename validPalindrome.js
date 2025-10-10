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
      console.log(`${s[left]} is not alphanumeric, moving left pointer from index ${left} to ${left + 1}`);
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      console.log(`${s[right]} is not alphanumeric, moving right pointer from index ${right} to ${right - 1}`);
      right--;
    }

    // Compare lowercase versions
    console.log(`Comparing ${s[left]} and ${s[right]}`);
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      console.log('Characters not equal');
      return false;
    }

    left++;
    right--;

    console.log(`Left pointer is now at index ${left}${left < s.length ? `, character: ${s[left]}` : ''}`);
    console.log(`Right pointer is now at index ${right}${right >= 0 ? `, character: ${s[right]}` : ''}`);
    console.log('----');
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
