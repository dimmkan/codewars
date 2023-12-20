/*
Write a function centroid(c) to calculate the centroid of 3D coordinates.

Return the results as a list of floats. Round the values to two decimal places.
*/

function centroid(c) {
    let x = c.map(
        () => (c.reduce((a, b) => a + b[0], 0) / c.length).toFixed(2) * 1
    )[0];
    let y = c.map(
        () => (c.reduce((a, b) => a + b[1], 0) / c.length).toFixed(2) * 1
    )[0];
    let z = c.map(
        () => (c.reduce((a, b) => a + b[2], 0) / c.length).toFixed(2) * 1
    )[0];
    return [x, y, z];
}