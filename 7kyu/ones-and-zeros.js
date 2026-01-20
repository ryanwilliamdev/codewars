/*
INSTRUCTIONS
Given an array of ones and zeros, convert the equivalent binary value to an integer.
*/

// MY SOLUTION
const binaryArrayToNumber = arr => {
  let reversedArr = arr.reverse()
  let binaryCalculationArr = reversedArr.map((element, index) => {
    return element * (2 ** index)
  })
  const binaryToInteger = binaryCalculationArr.reduce((acc, c) => acc + c, 0)
  return binaryToInteger
};

/*
Parameters: array composed of ones and zeros, varying length
Return: return the integer equivalent of what the array spells out in binary
Example: if arr = [1, 1, 1, 1], return 15  --> 1*2^3 + 1*2^2 + 1*2^1 + 1*2^0 === 8 + 4 + 2 + 1 === 15
Pseudo Code:
1. Since we need to multiply each element in the array * 2^x, where x starts at 0 at the furthest right element and increases by 1 each element to the left, we need to reverse the array's order.
  Call it reversedArr
2. Next we need to iterate through the reversed array and multiply each element by 2^x, where x this time is going to be the array index. Returning a new array with map.
3. We need to sum all of the elements in this new array, binaryCalculationArr, using reduce()
4. Return that sum, call it binaryToInteger.
*/