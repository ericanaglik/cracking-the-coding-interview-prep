'''*********************************************************
Peak Index in a Mountain Array - 
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

EXAMPLE
Example 1:
Input: [0,1,0]
Output: 1

Example 2:
Input: [0,2,1,0]
Output: 1

NOTES
1. 3 <= A.length <= 10000
2. 0 <= A[i] <= 10^6
3. A is a mountain, as defined above.
*********************************************************'''

class Solution:
    def peakIndexInMountainArray(self, A: List[int]) -> int:
        # Base Case
        if len(A) < 3:
            return None
        peak = None
        # Loop through the list getting indices
        # Len - 1 because we are looking at the next num and when you get to the end
        # there is no next num
        for i in range(len(A) - 1):
            current_num = A[i]
            next_num = A[i + 1]
            # If the next num is bigger than the current one, make the next one the peak
            if next_num > current_num:
                peak = i+1
            
            if peak is not None and A[peak] < next_num:
                return None
        return peak