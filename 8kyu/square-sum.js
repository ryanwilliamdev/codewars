/* INSTRUCTIONS
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.
*/

// MY SOLUTION
function squareSum(numbers){
  const squaredNums = numbers.map((num) => num * num)
  const sumSquaredNums = squaredNums.reduce((acc, c) => acc + c, 0)
  return sumSquaredNums
}