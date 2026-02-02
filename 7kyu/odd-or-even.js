/*
INSTRUCTIONS
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
*/

// MY SOLUTION w/ PREP
function oddOrEven(array) {
   const arraySum = array.reduce((acc, c) => acc + c, 0)
   if (arraySum % 2 === 0) {
     return 'even'
   } else {
     return 'odd'
   }
}

/*
Parameters: array (list) of integers
Return: return a string of 'odd' or 'even' depending if the sum of the array is odd or even
Example: array === [0, 1, 4] --> return 'odd' because array === 5
Pseudo Code:
1. first we can use the reduce method on the array and save the result in a variable, call it arraySum
2. test if arraySum % 2 === 0 to return whether arraySum is odd or even
*/