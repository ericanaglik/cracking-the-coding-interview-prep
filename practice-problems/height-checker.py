'''*********************************************************
Height Checker - 
Students are asked to stand in non-decreasing order of
heights for an annual photo.

Return the minimum number of students that must move in 
order for all students to be standing in non-decreasing
order of height.

EXAMPLE
Input: heights = [1,1,4,2,1,3]
Output: 3

CONSTRAINTS
1 <= heights.length <= 100
1 <= heights[i] <= 100
*********************************************************'''

class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        # max_height = 0
        # move_count = 0
        # # loop through heights
        # for height in heights:
        #     # compare current height to max height
        #     # if current height < max height
        #     if height < max_height:
        #         move_count += 1
        #     elif height > max_height:
        #         # current height becomes max height 
        #         max_height = height
        # return move_count
        move_count = 0
        in_order = sorted(heights)
        for height, s_height in zip(heights, in_order):
            if height != s_height:
                move_count += 1
        return move_count