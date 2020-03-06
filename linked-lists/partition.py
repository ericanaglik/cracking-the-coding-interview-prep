'''*********************************************************
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
************************************************************

******************** BIG O NOTATION ************************
O(n) because it moves through the linkedlist only once,
doing O(1) operations of deleting and prepending
*********************************************************'''

def partition(ll, p_num):
    ''' Loops through the linkedlist, if the item is smaller
    than partition num, move it to the front.
    I originally moved it to the back but it caused an 
    infinite cycle duh moment. 
    therefore by the end of the loop, all small items have
    been shifted up front, and larger items left
    at the back creating a 'pivot' look in the list. 
    '''
    # Simple loop to go through once
    current = ll.head
    while current is not None:
        next_node = current.next
        # deciding whether to move the item up front
        if current.value < p_num:
            held_val = current.value
            # Learned this trick by solving "deleteMiddleNode.js"
            current.value = next_node.value
            current.next = next_node.next
            ll.prepend(held_val)
        else:
            current = next_node
    return ll