/*
Task
Given two positive integers m (width) and n (height), fill a two-dimensional list (or array) of size m-by-n in the following way:

(1) All the elements in the first and last row and column are 1.

(2) All the elements in the second and second-last row and column are 2, excluding the elements from step 1.

(3) All the elements in the third and third-last row and column are 3, excluding the elements from the previous steps.

And so on ...

Examples
Given m = 5, n = 8, your function should return

[[1, 1, 1, 1, 1],
 [1, 2, 2, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1],
 [1, 2, 3, 2, 1], 
 [1, 2, 3, 2, 1],
 [1, 2, 2, 2, 1],
 [1, 1, 1, 1, 1]]
Given m = 10, n = 9, your function should return

[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
Bird mountain generalizes this kata in a fun way.
*/

function createBox(m, n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(Math.min(i, j, n - i - 1, m - j - 1) + 1);
        }
        matrix.push(row);
    }

    return matrix;
}