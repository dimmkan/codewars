/*
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

*/

const reverseMessage = str => str ? str.split(' ').map(v => v.toLowerCase()).map(v => v.split('').reverse()).map(v => {
  v[0] = v[0].toUpperCase();
  return v.join('');
}).reverse().join(' ') : str;