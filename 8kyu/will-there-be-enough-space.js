/* INSTRUCTIONS
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap - is the amount of people the bus can hold excluding the driver.
on - is the number of people on the bus excluding the driver.
wait - is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/

// MY SOLUTION
function enough(cap, on, wait) {
  const seatsRemaining = cap - on;
  if (wait <= seatsRemaining) {
    return 0;
  } else {
    return wait - seatsRemaining;
  }
}

/* Parameters: cap (number, bus's capacity excluding driver), 
               on (number, people on bus excluding driver),
               wait (number, people WAITING to get on bus excluding driver)
*/
// Returns: if enough space, return 0. else, return number of passengers Bob CAN'T take
// Examples: 
/* Pseudo Code:
  all parameters exclude the driver so there shouldn't be any math needed to account for Bob in any parameter value
*/