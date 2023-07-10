/**
 * 
 * Moving Zeros To The End
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 * 
 */

function moveZeros(arr) {
  return arr.reduce((acc, item) => {
    item === 0 ? acc[1].push(item) : acc[0].push(item);
    return acc;
  }, [[],[]]).flat();
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))