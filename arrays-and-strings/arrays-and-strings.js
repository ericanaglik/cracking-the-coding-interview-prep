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
    for(let i = 0; i < s.length; i++) {
        // grab the current character
        let c = s.charAt(i)
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
console.log(isUnique('abca')) // -> returns false
console.log(isUnique('kevin')) // -> returns true 

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

function checkPermutation(s1,s2) {
    // Base case
    if(s1.length != s2.length) {
        return false
    }
    // returns true if its a permutation, false if not
    return deepEqual(stringToDict(s1), stringToDict(s2))
}

/* Helper function that compares the keys and values of two 
objects in javascript. Credit to:
https://stackoverflow.com/questions/33232823/how-to-compare-two-objects-and-get-key-value-pairs-of-their-differences */
function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
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
    for(let i = 0; i < s.length; i++) {
        // grabs the current character
        let c = s.charAt(i)
        /* if its not in the dictionary, add it and set its 
        value to 0 */
        if(c in dict === false){
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
console.log(checkPermutation("kevin","dog")) // -> returns false
console.log(checkPermutation("erica","erika")) // -> returns false
console.log(checkPermutation("aabb", "aaab")) // -> returns false

/***********************************************************
1.3: URLify - Write a method to replace all spaces in a
string with '%20'. You may assume that the string has
sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
***********************************************************/

/******************** BIG O NOTATION ***********************
both split() and join() are O(n) because they need to
iterate through the string, therefore urlify() is also O(n)
***********************************************************/

function urlify(s) {
    /*split the string on the spaces then join them together
    with '%20' */
    return s.split(' ').join('%20');
}

// Tests 
console.log("Problem 1.3 URLify")
console.log(urlify('Mr John Smith')) // -> returns 'Mr%20John%20Smith'
console.log(urlify('Hello World')) // -> returns 'Hello%20World'

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
    if(s.length < 2){
        return true
    }
    // a palindrome has to be odd, returns false if its even
    if(s.length % 2 === 0){
        return false
    }

    // calls upon helper function from line 87 above
    dict = stringToDict(s)
    
    let numOdds = 0
    for(key in dict){
        let value = dict[key]
        if(value % 2 != 0){
            numOdds++
        }
    }
    if(numOdds != 1){
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

function oneAway(s1,s2){
    // Base Case
    /* If the length of the strings are more than one apart,
    they are automatically not one away, therefore return
    false */
    if(Math.abs(s1.length - s2.length) > 1) {
        return false
    }
    return true
}

// Tests 
console.log("Problem 1.5 One Away")
console.log(oneAway("pales","pale")) // -> returns true
console.log(oneAway("kevin","dog")) // -> returns false
console.log(oneAway("pale","bale")) // -> returns true
console.log(oneAway("pale","bake")) // -> returns false


/***********************************************************
1.6: String Compression - Implement a method to perform
basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become
a2b1c5a3. If the "compressed" string would not become
smaller than the original string, your method should return
the original string. You can assume the string has only
uppercase and lowercase letters (a - z).
***********************************************************/

/******************** BIG O NOTATION ***********************
Besides iterating through the string once, other operations
are only constant time, therefore stringCompression() is 
O(n) where n is the length of the string.
***********************************************************/

function stringCompression(s) {
    // Base Case
    /* If the length is 0, it returns the empty string (cant
    be compressed). If the length is 1, the compression
    look like ex: a1, which is longer than the single
    character. If the length is 2, then the compressed
    version would be the same length as the original string.
    Therefore, return the original string in all these cases
    */
    if(s.length < 3){
        return s
    }
    // The compressed string we are making
    let compressed = ""
    // The current consecutive letter, starting at the first
    let consecLetter = s.charAt(0)
    // The count of the current letter (consecutively)
    let consecCount = 0

    for(let i = 0; i < s.length; i++){
        let currLetter = s.charAt(i)
        /* If the current letter is the same as the
        consecLetter, add one to its count*/
        if(currLetter === consecLetter){
            consecCount++
        } else {
            // add the letter and count to the string
            compressed += consecLetter + consecCount.toString()
            // reset consecLetter to be the current (different) letter
            consecLetter = currLetter
            /* reset the consecutive count to 1 because the 
            letter just appeared */
            consecCount = 1
        }
    }
    // Add the remaining letter and count
    compressed += consecLetter + consecCount.toString()

    /* Check to see if the compressed length is larger than
    the original string's length, if it is, return the
    original string */
    if(compressed.length > s.length){
        return s
    }
    /* If all the base cases fail meaning the compressed is
    actually shorter than the original, return compressed */
    return compressed
}

// Tests
console.log("Problem 1.6 String Compression")
console.log(stringCompression("")) // -> returns ""
console.log(stringCompression("a")) // -> returns "a"
console.log(stringCompression("ab")) // -> returns "ab"
console.log(stringCompression("aaa")) // -> returns "a3"
console.log(stringCompression("abc")) // -> returns "abc"
console.log(stringCompression("aabcccccaaa")) // -> returns "a2b1c5a3"

/***********************************************************
1.7: Rotate Matrix - Given an image represented by an NxN
matrix, where each pixel in the image is 4 bytes, write a
method to rotate the image by 90 degrees. Can you do this in
place?
***********************************************************/

/***********************************************************
1.8: Zero Matrix - Write an algorithm such that if an
element in an MxN matrix is 0, its entire row and column are
set to 0.
***********************************************************/

/***********************************************************
1.9: String Rotation - Assume you have a method isSubstring
which checks if one word is a substring of another. Given
two strings, s1 and s2, write code to check if s2 is a
rotation of s1 using only one call to isSubstring 
(e.g., "waterbottle" is a rotation of "erbottlewat").
***********************************************************/


