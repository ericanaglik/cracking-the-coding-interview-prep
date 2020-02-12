def firstNotRepeatingCharacter(s):
    # create a set of chars seen once
    once_set = set()
    # create a set of chars seen more than once
    more_set = set()
    # loop through the chars
    for char in s:
        # check if char in first set, if so add to second set
        if char in once_set:
            more_set.add(char)
        # else, add to first set
        else:
            once_set.add(char)
    # at end of the loop, return the difference between both sets 
    diff = once_set - more_set
    if len(diff) == 0:
        return '_'
    return (once_set - more_set).pop()