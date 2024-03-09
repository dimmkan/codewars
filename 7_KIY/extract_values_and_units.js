/*
Description:
Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}
Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.
*/

const valAndUnits = (s) => ({ val: +s.replace(/[^0-9.-]/g, ''), units: s.replace(/[0-9. -]/g, '') });