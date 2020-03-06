'''*********************************************************
2.7: Intersection - Given two (singly) linked lists,
determine if the two lists intersect. Return the
intersecting node. Note that the intersection is defined
based on reference, not value. That is, if the kth node of
the first linked list is the exact same node (by reference)
as the jth node of the second linked list, then they are
intersecting.
***********************************************************/

/******************** BIG O NOTATION ***********************
O(n + m) where n = len(ll_1) and m = len(ll_2), because it 
at most loops over both things once before they both become 
none at the same time ending the loop

Space complexity: O(1) only looks at one node at a time 
*********************************************************'''

def intersection(ll_1, ll_2):
    ''' Interesting idea I thought of while following the 2 
    lists with my hands!
    Move both currents through the lists at the same time. 
    If either one reaches the end start it at the start of 
    the opposite. Weird I know, but its because moving them 
    both at the same time causes them to become offsets of 
    each other. After one cycle on each they are now flipped
    and both in the correct "starting" position, and can 
    step until they find each other.
    '''
    current_1 = ll_1.head
    current_2 = ll_2.head
    # The only time they are both None is when they are the same size
    # and there is no connection, or it stepped entirely through both.
    while current_1 is not None and current_2 is not None:
        # Flip the first to the second
        if current_1 is None:
            current_1 = ll_2.head
        # Flip the second to the first
        if current_2 is None:
            current_2 = ll_1.head
        # If they find each other (using next pointer) return it!
        if current_1.next == current_2.next:
            return current_1.next
    # If not found
    return None