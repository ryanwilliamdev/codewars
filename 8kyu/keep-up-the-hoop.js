/* INSTRUCTIONS
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
*/

// MY SOLUTION
function hoopCount (n) {
   return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';  
};


/*
Parameters: number, designating the amount of times the hoop goes around
Returns: return one of two strings, depending on the value of parameter n.
Example(s): if n is >= 10, return 'Great, now move on to tricks'. if n < 10, return 'Keep at it until you get it'
Pseudo Code:
1. Conditional, if n >= 10, return 'Great, now....', else return 'Keep at it...'
2. Ternary operator would be good to use here


*/