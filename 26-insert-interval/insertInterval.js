/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let inserted = false;

  for (const interval of intervals) {

    // new interval comes after current interval
    if (newInterval[0] > interval[1]) {
      result.push(interval);
    }

    // new interval comes before current interval
    else if (newInterval[1] < interval[0]) {

      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }

      result.push(interval);
    }

    // overlap
    else {
      newInterval[0] = Math.min(
        interval[0],
        newInterval[0]
      );

      newInterval[1] = Math.max(
        interval[1],
        newInterval[1]
      );
    }
  }

  if (!inserted) {
    result.push(newInterval);
  }

  return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5])) // [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // [[1,2],[3,10],[12,16]]