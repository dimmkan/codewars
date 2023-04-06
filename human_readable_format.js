/**
Human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 */

// Му solution

function formatDuration (seconds) {
  if (!seconds) return 'now';
  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;

  const result = {
    year: ~~(seconds / oneYear),
    day: ~~((seconds % oneYear) / oneDay),
    hour: ~~((seconds % oneDay) / oneHour),
    minute: ~~((seconds % oneHour) / oneMinute),
    second: seconds % oneMinute,
  };

  return Object.entries(result).filter(([key, value]) => value).reduce((acc, [key, value], index, array) => {
    if (array.length === 1) {
      acc += `${value} ${key}${value > 1 ? 's' : ''}`;
      return acc;
    } else {
      if (index === array.length - 1) {
        acc += ` and ${value} ${key}${value > 1 ? 's' : ''}`;
        return acc;
      } else if (index === 0) {
        acc += `${value} ${key}${value > 1 ? 's' : ''}`;
        return acc;
      } else {
        acc += `, ${value} ${key}${value > 1 ? 's' : ''}`;
        return acc;
      }
    }
  }, '');
}

// Top optimize
// const formatDuration = seconds =>
//   (arr => seconds ? arr.filter(val => !/^0/.test(val)).map(val => (/^1 /).test(val) ? val.slice(0, -1) : val).join(`, `).replace(/,(?=[^,]*$)/, ` and`) : `now`)
//   ([`${seconds / 31536000 ^ 0} years`, `${seconds / 86400 % 365 ^ 0} days`, `${seconds / 3600 % 24 ^ 0} hours`, `${seconds / 60 % 60 ^ 0} minutes`, `${seconds % 60} seconds`]);

console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3600));
console.log(formatDuration(3662));
