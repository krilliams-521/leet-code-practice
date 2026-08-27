/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

  // Build adjacency list
  const graph = Array.from({ length: numCourses }, () => []);

  for (let [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  // 0 = unvisited
  // 1 = currently visiting
  // 2 = completely visited
  const state = new Array(numCourses).fill(0);

  function dfs(course) {

    // We found a course currently being explored.
    // That means there is a cycle.
    if (state[course] === 1) {
      return false;
    }

    // Already completely explored.
    if (state[course] === 2) {
      return true;
    }

    // Mark as currently visiting
    state[course] = 1;

    // Visit all courses that depend on this course
    for (let nextCourse of graph[course]) {
      if (!dfs(nextCourse)) {
        return false;
      }
    }

    // Finished exploring this course
    state[course] = 2;

    return true;
  }

  // Check every course because the graph may be disconnected
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false