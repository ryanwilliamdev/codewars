/* 
INSTRUCTIONS
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

// MY SOLUTION
function doubleChar(str) {
  let strCharacters = str.split('');
  let doubleCharacterString = strCharacters.map(char => char + char).join('');
  return doubleCharacterString;
}

/*
Parameters: string
Return: string where each character in parameter string is repeated once
Example: 'Repeat' -> 'RReeppeeaatt'
Pseudo Code:
1. Split string into individual characters, call it strCharacters
2. Map() new array where each character is doubled and rejoin() back into a string, call it doubleCharacterString
3. Return doubleCharacterString
*/