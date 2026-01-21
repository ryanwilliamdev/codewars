/*
INSTRUCTIONS
When provided with a letter, return its position in the alphabet.
Input :: "a"
Output :: "Position of alphabet: 1"
Note: Only lowercased English letters are tested
*/

// MY SOLUTION
function position(letter){
  const letterPosition = letter.charCodeAt() - 96
  return `Position of alphabet: ${letterPosition}`
}

/*
Parameters: a single, lowercased string representing a letter in the alphabet
Return: return the position of the parameter, letter, in a return statement of "Position of alphabet: x"
Example: If letter === 'a', return "Position of alphabet: 1"
Pseudo Code:
1. We can use the charCodeAt() method for strings to find the UTF-16 code unit value for "letter". Save this in a variable called letterPosition
2. Since we're working with only lowercase letters and English letters begin at value 97 for 'a', we have to subtract 96 from the charCodeAt() value.
3. Return letterPosition
*/