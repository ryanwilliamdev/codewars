/*
INSTRUCTIONS

*/

// MY SOLUTION w/ PREP
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
}

/*
Parameter(s): array of elements containing strings of words
Return: return the array sorted by length of string word, shortest to longest
Example: ["Telescopes", "Glasses", "Eyes", "Monocles"] --> 
Pseudo Code:
1. we can use the sort method on array, but we have to sort it by element length.
2. using sort() with an arrow function, we can sort using a.length and b.length to sort ascended.
3. return array sorted this way
*/