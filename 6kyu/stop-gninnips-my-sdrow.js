/* INSTRUCTIONS
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// MY SOLUTION
function spinWords(string){
  const words = string.split(' ');
  const longerWords = words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })
  return longerWords.join(' ')
}