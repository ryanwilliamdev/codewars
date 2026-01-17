/* 
INSTRUCTIONS
In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
*/

// MY SOLUTION
function move (position, roll) {
  return position + (roll * 2)
}

/*
Parameters: two integers, position and roll. 
Return: return ONE integer, the new position, which is position * (roll * 2)
Example: move (3, 6) should return 15 3 * (6 * 2)
Pseudo Code:
1. Return position + (roll * 2)
*/