'''*********************************************************
Split Strings - 
Complete the solution so that it splits the string into
pairs of two characters. If the string contains an odd 
number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

EXAMPLE
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
*********************************************************'''

def solution(s):
    # List 1 uses slicing to make a list using every second letter, starting at the first letter
    list1 = list(s[::2])
    # List 2 starts at the second letter (index 1) and does every second letter from there
    list2 = list(s[1::2])
    # If the lengths of the list are not equal, there is an odd number of letters 
    if len(list1) != len(list2):
        # therefore append an underscore to the second list
        list2.append('_')
    # Zip the lists to create a new list with each element paired together
    answer = zip(list1, list2)
    # Use list comprehension to loop through the pairs and join them into one string
    return [''.join(pair) for pair in answer]