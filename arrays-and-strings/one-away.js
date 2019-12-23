/***********************************************************
1.5: One Away - There are three types of edits that can be
performed on strings: insert a character, remove a character,
or replace a character. Given two strings, write a function
to check if they are one edit (or zero edits) away.

EXAMPLE:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
***********************************************************/

function oneAway(s1, s2) {
  // Base Case
  /* If the length of the strings are more than one apart,
  they are automatically not one away, therefore return
  false */
  if (Math.abs(s1.length - s2.length) > 1) {
    return false
  }
  return true
}

// Tests 
console.log("Problem 1.5 One Away")
console.log(oneAway("pales", "pale")) // -> returns true
console.log(oneAway("kevin", "dog")) // -> returns false
console.log(oneAway("pale", "bale")) // -> returns true
console.log(oneAway("pale", "bake")) // -> returns false