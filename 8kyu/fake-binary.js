/*
INSTRUCTIONS
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
*/

// MY SOLUTION w/ PREP
function fakeBin(x) {
  const result = x.split('').map(digit => digit >= 5 ? '1' : '0').join('')
  return result
}

/*
Parameter(s): x, which represents a string of digits. note: input will never be an empty string
Return: return a string of digits replacing the original string of digits. replace any digits from x >= 5 with a '1' and any digit < 5 with a '0'
Example:
Pseudo Code:
1. first, we need to split the string into an array using the split('') method. save that as a variable called 'result'
2. now that we split the array, we can call the .map() method to return a new array that tests our >= or < 5 conditional, using an arrow function with parameter 'digit'
3. lastly we can .join('') this array back into it's original string format and return 'result'
*/