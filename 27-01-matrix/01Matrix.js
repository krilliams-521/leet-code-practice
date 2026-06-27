/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  const queue = [];

  // Initialize queue with all 0s and mark 1s as Infinity
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] === 0) {
        queue.push([row, col]);
      } else {
        mat[row][col] = Infinity;
      }
    }
  }

  const directions = [
    [1, 0],   // down
    [-1, 0],  // up
    [0, 1],   // right
    [0, -1]   // left
  ];

  let head = 0;

  while (head < queue.length) {
    const [row, col] = queue[head++];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Skip cells outside the matrix
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols
      ) {
        continue;
      }

      // If we've found a shorter path, update it
      if (mat[newRow][newCol] > mat[row][col] + 1) {
        mat[newRow][newCol] = mat[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return mat;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])) // [[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])) // [[0,0,0],[0,1,0],[1,2,1]]