/*
INSTRUCTIONS
The pipes are correct when each pipe after the first is 1 more than the previous one.

Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
*/

// 
function pipeFix(numbers){
  let numbersMin = numbers[0]
  let numbersMax = numbers[numbers.length - 1]
  let correctPipesArray = []
  for (let i = numbersMin; i <= numbersMax; i++) {
    correctPipesArray.push(i)
  }
  return correctPipesArray
}

/*
Parameters: list (array) of unique numbers sorted in ascending order
Return: return a new list so that the values increment by 1 for each index from the min value to the max value
Example: If the input list is [1,3,5,6,7,8], return [1,2,3,4,5,6,7,8]
Pseudo Code:
1. Set variables for the min and max values in the list (array)
2. Iterate through the list (array) and push each value into the array.
*/