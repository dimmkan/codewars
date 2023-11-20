/*
My 5th kata, and 1st in a planned series of rock climbing themed katas.

In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). You will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.

If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

Please do vote, rank, and provide any feedback on the kata.
*/

const sortedClimbs = {
    'VB': 1,
    'V0': 2,
    'V0+': 3,
    'V1': 4,
    'V2': 5,
    'V3': 6,
    'V4': 7,
    'V5': 8,
    'V6': 9,
    'V7': 10,
    'V8': 11,
    'V9': 12,
    'V10': 13,
    'V11': 14,
    'V12': 15,
    'V13': 16,
    'V14': 17,
    'V15': 18,
    'V16': 19,
    'V17': 20,
};

const sortGrades = lst => lst.sort((a, b) => sortedClimbs[a] - sortedClimbs[b]);
