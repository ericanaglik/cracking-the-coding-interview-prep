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