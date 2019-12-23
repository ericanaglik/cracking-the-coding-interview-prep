/***********************************************************
1.4: Palindrome Permutation - Given a string, write a 
function to check if its a permutation of a palindrome. A 
palindrome is a word or phrase that is the same forwards and
backwards. A permutation is a rearrangement of letters. The 
palindrome does not need to be limited to just dictionary 
words.

EXAMPLE: 
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)
***********************************************************/

/******************** BIG O NOTATION ***********************
the for loop is O(unique(n)) because only unique letters are
stored in the dictionary

split(), join(), and stringToDict() are all o(n) because
they need to iterate through the string, therefore,
palindromePermutation() is O(n)
***********************************************************/

function palindromePermutation(s) {
  s = s.split(' ').join('').toLowerCase()
  // Base cases
  /* a string is a palindrome if its an empty string or a
  single character */
  if (s.length < 2) {
    return true
  }
  // a palindrome has to be odd, returns false if its even
  if (s.length % 2 === 0) {
    return false
  }

  // calls upon helper function from line 87 above
  dict = stringToDict(s)

  let numOdds = 0
  for (key in dict) {
    let value = dict[key]
    if (value % 2 != 0) {
      numOdds++
    }
  }
  if (numOdds != 1) {
    return false
  }
  return true
}

// Tests
console.log("Problem 1.4 Palindrome Permutation")
console.log(palindromePermutation("Tact Coa")) // -> returns true
console.log(palindromePermutation("baa")) // -> returns true
console.log(palindromePermutation("")) // -> returns true
console.log(palindromePermutation("a")) // -> returns true 
console.log(palindromePermutation("ab")) // -> returns false
console.log(palindromePermutation("Send help")) // -> returns false