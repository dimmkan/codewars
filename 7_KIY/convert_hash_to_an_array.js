/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/

const convertHashToArray = (hash) => Object.entries(hash).sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
