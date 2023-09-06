/*
A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

See the pattern below:

"code wars"            ---> "C.Wars"
"Barack hussein obama" ---> "B.H.Obama"
Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
const capitalizeFirstLetter_dot = s => s.charAt(0).toUpperCase() + '.';

const initials = n => n.split(' ')
.map((item, index) => index == n.split(' ').length-1 ? capitalizeFirstLetter(item) : capitalizeFirstLetter_dot(item))
.join('');