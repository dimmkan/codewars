/**
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
 */


function nextSmaller(n) {
  const n_string = n.toString();
  if (n_string.length === 1) return -1;

  let x_index = n_string.length - 1;
  let y_index = n_string.length - 1;
  const digitArray = n.toString().split('').map(item => ~~item);
  for(let i = digitArray.length - 2; i > -1; i--) {
    if (digitArray[i] > digitArray[i + 1]) {
      x_index = i;
      for(let j = digitArray.length - 1; j > x_index - 1; j--){
        if(digitArray[j] < digitArray[x_index]) {
          y_index = j;
          break;
        }
      }
      break;
    }
  }

  const tmp = digitArray[x_index];
  digitArray[x_index] = digitArray[y_index];
  digitArray[y_index] = tmp;

  const leftDigits = digitArray.slice(0, x_index + 1);
  const rightDigits = digitArray.slice(x_index + 1, digitArray.length).sort((a, b) => b - a);

  const result = Number(leftDigits.concat(rightDigits).join(''));

  return result === n ? -1 : result.toString().length === n_string.length ? result : -1;
}

// Optimize
// const nextSmaller = n => {
//   let min = minify(n);
//   while (--n >= min) if (minify(n) === min) return n;
//   return -1;
// };

// const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');

console.log(nextSmaller(907));
