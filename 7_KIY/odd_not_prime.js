/*
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