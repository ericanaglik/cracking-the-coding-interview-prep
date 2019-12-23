/***********************************************************
1.2: Check Permutation - Given two strings, write a method
to decide if one is a permutation of the other. 
***********************************************************/

/***** PREVIOUS SOLUTION, changed because of edge case *****
function checkPermutation(s1,s2) {
    // Base case
    if(s1.length != s2.length) {
        return false
    }

    let characters = new Set()
    // iterate through the first string, adding each character
    to the set 
    for(let i = 0; i < s1.length; i++) {
        // grab the current character
        let c = s1.charAt(i)
        // add it to the set
        characters.add(c)
    }
    // iterate through the second string
    for(let i = 0; i < s2.length; i++) {
        // grab the current character
        let c2 = s2.charAt(i)
        // if the character isn't in the first set, its not
        a permutation, so return false
        if(characters.has(c2) === false) {
            return false
        }
    }
    // if nothing failed, its a permutation
    return true
} */

/************** NEW SOLUTION, edge case passes ************/

/******************** BIG O NOTATION ***********************
Each stringToDict() is O(n) (explanation below),
so checkPermutation() is O(s1 + s2) which is O(n)
***********************************************************/

function checkPermutation(s1, s2) {
  // Base case
  if (s1.length != s2.length) {
    return false
  }
  // returns true if its a permutation, false if not
  return deepEqual(stringToDict(s1), stringToDict(s2))
}

/* Helper function that compares the keys and values of two 
objects in javascript. Credit to:
https://stackoverflow.com/questions/33232823/how-to-compare-two-objects-and-get-key-value-pairs-of-their-differences */
function deepEqual(x, y) {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
    ok(x).every(key => deepEqual(x[key], y[key]))
  ) : (x === y);
}

/******************** BIG O NOTATION ***********************
stringToDict() is O(n) because you iterate through the string
***********************************************************/

function stringToDict(s) {
  let dict = new Object()
  // iterates through the string
  for (let i = 0; i < s.length; i++) {
    // grabs the current character
    let c = s.charAt(i)
    /* if its not in the dictionary, add it and set its 
    value to 0 */
    if (c in dict === false) {
      dict[c] = 0
    }
    // add another occurrence to the key's value
    dict[c]++
  }
  return dict
}

// Tests 
console.log("Problem 1.2 Check Permutation")
console.log(checkPermutation("abc", "cab")) // -> returns true
console.log(checkPermutation("kevin", "dog")) // -> returns false
console.log(checkPermutation("erica", "erika")) // -> returns false
console.log(checkPermutation("aabb", "aaab")) // -> returns false