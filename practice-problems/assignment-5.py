# Given a singly-linked list, find the middle value in the list.
# Example: If the given linked list is A → B → C → D → E, return C.
# Assumptions: The length (n) is odd so the linked list has a definite middle.

def middle_ll(ll):
    # create a variable that is the length of the linked list // 2 called middle
    middle = ll.size() // 2
    current = ll.head
    # loop through the linked list middle times
    for i in range(middle):
        current = current.next
    # once you reach the middle, return the value at that node
    return current.val

# Given a singly-linked list, reverse the order of the list by modifying the nodes’ links.
# Example: If the given linked list is A → B → C → D → E, nodes should be modified/rearranged so the list becomes E → D → C → B → A.

def reverse_ll(ll):
    # current variable assigned to the head
    current = ll.head
    # create a stack
    # put None in the stack so that when the reversal is complete, last node will point to None automatically
    stack = [None]
    # move through the ll adding nodes to the stack until there are no more
    while current is not None:
        stack.append(current)
        current = current.next
    # then pop the nodes out from the stack and have each node point to the next to be popped until there are no more
    while len(stack) > 0:
        current = stack.pop()
        current.next = stack[-1]


