/*
INSTRUCTIONS
Build a function that returns an array of integers from n to 1 where n>0.
*/

// MY SOLUTION w/ PREP
const reverseSeq = n => {
  let numberArr = []
  for (let i = 1; i <= n; i++) {
    numberArr.push(i)
  }
  return numberArr.reverse()
};

/*
Parameter(s): a single integer, n
Return: return an array of integers from n to 1, where n > 0
Example: n=5 --> return [5,4,3,2,1]
Pseudo Code:
1. first we need to create an empty array, call it numberArr
2. create a for loop, iterating from 1 to n, push the value of i to numberArr
3. return numberArr.reverse()
*/