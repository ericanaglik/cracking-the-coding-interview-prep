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