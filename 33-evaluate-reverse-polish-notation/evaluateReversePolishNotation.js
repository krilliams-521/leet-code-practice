/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

  let stack = [];

  for (let token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const b = stack.pop();
      const a = stack.pop();
      if (token === '+') stack.push(a + b);
      if (token === '-') stack.push(a - b);
      if (token === '*') stack.push(a * b);
      if (token === '/') stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop();

};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4','13','5','/','+'])); // 6
console.log(evalRPN(['10','6','9','3','+','-11','*','/','*','17','+','5','+'])); // 22