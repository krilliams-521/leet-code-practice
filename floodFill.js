/**
 * @param {number[][]} imageGrid - 2D grid representing the image pixels
 * @param {number} startRow - starting row index
 * @param {number} startCol - starting column index
 * @param {number} newColor - new color to apply
 * @return {number[][]}
 */
var floodFill = function (imageGrid, startRow, startCol, newColor) {
  const originalColor = imageGrid[startRow][startCol];
  if (originalColor === newColor) return imageGrid; // no need to recolor

  function fill(row, col) {
    // stop if out of bounds or pixel isn't the original color
    if (
      row < 0 || // top boundary
      col < 0 || // left boundary
      row >= imageGrid.length || // bottom boundary
      col >= imageGrid[0].length || // right boundary
      imageGrid[row][col] !== originalColor // different color so don't fill
    ) {
      return;
    }

    // fill with the new color
    imageGrid[row][col] = newColor;

    // recursively fill neighbors (up, down, left, right)
    fill(row + 1, col); // down
    fill(row - 1, col); // up
    fill(row, col + 1); // right
    fill(row, col - 1); // left
  }

  fill(startRow, startCol);
  return imageGrid;
};


console.log(floodFill([
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]], 1, 1, 2));
// Output: [
// [2,2,2],
// [2,2,0],
// [2,0,1]]


console.log(floodFill([
  [0, 0, 0],
  [0, 1, 1]], 1, 1, 1));
// Output: [
// [0,0,0],
// [0,1,1]]

console.log(floodFill([
  [0, 0, 0],
  [0, 0, 0]], 0, 0, 2));
// Output: [
// [2,2,2],
// [2,2,2]]