'''*********************************************************
10.1: Sorted Merge - You are given two sorted arrays, A and 
B, where A has a large enough buffer at the end to hold B. 
Write a method to merge B into A in sorted order.
************************************************************

********************* BIG O NOTATION ***********************
n = len(a)
m = len(b)
O(max(n, m) * nm) because the while loop is as long as the
longest list and you multiply by nm because in order to
remove an item from the beginning of b and insert it into a,
you need to shift over both arrays to account for the
missing/added num.
*********************************************************'''

def sorted_merge(a, b):
    # if there is nothing in b, don't modify a
    if len(b) == 0:
        return

    # instantiate index at 0
    index = 0
    # loop as long as index doesn't pass a and there are items in b
    while index + 1 < len(a) and len(b) > 0:
        # if the smallest number in b is greater than a[index] and the next num in a
        if a[index] <= b[0] and b[0] < a[index + 1]:
            # insert item from b in index + 1
            a.insert(index + 1, b.pop(0))
        # iterate the index 
        index += 1
    # if b still has items after looping through a, add them
    # to the end of a since they are already sorted
    if len(b) != 0:
        a+= b


# Tests 
print("Problem 10.1 Sorted Merge")
a1, b1 = [1, 5, 9, 11, 15], [2, 3, 8, 13]
sorted_merge(a1, b1)
print(a1) # -> returns [1,2,3,5,8,9,11,13,15]

a2, b2 = [1,2,3,4,5], [1,2,3,4,5]
sorted_merge(a2, b2)
print(a2) # -> returns [1,1,2,2,3,3,4,4,5,5]

a3, b3 = [], []
sorted_merge(a3, b3)
print(a3) # -> returns []

a4, b4 = [], [1,2,3]
sorted_merge(a4, b4)
print(a4) # -> returns [1,2,3]
