/* 
INSTRUCTIONS
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
*/

// MY SOLUTION /w PREP
function past(h, m, s){
  const hoursToMilliseconds = h * (3.6 * 10**6)
  const minutesToMilliseconds = m * (6 * 10**4)
  const secondsToMilliseconds = s * 1000
  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds
}

/*
Parameter(s): three integer inputs: h, m, and s representing hours, minutes and seconds
Return: convert all three inputs to their equivalent in milliseconds and return the sum
Example: h = 0, m = 1, s = 1 --> return 61000
Pseudo Code:
1. To convert hours to milliseconds, 1 hr = 60 minutes. minutes to seconds = 60 minutes * 60 seconds/minute (3600). seconds to milliseconds = 3600 seconds * 1000 milliseconds/second === 3,600,000ms
2. To convert minutes to milliseconds, 1 min = 60 seconds. 60 seconds * 1000 milliseconds/second === 60,000ms
3. Seconds to milliseconds, 1 second === 1000ms
4. Set variables to convert hours, minutes and seconds. named appropriately.
5. Return the sum of all three
*/