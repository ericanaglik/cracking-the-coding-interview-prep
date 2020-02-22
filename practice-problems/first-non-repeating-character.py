def firstNotRepeatingCharacter(s):
    # create a set of chars seen once
    once_dict = {}
    # create a set of chars seen more than once
    more_set = set()
    # loop through the chars
    for index, char in enumerate(s):
        # check if char in first set, if so add to second set
        if char in once_dict:
            more_set.add(char)
        # else, add to first set
        else:
            once_dict[char] = index
    # at end of the loop, return the difference between both sets 
    # diff is 
    diff = once_dict.keys() - more_set
    if len(diff) == 0:
        return '_'
    
    lowest_seen = diff.pop()
    for single in diff:
      if once_dict[single] < once_dict[lowest_seen]:
        lowest_seen = single

    return lowest_seen