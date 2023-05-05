/**
Write a function that checks if a given string (case insensitive) is a palindrome. 
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, 
the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
 */

const isAlphanumeric = n => /[a-zA-Z0-9]/.test(n);

const isPalindrome = x => {
  const clear_x = x.toLowerCase().split('').filter(isAlphanumeric).join('');
  const y = x.toLowerCase().split('').filter(isAlphanumeric).reverse().join('');
  return clear_x === y;
}

console.log(isPalindrome('12/21/33 12:21'));