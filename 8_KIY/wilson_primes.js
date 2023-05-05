/**
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
 */

const factorial = (n) => {
  let result = 1n;
  while(n) {
      result *= n--;
  }
  return result;
}

const amIWilson = (p) => (factorial(BigInt(p-1)) + 1n) % BigInt(p**2) == 0;