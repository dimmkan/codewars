/*
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string){
  const n = Math.floor(string.length / 2);
  let res = '';
  for(let i = 0; i < n; i++){
    res += `${string.charAt(i)}${string.charAt(string.length - 1 - i)}${i+1}`;
  }
  return res;
}