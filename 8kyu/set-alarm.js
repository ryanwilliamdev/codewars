/* INSTRUCTIOSN
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

// MY SOLUTION
function setAlarm(employed, vacation){
  const  jobStatus = employed && !vacation;
  if (jobStatus) {
    return true;
  } else {
    return false;
  }
}

// Parameters:two parameters, employed and vacation. string.
// Return: conditional into a bool return
// Example: if first parameter "employed", return true. if second parameter "vacation", return true.
/* Pseudo Code:
  if employed AND on vacation => false
  if employed AND NOT on vacation => true
  if NOT employed AND on vacation => false
  if NOT employed AND NOT on vacation => false
  employed | vacation 
  true     | true     => false
  true     | false    => true
  false    | true     => false
  false    | false    => false
  only need one conditional to return true, else false
*/