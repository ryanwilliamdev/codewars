/*
INSTRUCTIONS
define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/

// MY SOLUTION
function xor(a, b) {
    return a != b;
}
/*
Parameters: two booleans, a and b. they can be either true or false
Return: return a boolean. true if a || b is true and false if BOTH a and b are true OR false
Example: if a == true && b == false, return true. if a == false && b == true, return true
Pseudo Code:
1. Since a false return happens when a and b are equal, we can simply return truthy when a != b
*/