# Rotate a given linked list counter-clockwise by k nodes, where k is a given integer.

# What clarifying questions would you ask?
# Is it a singly linked list or doubly linked?
# Is there a tail pointer or just a head pointer

# What reasonable assumptions could you state?
# I am assuming its a singly linked list and that there is a head pointer and a tail pointer

# What are 2-3 ways you can simplify the problem?
# Instead of rotating k nodes I could rotate once to simplify

# Brainstorm 2-3 ways to approach the problem.
# to rotate counter clockwise, get rid of the connection
# between the head and the second node, make the head the new
# tail and make the second node the new head

# Choose one idea and write pseudocode for it.

def rotate_ll(ll, k):
    # DO THIS K TIMES
    for i in range(k):
        # make a variable that points to the head node called current
        current = ll.head
        # set head to current.next
        ll.head = current.next
        # set currents next pointer to none
        current.next = None
        # make tail point to current instead of none
        ll.tail.next = current
        
    return ll


