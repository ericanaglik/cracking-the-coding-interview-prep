'''*********************************************************
8.9: Parens - Implement an algorithm to print all valid 
(e.g., properly opened and closed) combinations of n pairs 
of parentheses.

EXAMPLE
Input: 3
Output: ((())), (()()), (())(), ()(()), ()()()
************************************************************

********************* BIG O NOTATION ***********************

*********************************************************'''

'''***************** MY OBSERVATIONS ***********************
Input: 1
Output: ()

Input: 2
Output: (()), ()()
'''

# ((()))

def parens(n, visit, s='', num_open=0, num_closed=0):
    if n == 0:
        visit('(' * num_closed + s + ')' * num_open)
        return
    
    parens(n-1, visit, s + '(', num_open+1, num_closed)
    parens(n-1, visit, s + ')', num_open, num_closed+1)

def parens_handler(n):
    return_list=[]
    parens(n, return_list.append)

    return list(set(return_list + ['()' * n]))

# ['(((', '(()', '()(', '())', ')((', ')()', '))(', ')))']
# (((


print(parens_handler(4))