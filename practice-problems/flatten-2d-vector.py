'''*********************************************************
Flatten 2D Vector - 
Design and implement an iterator to flatten a 2d vector. 
It should support the following operations: next and hasNext

EXAMPLE
Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false

NOTES
1. Please remember to RESET your class variables declared in
Vector2D, as static/class variables are persisted across 
multiple test cases. Please see here for more details.
2. You may assume that next() call will always be valid, 
that is, there will be at least a next element in the 2d 
vector when next() is called.
*********************************************************'''

class Vector2D:

    def __init__(self, v: List[List[int]]):
        all_nums = []
        for num_list in v:
            for num in num_list:
                all_nums.append(num)
        
        self.new_list = [str(num) for num_list in v for num in num_list]
        
        self.position = 0
        
    def next(self) -> int:
        self.position += 1
        return self.new_list[self.position - 1]

    def hasNext(self) -> bool:
        return self.position < len(self.new_list)


# Your Vector2D object will be instantiated and called as such:
# obj = Vector2D(v)
# param_1 = obj.next()
# param_2 = obj.hasNext()

