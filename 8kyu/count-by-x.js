/*
INSTRUCTIONS
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.
*/

// MY SOLUTION w/ PREP
function countBy(x, n) {
  let countArr = []
  for (let i = 1; i <= n; i++) {
    let multipleOfX = i * x
    countArr.push(multipleOfX)
  }
  return countArr
}

/*
Parameter(s): two integers, x and n
Return: return an array of the first n multiples of x
Example: x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
Pseudo Code:
1. First, let's make an empty array that we will push to later, call it countArr 
2. Second, we need to create a for loop that will iterate until we reach the value of n.
3. In this loop, we need to multiply i * x, and push that value to countArr
4. Return countArr
*/