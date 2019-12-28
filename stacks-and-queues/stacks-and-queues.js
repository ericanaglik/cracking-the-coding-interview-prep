const Deque = require('./deque')
/***********************************************************
3.1: Three in One - Describe how you could use a single
array to implement three stacks.
***********************************************************/

/************************ ANSWER ***************************
I would have three markers that mark where each stack ends.
If I wanted to add something to a stack I would insert the
item before the ending marker for that stack. Then I would
increment all the markers to the right of the item I 
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

class setOfStacks{
  constructor(max_size){
    this.current_stack = new Array()
    this.max_size = max_size
    this.stacks = new Array()
  }

  is_full(stack){
    return (stack.length >= this.max_size)
  }

  is_empty(stack){
    return (stack.length === 0)
  }
  
  push(data) {
    if (this.is_full(this.current_stack)){
      this.stacks.push(this.current_stack)
      this.current_stack = null
    }
    if (this.current_stack === null){
      this.current_stack = new Array()
    }
    this.current_stack.push(data)
  }

  pop(data) {
    if(this.is_empty(this.current_stack)){
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

***********************************************************/

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

***********************************************************/