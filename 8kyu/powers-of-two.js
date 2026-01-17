/* 
INSTRUCTIONS
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

// MY SOLUTION
function powersOfTwo(n){
  let powersOfTwoArr = []
  for (let i = 0; i <= n; i++) {
    powersOfTwoArr.push(Math.pow(2, i))
  }
  return powersOfTwoArr
}

/*
Parameters: non-negative integer, n
Return: return a list (array) of all the powers of 2, ranging from 0 to n
Example: n = 3 --> returns [1, 2, 4, 12] # [2^0, 2^1, 2^2, 2^3]
Pseudo Code:
1. Create empty array variable called powersOfTwoArr
2. Run a for loop that iterates up to n
3. In the loop, push the value of 2 ** i for each iteration of i
4. Return the array outside the loop so it doesn't return after the first iteration.
*/