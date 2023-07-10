/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split("")
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map(
                p => char + p
              )
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}