/*
Task
Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

Calculate the parameter of the given number n.

Input/Output
[input] integer n

A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
*/

function LCM(A)
{   
    var  n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(A[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[ i ])/(a+b);
     }
    return a;
}

const parameter = n => LCM(Object.values(n.toString().split('').map(v => +v).reduce((acc, item) => {
  acc.sum += item;
  acc.prod *= item;
  return acc;
}, {sum: 0, prod: 1})));