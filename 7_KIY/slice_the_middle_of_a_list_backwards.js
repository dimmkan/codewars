/*
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/

const reverseMiddle = (array) => array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length / 2) + 1 + (array.length % 2)).reverse(); 