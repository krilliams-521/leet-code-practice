/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

  if (intervals.length === 0) return [];

  // Sort intervals by their starting value
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    // Check if the current interval overlaps with the last merged interval
    if (lastMergedInterval[1] >= currentInterval[0]) {
      // Extend the ending value if necessary
      if (lastMergedInterval[1] < currentInterval[1]) {
        lastMergedInterval[1] = currentInterval[1];
      }
    } else {
      // No overlap, so add the current interval
      merged.push(currentInterval);
    }
  }

  return merged;
};


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// [[1,6],[8,10],[15,18]]

console.log(merge([[1, 4], [4, 5]]));
// [[1,5]]

console.log(merge([[1, 4], [2, 3]]));
// [[1,4]]

console.log(merge([[1, 4]]));
// [[1,4]]