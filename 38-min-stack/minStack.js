var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    this.minStack.push(
      Math.min(val, this.minStack[this.minStack.length - 1])
    );
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};


// Example 1
const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3

minStack.pop();

console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2