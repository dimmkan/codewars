/*
This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.
*/

const squareUp = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, idx) => idx <= i ? idx + 1 : 0).reverse()).reduce((acc, item) => {
    acc.push(...item);
    return acc;
}, []);