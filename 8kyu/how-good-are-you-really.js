/*
INSTRUCIONS
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!
*/

// MY SOLUTION w/ PREP
function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((acc, c) => acc + c)
  return yourPoints > classPointsSum / classPoints.length
}

/*
Parameter(s): one integer representing yourPoints, one array of integers representing 
Return: boolean, return true if yourPoints > classPoints, else false
Example: see above in Return
Pseudo Code:
1. we first need to sum the array using reduce method and set it to a variable, call it classPointsSum
2. next we can return truthy whenever yourPoints > classPointsSum / classPoints.length (which represents the average)
*/