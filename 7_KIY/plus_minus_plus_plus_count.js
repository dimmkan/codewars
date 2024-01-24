/*
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;
*/

const catchSignChange = arr => arr.reduce((acc, item, idx, a) => (item >= 0 && a[idx + 1] < 0) || (item < 0 && a[idx + 1] >= 0) ? acc + 1 : acc, 0); 