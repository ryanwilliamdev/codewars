/* INSTRUCTIONS
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)

Example: (Input1, Input2 -->Output)
*/

// MY SOLUTION
function sumStr(a,b) {
  let sum = Number(a) + Number(b);
  let sumString = sum.toString();
  return sumString;
}


/*
Parameters: two integers in the form of STRINGS
Return: return the sum of both integers as a STRING
Example: a = '2' + b = '7', return '9'
Pseudo Code:
1. Create a variable called sum that converts a and b into Number() and add them together.
2. Create another variable called sumString and convert sum (which is a number) back into a string.
3. Return sumString
*/