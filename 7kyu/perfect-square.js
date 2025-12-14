/* INSTRUCTIONS
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/

// MY SOLUTION
function findNextSquare(sq) {
  let numSquareRoot = Math.sqrt(sq)
  if (Number.isInteger(numSquareRoot)) {
    numSquareRoot+= 1
    return Math.pow(numSquareRoot, 2)
  } else {
    return -1
  }
}


//P:  num, integer, sqrt(num) also needs to be integer
//R:  return next perfect square, otherwise conditional return -1
//E:  if sq (perfect square parameter) is 121, return value will be 144
//P:  i need to take the input value and see if Math.sqrt is also an integer, 
//    i can do this by testing isInteger method against numSquareRoot, if it's integer then i add +1 to 
//    the value of sq, then square that value by 2. if isInteger is false, return -1