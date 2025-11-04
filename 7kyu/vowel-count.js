/* INSTRUCTIONS
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// MY SOLUTION
function getCount(str) {
  const vowels = ['a','e','i','o','u','A','E','I','O','U']
  return str.split("").filter(char => vowels.includes(char)).length;
}