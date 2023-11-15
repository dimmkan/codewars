/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// Return an array
const fizzbuzz = n => Array.from({ length: n }, (_, i) => {
    switch (true) {
        case ((i + 1) % 3 === 0 && (i + 1) % 5 === 0): return 'FizzBuzz';
        case ((i + 1) % 3 === 0): return 'Fizz';
        case ((i + 1) % 5 === 0): return 'Buzz';
        default: return i + 1;
    }
});