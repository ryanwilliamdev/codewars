/*
INSTRUCTIONS
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

// MY SOLUTION
function XO(str) {
    const lowerCaseStr = str.toLowerCase()
    let countOfX = 0
    let countOfO = 0
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (lowerCaseStr[i] === 'x') {
        countOfX++
      } else if (lowerCaseStr[i] === 'o') {
        countOfO++
      }
    }
    return countOfX === countOfO
}

/*
Parameters: string composed of random letters
Return: return a boolean true if str has same amount of x's and o's in the string.
Example: X("ooxx") => true //  XO("xoo") => false //  XO("zpzpzpp") => return true if NO x's AND o's are present
Pseudo Code:
1. First we should the string set to lowerCase()
2. Secondly, we can set two variables countOfX and countOfO to 0
3. Next we can iterate through the array and ++ the count of either x or o.
4. Return countOfX === countOfO
*/