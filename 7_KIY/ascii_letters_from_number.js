/*
You have to create a function that converts integer given as string into ASCII uppercase letters or spaces.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, So you have to split given number to two digit long integers.

Examples (input -> output)
'658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'
Good Luck!
*/

function split_str(str, index = 2) {
    let result = [];
    while (str.length > index) {
        result.push(str.splice(0, index).join(''));
    }

    result.push(str.join(''));
    return result;
}
const convert = n => split_str(n.toString().split('')).map(v => String.fromCharCode(+v)).join(''); 