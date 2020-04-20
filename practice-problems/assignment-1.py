# Problem 2
# Given an array a of n numbers and a count k find the k largest values in the array a.
# Example: a=[5, 1, 3, 6, 8, 2, 4, 7], k=3  ⇒  [6, 8, 7]

# assume they are all positive
# assume they are all integers
# assume all numbers are unique 

# create a new array to store largest numbers
# loop through array a
# compare value to values in array a 
# if largest_nums is less than k, automatically add the number to the array

# if largest_nums size is equal to k, compare current num to the smallest num/or all nums in largest_nums

# replace current num with smallest num in largest_nums
# otherwise loop to next number


def is_sorted(a):
    if a == sorted(a):
        return True
    return False
# #return the largest_nums array 
def largest_nums(a, k):
    
# loop through array a
    while not is_sorted(a): 
        for i in range(len(a) - 1):
        # compare current num to next num
        # if current num is larger than next num, swap their positions
            if a[i] > a[i + 1]: 
                a[i], a[i + 1]  = a[i + 1], a[i]

    return a[-k:]

print(largest_nums([5, 1, 3, 6, 8, 2, 4, 7], 3))

    
    
# otherwise continue 
# return last three values of a in their own array 
