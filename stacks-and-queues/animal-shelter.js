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