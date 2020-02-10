/***********************************************************
3.1: Three in One - Describe how you could use a single
array to implement three stacks.
***********************************************************/

/************************ ANSWER ***************************
I would have three markers that mark where each stack ends.
If I wanted to add something to a stack I would insert the
item before the ending marker for that stack. Then I would
increment a4ll the markers to the right of the item I 
inserted. If I wanted to remove something from the stack I
would find the marker that ends the stack and then pop the 
item from the left of the marker and then decrement every
marker to the right.
***********************************************************/