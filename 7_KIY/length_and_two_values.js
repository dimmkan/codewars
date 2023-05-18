/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/

const alternate = (n, firstValue, secondValue) => Array.from({length: n}, (v, i) => i%2 ? secondValue : firstValue);