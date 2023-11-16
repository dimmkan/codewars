/*
For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const oddNotPrime = n => Array.from({ length: n }, (_, i) => i + 1).filter(v => (v % 2 == 1 && !isPrime(v))).length;