/*
INSTRUCTIONS
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

// MY SOLUTION
function between(a, b) {
  let betweenArr = []
  for (let i = a; i <= b; i++) {
    betweenArr.push(i)
  }
  return betweenArr
}

/*
Parameters: two integers, a and b
Return: return an array of all integers between a and b, including a and b
Example: a = 1, b = 4, return [1, 2, 3, 4]
Pseudo Code:
1. since a < b and we're returning all integers in between, a is the minimum value, b is the max.
2. set an empty array called betweenArr
3. run a for loop to iterate from a to b and push all values of i in between to betweenArr
4. return betweenArr
*/