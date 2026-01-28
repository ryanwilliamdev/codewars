/*
INSTRUCTIONS
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

// MY SOLUTION w/ PREP
function problem(x){
  const multiplyAndAddSix = (x * 50) + 6
  if (typeof x === 'number') {
    return multiplyAndAddSix
  } else {
    return 'Error'
  }
}

/*
Parameters: could be either a number or string
Return: if x is a number, return that value multiplied by 50 and increased by 6. if x is a string, return 'Error'
Example: if x === 10, return 56
Pseudo Code:
1. Create a variable that'll handle our calculation if x is a number, call it multiplyAndAddSix
2. Create a conditional to test typeof x, if x is a number, return multiplyAndAddSix. if x is a string, return 'Error'
*/