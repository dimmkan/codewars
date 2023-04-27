/**
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 */

const removeEveryOther = arr => arr.filter((item, index) => {if(!~~(index%2)) {return item} }) 

//Optimize
// const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));