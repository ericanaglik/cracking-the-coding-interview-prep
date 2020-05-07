'''
Twitter Follow Suggestions
You’re working an internship at Twitter and are tasked to 
improve suggestions for accounts to follow, which already 
works great for established accounts because it uses content 
from your tweets and other accounts you follow to suggest 
new ones. However, when a new user signs up none of this 
information exists yet, but Twitter still wants to make some 
follow suggestions. Your team asked you to implement a 
function that accepts a new user’s handle and an array of 
many other users’ handles, which could be very long – 
Twitter has over 330 million active accounts! You need to 
calculate a similarity score between a pair of handles by 
looking at the letters each contains, scoring +1 for each 
letter in the alphabet that occurs in both handles but 
scoring –1 for each letter that occurs in only one handle. 
Your function should return k handles from the array that 
have the highest similarity score to the new user’s handle.

Example execution:
handles = ['DogeCoin', 'YangGang2020', 'HodlForLife', 'fakeDonaldDrumpf', 'GodIsLove', 'BernieOrBust']
suggest('iLoveDogs', handles, k=2)   should return   ['GodIsLove', 'DogeCoin']

'''
'''
ASSUMPTIONS: 
- handles can only contain capital/lowercase letters and numbers
- the score function is case insensitive 
- add + 1 for each occurrence of matching character
'''

'''
************************************************************
BIG O NOTATION: O(m*(n+l)) + O(m(log m) + k) where m is length
of handles, n, is length of username, and l is average length
of each handle, and k is k
************************************************************
'''
''' 
create a function that takes in a username, a list of handles,
and k which is the number of similar handles to return 
'''
def suggested_handles(username, handles, k):
    # create a return array to return k similar handles 
    result = []
    scores_list = scores(username, handles)
    sorted_scores = sorted(zip(scores_list, handles), key=lambda x: x[0])
    # loop through the score array and find the k largest scores
    for _, name in sorted_scores[-k:]:
        # append usernames to return array
        result.append(name)
    # return usernames 
    return result


'''
************************************************************
BIG O NOTATION: O(m*(n+k)) where m is length of handles, n, 
is length of username, and k is average length of each handle
************************************************************
'''
'''
create a second function which takes in the username and list of handles
and returns an array with the scores when comparing the username to each handle
'''
def scores(username, handles):
    result = []
    username_chars = set(username.lower())

    # loop through handles 
    for handle in handles:
        # create a set of the lowercase characters. a set gets rid of any duplicate characters
        handle_chars = set(handle.lower())
        # find the difference in all characters
        difference = username_chars ^ handle_chars # -> returns characters are not the same
        intersection = username_chars & handle_chars # -> returns characters in both 
        result.append(len(intersection) - len(difference)) # -> creates a score by subtracting number of different characters
    return result

print(suggested_handles("iLoveDogs", ['DogeCoin', 'YangGang2020', 'HodlForLife', 'fakeDonaldDrumpf', 'GodIsLove', 'BernieOrBust'], 2))


