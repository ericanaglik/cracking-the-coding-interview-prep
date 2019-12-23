const LinkedList = require('./linked-list')
/***********************************************************
2.1: Remove Dups - Write code to remove duplicates from an
unsorted linked list.

FOLLOW UP: How would you solve this problem if a temporary
buffer is not allowed?
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

// function removeDups(ll){

// }

// Tests
// let linkedList1 = new LinkedList(1,2,1,1,3)
// console.log("Problem 2.1 Remove Dups")
// console.log(removeDups(linkedList1))


/***********************************************************
2.2: Return Kth to Last - Implement an algorithm to find the
kth to last element of a singly linked list.
***********************************************************/

/******************** BIG O NOTATION ***********************
kthToLast() is O(n - k) where n is the length of the list
and k is the desired position
***********************************************************/

function kthToLast(ll, k){
  /* We want to access the kth position from the last node,
  so we subtract the length by k to get the number of
  iterations we need to do through the linked list */
  let position = ll.length - k
  // set the current node to be the head node
  let currNode = ll.head
  // move the current node until you get to the position
  for(let i = 1; i < position; i++){
    currNode = currNode.next
  }
  // return the Kth to last's node's value
  return currNode.value
}

// Tests 
let testKthToLast = new LinkedList(1,2,1,1,3,4,5,6)
console.log("Problem 2.2 Return Kth to Last")
console.log(kthToLast(testKthToLast,1)) // -> returns 5

/***********************************************************
2.3: Delete Middle Node - Implement an algorithm to delete
a node in the middle (i.e., any node but the first and last
node, not necessarily the exact middle) of a singly linked
list, given only access to that node.

EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks
like a->b->d->e->f
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/
function deleteMiddleNode(node){
  node.value = node.next.value
  node.next = node.next.next
}

// Tests
let testDeleteMiddleNode = new LinkedList(1,2,1,1,3,4,5,6)
let nodeToDelete = testDeleteMiddleNode.find(3)
// Do later, need to improve linked list class
console.log("Problem 2.3 Delete Middle Node")

/***********************************************************
2.4: Partition - Write code to partition a linked list
around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is
contained within the list, the values of x only need to be
after the elements less than x (see below). The partition
element x can appear anywhere in the "right partition"; it
doesn't need to appear between the left and right partitions

EXAMPLE
Input: 3->5->8->5->10->2->1 [partition=5]
Output: 3->1->2->10->5->5->8
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

/***********************************************************
2.5: Sum Lists - You have two numbers represented by a
linked list, where each node contains a single digit. The
digits are stored in reverse order, such that the 1's digit
is at the head of the list. Write a function that adds the
two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7->1->6) + (5->9->2). That is, 617 + 295.
Output: 2->1->9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the
above problem.
EXAMPLE
Input:(6->1->7) + (2->9->5). That is, 617 + 295.
Output: 9->1->2. That is, 912.
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

/***********************************************************
2.6: Palindrome - Implement a function to check if a linked
list is a palindrome.
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

/***********************************************************
2.7: Intersection - Given two (singly) linked lists,
determine if the two lists intersect. Return the
intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of
the first linked list is the exact same node (by reference)
as the jth node of the second linked list, then they are
intersecting.
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/

/***********************************************************
2.8: Loop Detection - Given a circular linked list,
implement an algorithm that returns the node at the
beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a
node's next pointer points to an earlier node, so as to make
a loop in the linked list.

EXAMPLE
Input: A->B->C->D->E->C [the same C as earlier]
Output: C
***********************************************************/

/******************** BIG O NOTATION ***********************

***********************************************************/