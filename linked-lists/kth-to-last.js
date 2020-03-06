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