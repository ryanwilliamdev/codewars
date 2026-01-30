/*
INSTRUCTIONS
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

// MY SOLUTION w/ PREP
function basicOp(operation, value1, value2){
  if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else {
    return value1 / value2
  }
}

/*
Parameters: two numbers (value1, value2) and a string operator (ie '+')
Return: return the number resulting from the calculation of both values and the operator
Example: ('+', 4, 7) --> 11
Pseudo Code:
1. Since the operator in this case is a string, we have to convert it and test it with a conditional, if operator === '+' return value1 + value2
2. Fill out the remainder else if's with regards to '-', '*' and '/'
*/