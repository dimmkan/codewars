/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = word => word.split('').reduce((acc, item, index) => {
  if(word.toUpperCase().split('').includes(item)) acc.push(index);
  return acc;
}, []);