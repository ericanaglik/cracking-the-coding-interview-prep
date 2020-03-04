'''*********************************************************
10.2: Group Anagrams - Write a method to sort an array of 
strings so that all the anagrams are next to each other.
************************************************************

********************* BIG O NOTATION ***********************
n = len(words)
m = average len(word)
Looping through words and each word is O(n * m)
*********************************************************'''
from collections import defaultdict

def group_anagrams(words):
    # use a default dict with default value empty list so we
    # can store anagrams together
    group_dict = defaultdict(lambda:[])
    # create an empty list for the answer 
    answer = []
    # loop over each word
    for word in words:
        # default dict with default value zero for 
        # incrementing frequencies
        frequency_dict = defaultdict(lambda:0)
        # count the frequencies of the letters in each word
        for char in word:
            frequency_dict[char] += 1
        # key is the sorted items of a dictionary of the 
        # frequencies turned into a tuple so it can be 
        # hashed for use in group dict
        key = tuple(sorted(frequency_dict.items()))
        group_dict[key].append(word)

    # loop over the dictionary and append all results to the
    # ordered list
    for value in group_dict.values():
        # use extend instead of append because we want all 
        # the values in the list to be appended
        answer.extend(value)

    return answer

    

# Tests 
print("Problem 10.2 Group Anagrams")
print(group_anagrams(['tabs', 'act', 'god', 'cat', 'stab', 'dog', 'bats']))
# -> returns ['tabs', 'stab', 'bats', 'act', 'cat', 'god', 'dog']