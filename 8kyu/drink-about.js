/*
INSTRUCTIONS
Make a function that receive age, and return what they drink.
Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
*/

// MY SOLUTION
function peopleWithAgeDrink(old) {
  if (old <= 13) {
    return 'drink toddy'
  } else if (13 < old && old <= 17) {
    return 'drink coke'
  } else if (17 < old && old <= 20) {
    return 'drink beer'
  } else {
    return 'drink whisky'
  }
};

/*
Parameters: integer, counting as the age
Return: return a string, dependent on conditional below
Example: if old === 13, return 'drink toddy'
Pseudo Code:
1. Set conditionals depending on age and return the respective phrases
2. if <= 13, return 'drink toddy'. else if <= 17, return 'drink coke', ...
*/