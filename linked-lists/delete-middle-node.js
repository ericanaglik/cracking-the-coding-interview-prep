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
O(1) because overwrite curr node with next node
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