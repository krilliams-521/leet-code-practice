/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;

  const queue = [];
  let freshOranges = 0;
  let minutesElapsed = 0;

  // Find all rotten oranges and count fresh oranges
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === 2) {
        queue.push([row, column]);
      } else if (grid[row][column] === 1) {
        freshOranges++;
      }
    }
  }

  let queueHead = 0;

  // Process the queue one minute at a time
  while (queueHead < queue.length && freshOranges > 0) {
    const orangesAtStartOfMinute = queue.length - queueHead;

    for (let index = 0; index < orangesAtStartOfMinute; index++) {
      const [currentRow, currentColumn] = queue[queueHead];
      queueHead++;

      const directions = [
        [-1, 0], // Up
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1]   // Right
      ];

      for (const [rowChange, columnChange] of directions) {
        const neighborRow = currentRow + rowChange;
        const neighborColumn = currentColumn + columnChange;

        // Skip neighbors outside the grid
        if (
          neighborRow < 0 ||
          neighborRow >= rows ||
          neighborColumn < 0 ||
          neighborColumn >= columns
        ) {
          continue;
        }

        // Skip empty cells and already-rotten oranges
        if (grid[neighborRow][neighborColumn] !== 1) {
          continue;
        }

        // This fresh orange now rots
        grid[neighborRow][neighborColumn] = 2;
        freshOranges--;

        // It can spread rot during the next minute
        queue.push([neighborRow, neighborColumn]);
      }
    }

    // One complete layer of BFS represents one minute
    minutesElapsed++;
  }

  // Return -1 if any fresh oranges cannot rot
  return freshOranges === 0 ? minutesElapsed : -1;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // -1
console.log(orangesRotting([[0, 2]])); // 0