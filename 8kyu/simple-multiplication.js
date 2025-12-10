/*
INSTRUCTIONS
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// MY SOLUTION + PREP
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
    } else {
      return number * 9
    }
}


// Parameters: numbers (odds and evens), whole
// Returns: return
// Examples: if num = 2 (even) => 2 * 8 = 16
//           if num = 3 (odd) => 3 * 9 = 27
// Pseudo code: 
// take a num, determine if odd or even, conditional to multiply num by 8 or 9 depending on if num is even or odd