/*
INSTRUCTIONS
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

// MY SOLUTION w/ PREP
function longest(s1, s2) {
  let lowerStrings = (s1 + s2).toLowerCase()
  const charSet = new Set(lowerStrings)
  const setString = Array.from(charSet).sort().join('')
  return setString
}

/*
Parameter(s): two strings, s1 and s2, including letters only from a to z.
Return: return a new SORTED string, ascending, containing letters from s1 and s2 (each letter only taken once)
Example: a = "xyaabbbccccdefww", b = "xxxxyyyyabklmopq" --> return "abcdefklmopqwxy"
Pseudo Code:
1. first we can make a variable that concats both s1 and s2 together and sets them to lowerCase(). call this lowerStrings
2. secondly we can make a Set out of lowerStrings so that it only returns unique letters and removes any duplicates. call it charSet
3. since Sets are objects, we need to convert it to an array so we can sort it. afterwards we can .join() it to return it as a string. call this variable setString.
4. return setString
*/