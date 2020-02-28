let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function diagonalDifference(arr) {
  const firstLineArrLength = arr[0].length;

  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let diagonalDifferenceResult = 0;

  for (let i = 0; i < firstLineArrLength; i++) {
    leftDiagonal += arr[i][i];
  }

  let i = 0;
  let j = firstLineArrLength - 1;
  for (; i < firstLineArrLength && j > -1; i++, j--) {
    rightDiagonal += arr[i][j];
  }

  diagonalDifferenceResult = leftDiagonal - rightDiagonal;

  if (diagonalDifferenceResult < 0) {
    diagonalDifferenceResult = diagonalDifferenceResult * -1;
  }
  return diagonalDifferenceResult;
}
