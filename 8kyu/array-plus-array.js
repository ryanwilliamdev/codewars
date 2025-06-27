/* INSTRUCTIONS
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// MY SOLUTION
function arrayPlusArray(arr1, arr2) {
  const concatArrays = arr1.concat(arr2)
  const sumOfArrays = concatArrays.reduce((acc, c) => acc + c)
  return sumOfArrays
}