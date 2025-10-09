/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];

    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // check if closing bracket
        if (char in map) {
            // check for matching opening bracket
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        // if opening bracket, push to the stack
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// run this with some test cases
console.log(isValid("()"));         // Output: true
console.log(isValid("()[]{}"));     // Output: true
console.log(isValid("(]"));         // Output: false
console.log(isValid("([)]"));       // Output: false
console.log(isValid("{[]}"));       // Output: true