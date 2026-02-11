/*
INSTRUCTIONS
You ask a small girl "How old are you?" She always says "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

// MY SOLUTION w/ PREP
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
return Math.ceil(inputString[0]);
}

/*
Parameter(s): string
Return: return the girl's age as an integer, parsed from inputString
Example: inputString = '4 years old', return 4
Pseudo Code:
1. Since the first element of inputString is a number, we can pull it's index. inputString[0]
2. We would want to round this number up, so we can use Math.ceil()
3. return this number
*/