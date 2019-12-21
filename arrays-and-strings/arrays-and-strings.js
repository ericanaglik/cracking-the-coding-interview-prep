/***********************************************************
1.1: Is Unique - Implement an algorithm to determine if a 
string has all unique characters. What if you cannot use 
additional data structures?
***********************************************************/

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
console.log(isUnique('abca')) // -> returns false
console.log(isUnique('kevin')) // -> returns true 

/***********************************************************
1.2: Check Permutation - Given two strings, write a method
to decide if one is a permutation of the other. 
***********************************************************/

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
console.log(checkPermutation("abc","cab")) // -> returns true
console.log(checkPermutation("kevin","dog")) // -> returns false
console.log(checkPermutation("erica","erika")) // - returns false

/***********************************************************
1.3: URLify - Write a method to replace all spaces in a
string with '%20'. You may assume that the string has
sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string.
***********************************************************/

function urlify(s) {
    /*split the string on the spaces then join them together
    with '%20' */
    return s.split(' ').join('%20');
}

// Tests 
console.log("Problem 1.3 URLify")
console.log(urlify('Mr John Smith')) // -> returns 'Mr%20John%20Smith
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

/***********************************************************
1.6: String Compression - Implement a method to perform
basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become
a2b1c5a3. If the "compressed" string would not become
smaller than the original string, your method should return
the original string. You can assume the string has only
uppercase and lowercase letters (a - z).
***********************************************************/

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


