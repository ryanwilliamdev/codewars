/* INSTRUCTIONS
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0
*/

// MY SOLUTION
function closeCompare(a, b, margin){
  const numsDifference = Math.abs(a - b);
  if (!margin) {
    if (0 >= numsDifference) {
      return 0
    } else if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
  } else if (margin >= numsDifference) {
    return 0
  } else if (a < b) {
    return -1
  } else {
    return 1
  }
}


/*
Parameters: three integers, whole. (a, b, margin)
Returns: returning either -1, 0 or 1 depending on the parameters given
Example: if margin is >= the ABSOLUTE difference of a and b, return 0. if a < b, return -1. if a > b, return 1
If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0
If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1
Pseudo Code:
1. First we need to get the absolute difference of a and b using Math.abs(a - b). Call it numsDifference
2. Conditonal:
    If (!margin), nested, if 0 >= numsDifference return 0, else if (a < b) return -1, else if (a > b) return 1
    Else if (margin >= numsDifference) return 0, else if (a < b) return -1, else return 1
*/