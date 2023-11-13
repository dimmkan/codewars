/*
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false
*/

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

const arr2bin = arr => arr.some(el => typeof el != 'number') ? false : dec2bin(arr.reduce((acc, item) => acc + item, 0));