/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;

  function dfs(row, col) {
    // Stop if out of bounds or not land
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // Mark this land cell as visited
    grid[row][col] = "0";

    // Explore all four directions
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islands++;
        dfs(row, col);
      }
    }
  }

  return islands;
};

// Example 1: Three connected land cells form one island
const grid1 = [
  ["1", "1", "0"],
  ["1", "0", "0"],
  ["0", "0", "0"]
];
console.log("Example 1:", numIslands(grid1)); // 1

// Example 2: Two separate islands
const grid2 = [
  ["1", "1", "0"],
  ["0", "0", "0"],
  ["0", "0", "1"]
];
console.log("Example 2:", numIslands(grid2)); // 2

// Example 3: All land cells are connected
const grid3 = [
  ["1", "1", "1"],
  ["1", "1", "1"],
  ["1", "1", "1"]
];
console.log("Example 3:", numIslands(grid3)); // 1