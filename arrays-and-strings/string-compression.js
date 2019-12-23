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
  if (s.length < 3) {
    return s
  }
  // The compressed string we are making
  let compressed = ""
  // The current consecutive letter, starting at the first
  let consecLetter = s.charAt(0)
  // The count of the current letter (consecutively)
  let consecCount = 0

  for (let i = 0; i < s.length; i++) {
    let currLetter = s.charAt(i)
    /* If the current letter is the same as the
    consecLetter, add one to its count*/
    if (currLetter === consecLetter) {
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
  if (compressed.length > s.length) {
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