const Queue = require('./queue')
/***********************************************************
3.1: Three in One - Describe how you could use a single
array to implement three stacks.
***********************************************************/

/************************ ANSWER ***************************
I would have three markers that mark where each stack ends.
If I wanted to add something to a stack I would insert the
item before the ending marker for that stack. Then I would
increment a4ll the markers to the right of the item I 
inserted. If I wanted to remove something from the stack I
would find the marker that ends the stack and then pop the 
item from the left of the marker and then decrement every
marker to the right.
***********************************************************/

/***********************************************************
3.2: Stack Min - How would you design a stack which, in
addition to push and pop, has a function min which returns
the minimum element? Push, pop and min should all operate in
O(1) time. 
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

/***********************************************************
3.3: Stack of Plates - Imagine a (literal) stack of plates.
If the stack gets too high, it might topple. Therefore, in
real life, we would likely start a new stack when the
previous stack exceeds some threshold. Implement a data
structure setOfStacks that mimics this. setOfStacks should
be composed of several stacks and should create a new stack
once the previous one exceeds capacity. setOfStacks.push()
and setOfStacks.pop() should behave identically to a single
stack (that is, pop() should return the same values as it
would if there were just a single stack).

FOLLOW UP
Implement a function popAt(int index) which performs a pop
operation on a specific sub-stack.
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

class setOfStacks {
  constructor(max_size) {
    this.current_stack = new Array()
    this.max_size = max_size
    this.stacks = new Array()
  }

  is_full(stack) {
    return (stack.length >= this.max_size)
  }

  is_empty(stack) {
    return (stack.length === 0)
  }

  push(data) {
    if (this.is_full(this.current_stack)) {
      this.stacks.push(this.current_stack)
      this.current_stack = null
    }
    if (this.current_stack === null) {
      this.current_stack = new Array()
    }
    this.current_stack.push(data)
  }

  pop(data) {
    if (this.is_empty(this.current_stack)) {
      this.current_stack = this.stacks.pop()
    }
    return this.current_stack.pop()
  }
}

/***********************************************************
3.4: Queue via Stacks - Implement a myQueue class which
implements a queue using two stacks.
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

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

/***********************************************************
3.6: Animal Shelter - An animal shelter, which holds only
dogs and cats, operates on a strictly "first in, first out"
basis. People must adopt either the "oldest" (based on
arrival time) of all animals at the shelter, or they can
select whether they would prefer a dog or a cat (and will
receive the oldest animal of that type). They cannot select
which specific animal they would like. Create the data
structures to maintain this system and implement operations
such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You
may use the built-in LinkedList data structure.
***********************************************************/

/******************** BIG O NOTATION ***********************
enqueue - O(1) because all we do is check the species before
adding it to the queue

dequeueAny - O(1) because we just compare orderNum's which
is an O(1) operation once

dequeueDog - O(1) because we just return the oldest dog

dequeueCat - O(1) because we just return the oldest cat
***********************************************************/

class AnimalShelter {
  /* Initialize the empty queues for dogs and cats and set
  the order number to 1 */
  constructor() {
    this.dogQueue = Queue()
    this.catQueue = Queue()
    this.orderNum = 1
  }
  // Check the animals species to decide where to put it
  enqueue(animal) {
    /* If its a dog, add it to the dog queue and increment 
    the order number in preparation of the next animal */
    if (animal.species === 'dog') {
      this.dogQueue.enqueue((this.orderNum, animal))
      this.orderNum++
    /* Otherwise, its a cat. Add it to the cat queue and 
    increment the order number in preparation of the next 
    animal */
    } else {
      this.catQueue.enqueue((this.orderNum, animal))
      this.orderNum++
    }
  }
  /* Compare the oldest cat and dog, and return whichever
  one was put in the queue first. */
  dequeueAny() {
    if (this.dogQueue.peek()[0] < this.catQueue.peek()[0]) {
      return this.dequeueDog()
    } else {
      return this.dequeueCat()
    }
  }
  // Return the oldest dog
  dequeueDog() {
    return this.dogQueue.dequeue()
  }
  // Return the oldest cat
  dequeueCat() {
    return this.catQueue.dequeue()
  }
}