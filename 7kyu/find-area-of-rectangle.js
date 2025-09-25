/* INSTRUCTIONS
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.
*/

// MY SOLUTION
function area(d,l){
  const w = Math.sqrt(d * d - l * l)
  if (d <= l) {
    return 'Not a rectangle'
  } else {
    return Number((w * l).toFixed(2))
  }
}