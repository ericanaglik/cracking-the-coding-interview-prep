'''*********************************************************
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
************************************************************

********************* BIG O NOTATION ***********************
O(n + m) because it moves 1 place at a time on each, and if 
one empties first, finishes looping through the other one 
for carry over reasons
*********************************************************'''

def sum_lists(ll_1, ll_2):
    ''' Creates a new linked list by summing 2 other linked list placewise. '''
    # To hold a carry over 1 or 0
    placeholder = 0
    # New linkedlist to return
    sum_ll = LinkedList()
    current_1 = ll_1.head
    current_2 = ll_2.head
    # Loop while there are still items in both lists to add together
    while current_1 is not None and current_2 is not None:
        # new placeholder is the sum + the old carry over // 10 (either 0 or 1)
        # num is the remainder: sum + old % 10, this is what gets put at that place
        placeholder, num = divmod(current_1.value + current_2.value + placeholder, 10)
        # put it in its place
        sum_ll.append(Node(num))
    # If there are any remaining places that need to be added
    remaining_node = current_1 if current_1 is not None else current_2
    # using another while loop instead of just connecting them because
    # the possibility of a cascading placeholder (think 999 to 1000)
    while remaining_node is not None:
        # same as before
        placeholder, num = divmod(remaining_node.value + placeholder, 10)
        sum_ll.append(Node(num))
    # Any remaining placeholder gets stuck on the front (think 50 + 50)
    if placeholder > 0:
        sum_ll.append(Node(placeholder))
    return sum_ll