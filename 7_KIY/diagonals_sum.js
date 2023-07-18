/*
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] ); 

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/

const sum = matrix => {
  const n = matrix.length;
  let cnt = 0;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++) {
      if(i == j) {
        cnt += matrix[i][j];
      }
      if(i == n - j - 1) {
        cnt += matrix[i][j];
      }
    }
  }
  return cnt;
}