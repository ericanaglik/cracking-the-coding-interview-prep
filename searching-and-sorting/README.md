# What I Learned from Searching and Sorting Challenges

## Complexity Anaylsis 
I used max for the first time in a complexity analysis. Max when used for complexity means the largest possible number between the arguments. My completed complexity for [Sorted Merge](https://github.com/ericanaglik/cracking-the-coding-interview-prep/blob/master/searching-and-sorting/sorted-merge.py) ended up being **O(max(n, m) * nm)**

## Default Dict
I learned how to import and use default dict in Python. I decided to use a default dict instead of a regular dict on problem [Grouped Anagrams](https://github.com/ericanaglik/cracking-the-coding-interview-prep/blob/master/searching-and-sorting/group-anagrams.py) because it hides the complexity of checking whether an item is in the dictionary already and handles if its not. It keeps the number of indents down and keeps the code shorter. 
```python
group_dict = defaultdict(lambda:[])
```

## Sorted
Sorted in Python sorts any sequence and always returns a list with the elements in sorted order. The default is ascending order and it has a parameter for reversing. I used this in my [Grouped Anagrams](https://github.com/ericanaglik/cracking-the-coding-interview-prep/blob/master/searching-and-sorting/group-anagrams.py) function to match up all of the letters with their frequencies so I could check which ones were anagrams.

```python
key = sorted(frequency_dict.items())
 ```

## Casting a List to a Tuple
Since I wanted to use the sorted frequencies as a key to connect all of the anagrams, I needed something hashable (a list is mutable, not hashable). I casted to a tuple to make the key immutable. Therefore, I could use it as the key in **group_dict**.

```python
group_dict[tuple(key)].append(word)
```

## .extend()
I used extend instead of append because I wanted all the values in the list to be appended instead of appending a list. 

 ```python
 answer.extend(value)
 ```



