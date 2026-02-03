/*
INSTRUCTIONS
You need to write a function that reverses the words in a given string. Words are always separated by a single space.
*/

// MY SOLUTION w/ PREP
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

/*
Parameter(s): string, separated by single space
Return(s): return parameter string, but in reverse
Example: 'Hello World' --> 'World Hello'
Pseudo Code:
1. First we can use the split(' ') method to turn parameter string into an array, separating by spaces
2. Second we need to reverse the elements' positions in the array.
3. Lastly, we join(' ') method and return
*/