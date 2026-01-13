/* INSTRUCTIONS
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

// MY SOLUTION WITH PREP
function descendingOrder(n){
  const numArr = n.toString().split('')
  return Number(numArr.sort((a,b) => b - a).join(''))
}


/*
Parameters: non-negative integer
Return: non-negative integer where each number is in descending order
Example: 68285 --> 88652
Pseudo Code:
1. Split n into array using split(''), call it numArr
2. Sort this array numArr.sort((a,b) => b - a) for descending order
3. Join the array back together using join('')
4. Wrap the return in Number() since it's currently a string at the join step.
*/