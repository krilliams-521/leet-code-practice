/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        // Shrink the window until there are no duplicates
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        // Add the new character
        seen.add(s[right]);

        // Update the longest window seen so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3