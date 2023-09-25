/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

const sumNoDuplicates = numList => numList.filter((item, _, array) => {
  return array.filter(i => i === item).length === 1;
}).reduce((acc, item) => acc+item, 0);