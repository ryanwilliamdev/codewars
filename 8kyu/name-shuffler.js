/* 
INSTRUCTIONS
Write a function that returns a string in which firstname is swapped with last name.
*/

// MY SOLUTION with PREP
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}


/*
Parameters: string composed of a first and last name
Return: string where first and last name are SWAPPED
Example: 'Chris Farley' --> 'Farley Chris'
Pseudo Code:
1. split the string into an array using a space (' ')
2. reverse this array.
3. rejoin this array using a space (' ') and return
*/