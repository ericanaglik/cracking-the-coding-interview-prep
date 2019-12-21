/* 1.1: Is Unique - Implement an algorithm to determine if a 
string has all unique characters. What if you cannot use 
additional data structures?*/


function isUnique(s) {
    let characters = new Set()
    // iterate through the string
    for(var i = 0; i < s.length; i++) {
        // grab the current character
        var c = s.charAt(i)
        /* if the character is already in the set (not unique)
        return false */
        if(characters.has(c)) {
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
console.log(isUnique('abca'))
console.log(isUnique('kevin'))

/* 1.2: Check Permutation - Given two strings, write a method
to decide if one is a permutation of the other. */

function checkPermutation(s1,s2) {
    // Base case
    if(s1.length != s2.length) {
        return false
    }

    let characters = new Set()
    /* iterate through the first string, adding each character
    to the set */
    for(var i = 0; i < s1.length; i++) {
        // grab the current character
        var c = s1.charAt(i)
        // add it to the set
        characters.add(c)
    }
    // iterate through the second string
    for(var i = 0; i < s2.length; i++) {
        // grab the current character
        var c2 = s2.charAt(i)
        /* if the character isn't in the first set, its not
        a permutation, so return false */
        if(characters.has(c2) === false) {
            return false
        }
    }
    // if nothing failed, its a permutation
    return true
}

// Tests 
console.log("Problem 1.2 Check Permutation")
console.log(checkPermutation("abc","cab"))
console.log(checkPermutation("kevin","erica"))
console.log(checkPermutation("erica","erika"))

