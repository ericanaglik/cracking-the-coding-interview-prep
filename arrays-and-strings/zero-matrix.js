/***********************************************************
1.8: Zero Matrix - Write an algorithm such that if an
element in an MxN matrix is 0, its entire row and column are
set to 0.
***********************************************************/

/******************** BIG O NOTATION ***********************
zeroMatrix() is O(m*n) where m is the number of rows and n
is the number of columns. If the matrix is a square (all
rows and columns the same size) then zeroMatrix() is O(n^2)
***********************************************************/

function zeroMatrix(matrix){
  // Base Case
  /* If there are no rows and columns, return the original
  matrix.*/
  if(matrix.length === 0){
    return matrix
  /* If there is one row and no columns, return the original
  matrix.*/
  }else if(matrix[0].length === 0){
    return matrix
  }
  // m is the number of rows
  let m = matrix.length
  // n is the number of columns
  let n = matrix[0].length
  /* Create sets to store the indices of the positions where
  0s occur */
  columnsSet = new Set()
  rowsSet = new Set()
  /* Loop through the matrix to find the indices where 0s
  occur so we can add them to their sets */
  for(let [rowIndex, row] of matrix.entries()){
    for(let [colIndex, col] of row.entries()){
      if(col === 0){
        columnsSet.add(colIndex)
        rowsSet.add(rowIndex)
      }
    }
  }
  /* For all rows where 0s occurred, set all elements of the
  row to 0 */
  rowsSet.forEach(rowIndex => {
    for(let i = 0; i < n; i++) {
      matrix[rowIndex][i] = 0
    }
  });
  /* For all columns where 0s occurred, set all elements of
  the column to 0 */
  columnsSet.forEach(colIndex => {
    for(let i = 0; i < m; i++) {
      matrix[i][colIndex] = 0
    }
  });
  // return the matrix with 0s in correct positions
  return matrix
}

// Tests
/* There is one more test that we don't handle that is an
edge case: If all rows are not the same length */
console.log("Problem 1.8 Zero Matrix")
console.log(zeroMatrix([])) // -> returns []
console.log(zeroMatrix([[]])) // -> returns [[]]
console.log(zeroMatrix([
  [1, 2, 3, 0],
  [4, 3, 2, 1],
  [1, 2, 3, 4],
  [1, 0, 2, 3]
])) /* 
-> returns [
  [0, 0, 0, 0],
  [4, 0, 2, 0],
  [1, 0, 3, 0],
  [0, 0, 0, 0]
] */