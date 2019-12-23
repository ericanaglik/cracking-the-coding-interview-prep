/***********************************************************
1.1: Is Unique - Implement an algorithm to determine if a 
string has all unique characters. What if you cannot use 
additional data structures?
***********************************************************/

/******************** BIG O NOTATION ***********************
Sets are constant time (O(1)) look up and insertion
Iterate through the string once which is O(n)
***********************************************************/

function isUnique(s) {
  let characters = new Set()
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // grab the current character
    let c = s.charAt(i)
    /* if the character is already in the set (not unique)
    return false */
    if (characters.has(c)) {
      return false
    }
    // add the current character to the set
    characters.add(c)
  }
  // if nothing failed, the string is unique
  return true
}

// Tests 
console.log("Problem 1.1 Is Unique")
console.log(isUnique('abca')) // -> returns false
console.log(isUnique('kevin')) // -> returns true