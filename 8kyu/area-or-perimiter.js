/* INSTRUCTIONS
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/

// MY SOLUTION
const areaOrPerimeter = function(l , w) {
  const area = l * w;
  const perimeter = 2 * (l + w);
  if (l === w) {
    return area;
  } else {
    return perimeter;
  }
};