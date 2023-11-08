/*
dice = { 1, 1, 1, 1, 1, 6} -- > 2:
rotate 6 twice to get 1

dice = { 1, 2, 3} -- > 2:
2 rotations are needed to make all faces either 1, 2, or 3

dice = { 3, 3, 3} -- > 0:
all faces are already identical

dice = { 1, 6, 2, 3} -- > 3:
rotate 1, 6 and 3 once to make them all 2
*/

function rotations(a) {
    let d = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };
    return a.length ? Math.min(...[...new Set(a)].map(e => a.reduce((acc, item) => acc + (e === item ? 0 : d[item] === e ? 2 : 1), 0))) : 0;
}