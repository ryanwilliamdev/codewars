/*
INSTRUCTIONS
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

// MY SOLUTION
function arithmetic(a, b, operator){
  if (operator === 'add') {
    return a + b
  } else if (operator === 'subtract') {
    return a - b
  } else if (operator === 'multiply') {
    return a * b
  } else {
    return a / b
  }
}

/*
Parameters: two numbers, a and b and a string 'operator' which will be either 'add','subtract','multiply', or 'divide'
Return: return the arithmetic operator equivalent of operator string and use it on a and b
Example: 5, 2, "add"  --> 7
Pseudo Code:
1. Set if conditional and test for all potential arithmetic operators and return the correct arithmetic
*/