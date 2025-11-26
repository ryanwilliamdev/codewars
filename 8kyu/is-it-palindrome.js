/* INSTRUCTIONS
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

// MY SOLUTION
function isPalindrome(str) {
  const lowercaseStr = str.toLowerCase()
  if (lowercaseStr === lowercaseStr.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}