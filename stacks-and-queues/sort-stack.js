/***********************************************************
3.5: Sort Stack - Write a program to sort a stack such that
the smallest items are on the top. You can use an additional
temporary stack, but you may not copy the elements into any
other data structure (such as an array). The stack supports
the following the following operations: push, pop, peek, and
isEmpty.
***********************************************************/

/******************** BIG O NOTATION ***********************
O(n^2) because every item in the stack needs to move for
each item to get put in sorted order.

Space Complexity: O(n) because you don't copy any of the
items
***********************************************************/


function sortStack(firstStack) {
  let secondStack = new Array()
  let numCount = firstStack.length
  let numSorted = 0
  let largest = null

  /* numSorted counts the amount of completed sorted numbers
  Once numSorted is equal to the length, all numbers have
  been sorted */
  while (numSorted < numCount) {
    /* second while loop handles moving items from 
    firstStack to secondStack */
    while (firstStack.length > numSorted) {
      if (largest === null) {
        largest = firstStack.pop()
      } else if (firstStack.slice(-1)[0] > largest) {
        secondStack.push(largest)
        largest = firstStack.pop()
      } else {
        secondStack.push(firstStack.pop())
      }
    }
    /* Once the first stack is empty, we have found the
    first largest, so push it to the first position in the
    first stack */
    firstStack.push(largest)
    /* Reset the largest back to null to prepare for the
    next sorting cycle */
    largest = null
    // increment the number of completed sorted numbers
    numSorted += 1

    /* This will move all the unsorted items back to the 
    first stack. */
    while (secondStack.length > 0) {
      firstStack.push(secondStack.pop())
    }
  }

  return firstStack
}

console.log(sortStack([1, 5, 3, 2, 5, 6, 7, 4]))