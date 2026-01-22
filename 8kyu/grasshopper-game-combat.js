/*
INSTRUCTIONS
Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
*/

// MY SOLUTION
function combat(health, damage) {
  const newHealth = health - damage
  if (newHealth >= 0) {
    return newHealth
  } else {
    return 0
  }
}  

/*
Parameters: two integers, health and damage, both positive.
Return: return the player's new health after combat damage has been taken. save it under a variable 'newHealth'
Example: if health === 10 and damage === 5, return newHealth (which would equal 5), 
         if health === 5 and damage === 10, newHealth would equal -5, return 0
Pseudo Code:
1. set variable newHealth to take in the difference of health - damage
2. if newHealth >= 0, return newHealth, else (if it's negative) return 0
*/