/*
INSTRUCTIONS
Given a parameter, sperm, as a string...If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."
*/

// MY SOLUTION w/ PREP
function chromosomeCheck(sperm) {
  if (sperm == 'XY') {
    return "Congratulations! You're going to have a son."
  } else {
    return "Congratulations! You're going to have a daughter."
  }
}  

/*
Parameter(s): string composed of either 'XX' or 'XY'
Return: depending on the value of the parameter, return whether or not you're having a son or daughter
Example: if sperm == 'XY', return Congratulations! You're going to have a son.
Pseudo Code:
1. set up a conditional to test the value of the string 'sperm'
2. if sperm == 'XY', return string for having a son. else, return string having a daughter.
*/