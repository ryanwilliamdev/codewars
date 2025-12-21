/* INSTRUCTIONS
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

// MY SOLUTION
function smash (words) {
   return words.join(' ');
};

// P: array of words, need to smash (join) them together
// R: return
// E: ["This", "is", "an", "example"] => should return as "This is an example"
// P: array method used to join elements of an array together, ie join() method