var TimeMap = function () {
  this.store = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.has(key)) {
    this.store.set(key, []);
  }

  this.store.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.store.has(key)) {
    return '';
  }

  const values = this.store.get(key);

  let left = 0;
  let right = values.length - 1;
  let result = '';

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (values[mid][1] <= timestamp) {
      result = values[mid][0];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

var timeMap = new TimeMap();

timeMap.set("foo", "bar", 1);
timeMap.set("foo", "bar2", 4);
timeMap.set("foo", "bar3", 7);

console.log(timeMap.get("foo", 1));  // "bar"
console.log(timeMap.get("foo", 3));  // "bar"
console.log(timeMap.get("foo", 4));  // "bar2"
console.log(timeMap.get("foo", 5));  // "bar2"
console.log(timeMap.get("foo", 7));  // "bar3"
console.log(timeMap.get("foo", 10)); // "bar3"
console.log(timeMap.get("foo", 0));  // ""
console.log(timeMap.get("missing", 5)); // ""
