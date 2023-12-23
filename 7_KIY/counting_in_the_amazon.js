/*
The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.
*/

function countArara(n) {
    let arr = [];
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 == 0) arr.push('adak');
            if (i % 2 != 0 && i == n) arr.push('anane');
        }
    }
    return arr.join(' ');
}