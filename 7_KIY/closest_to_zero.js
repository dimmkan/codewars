/*
Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

const closest = (arr) => {
    if (arr.includes(0)) return 0;

    const n_arr = [...new Set(arr)];
    const e = Object.entries(n_arr.reduce((acc, item) => {
        acc[item] = Math.abs(0 - item);
        return acc;
    }, {})).sort(([k1, v1], [k2, v2]) => v1 - v2);

    if (e[0][1] == e[1][1]) {
        return null
    }

    return +e[0][0];
}