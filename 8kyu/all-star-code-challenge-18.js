/*
INSTRUCTIONS
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
*/

// MY SOLUTION w/ PREP
function strCount(str, letter){  
  let characterCount = 0
  let stringArr = str.split('')
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i] === letter) {
        characterCount++
      } else if (!stringArr) {
        return 0
      } 
    }
  return characterCount
}

/*
Parameter(s): one string (which can be empty at times) and one character string (letter)
Return: return the count of occurrences the single character string appears in the first string argument
Example: ('Hello', 'l') => 2
Pseudo Code:
1. First we should make a characterCount variable and set it to 0
2. Secondly we need to split the first string argument into an array using split(), call it stringArr
3. Third, we can iterate through the stringArr and test each individual character against the 2nd argument character, if there's a match, we can characterCount++
4. Return characterCount
*/