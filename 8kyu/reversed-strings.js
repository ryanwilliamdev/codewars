/* INSTRUCTIONS
  Complete the solution so that it reverses the string passed into it.
*/

// MY SOLUTION WITH COMMENTS

function solution(str){
  let splitStr = str.split(""); // uses split() method to return a new array
  let reverseArr = splitStr.reverse(); // uses reverse() array method to reverse the newly created array
  let joinArr = reverseArr.join(""); // uses join() method to join all array elements into a string
  return joinArr;
}