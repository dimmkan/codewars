/**
For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
 */

digits_map = {
  0: [0],
  1: [1],
  2: [6, 2, 4, 8],
  3: [1, 3, 9, 7],
  4: [6, 4],
  5: [5],
  6: [6],
  7: [1, 7, 9, 3],
  8: [6, 8, 4, 2],
  9: [1, 9],
};

function lastDigit(as) {
  if (!as.length) return 1;

  const firstNum = as.shift();
  const lastNumArr = as.map(item => item % 10);

  const pwr = lastNumArr.reduceRight((acc, item) => {
    if (item ** acc > Number.MAX_SAFE_INTEGER) {
      acc %= 10;
      acc = item ** acc;
    } else {
      acc = item ** acc;
    }
    return acc;
  }, 1);

  if ((firstNum == 0 && pwr == 0) || pwr == 0) return 1;

  const lastDigitOfA = firstNum % 10;
  const len = digits_map[lastDigitOfA].length;
  const reqIndex = pwr % len;
  return digits_map[lastDigitOfA][reqIndex];
}

// console.log(lastDigit([123232,694022,140249]))
console.log(lastDigit([7,6,21]))
console.log(lastDigit([123232,694022,140249,694022,140249]))