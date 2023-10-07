/*
A number is self-descriptive when the n'th digit describes the amount n appears in the number.

Example:

For the number 21200:

There are two 0's in the number, so the first digit is 2.
There is one 1 in the number, so the second digit is 1.
There are two 2's in the number, so the third digit is 2.
There are no 3's in the number, so the fourth digit is 0.
There are no 4's in the number, so the fifth digit is 0.
Numbers can be of any length up to 9 digits and are only full integers. For a given number, derive a function selfDescriptive(num) that returns:

True if the number is self-descriptive
False if the number is not.
*/

const selfDescriptive = num => parseInt(num.toString().split('').reduce((acc, item) => {
  if(acc[+item]) {
    acc[+item]++;
  } else {
    acc[+item] = 1;
  }
  return acc;
}, Array.from({length: num.toString().length}, () => 0)).map(item => item.toString()).join('')) == num;
