/*
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

const arrayMash = (array1, array2) => Array.from({ length: array1.length }, (_, i) => [array1[i], array2[i]]).reduce((acc, item) => {
    acc.push(...item);
    return acc;
}, []);