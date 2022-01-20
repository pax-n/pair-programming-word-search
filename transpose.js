const transpose = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const newGrid = [];
  for (let j = 0; j < cols; j++) {
    newGrid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newGrid[j][i] = matrix[i][j]
    }
  }
  return newGrid;
}

// console.log(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

module.exports = transpose;