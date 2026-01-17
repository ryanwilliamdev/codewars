/* 
INSTRUCTIONS
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

// MY SOLUTION
function getSum(a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let totalSum = 0
  if (a === b) {
    return a
  } else {
    for (let i = min; i <= max; i++) {
      totalSum += i
    }
    return totalSum 
  }
}


/*
Parameters: two integers, can be positive OR negative
Return: return integer -> the sum of all integers between and including a & b. return value of a or b if a and b are equal.
Example(s): 
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
  (1, 1) --> 1 (1 since both are same)
Pseudo Code:
1. conditional, if a === b, return a
2. else statement:
    create variable totalSum, set it equal to 0 to start
    find min and max (to sort lowest to highest between a and b), for loop with i = a while <= b, i++
3. the for loop should += each iteration to totalSum
4. return totalSum
*/
