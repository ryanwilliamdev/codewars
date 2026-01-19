/*
INSTRUCTIONS
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise
*/

// MY SOLUTION
function hero(bullets, dragons){
  return bullets >= dragons * 2
}

/*
Parameters: integer, both for bullets and dragons params
Return: boolean
Example: it takes 2 bullets per dragon, bullets value needs to be >= dragons * 2
Pseudo Code:
1. Ternary operator to test conditonal
*/