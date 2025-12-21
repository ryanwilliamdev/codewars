/* INSTRUCTIONS
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

// MY SOLUTION
function bmi(weight, height) {
  const bmi = weight / (Math.pow(height, 2))
  if (bmi <= 18.5) {
    return "You are underweight"
  } else if (bmi <= 25.0) {
    return "You have the recommended BMI"
  } else if (bmi <= 30.0) {
    return "You are overweight"
  } else {
    return "You are obese"
  }
}