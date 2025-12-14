/* INSTRUCTIONS
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// MY SOLUTION
function updateLight(current) {
  if (current === 'green') {
    return 'yellow'
  } else if (current === 'yellow') {
    return 'red'
  } else {
    return 'green'
  }
}

// P (parameters): string
// R (returns): return
// E (example): when input (current) is green, 'yellow' should be returned
// P (pseudo code): an input string represents the 'current' light state.
// will require conditionals in order to return the next light state.