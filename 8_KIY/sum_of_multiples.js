/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

const sumMul = (n,m) => m <= n ? 'INVALID' : Array.from({length: n === 1 ? ~~(m/n) - 1 : ~~(m/n)}, (_, i) => n * (i+1)).reduce((acc, item) => acc + item, 0);