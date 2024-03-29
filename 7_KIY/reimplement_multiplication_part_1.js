/*
Description:
Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.
*/

const mul = (a, b) => Array.from({ length: b }, () => a).reduce((acc, item) => acc + item, 0);