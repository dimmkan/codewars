/**
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives 

 */

function add(a, b) {
  const n = Math.max(a.length, b.length);
  a = a.padStart(n, 0);
  b = b.padStart(n, 0);
  const result = Array(n);
  let f = 0;

  for (let q = n - 1; ~q; --q) {
    if ((result[q] = f + ~~a[q] + ~~b[q]) > 9) {
      f = 1, result[q] -= 10;
    } else {
      f = 0;
    }
  }
  
  if (f) {
    result.unshift(1);
  }  
  return result.join("");
}

// Optimize

// function add(a, b) {
//   a = a.split('');
//   b = b.split('');
  
//   let carry = 0;
//   let sum = [];
//   while (a.length > 0 || b.length > 0 || carry) {
//     let add = ~~a.pop() + ~~b.pop() + carry;
//     sum.unshift(add % 10);
//     carry = ~~(add / 10);
//   }
  
//   return sum.join('');
// }

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));