
# What I Learned from Arrays and Strings Challenges

## Sets

I learned how to implement and use sets in Javascript along with their built in functions.
I used sets in **isUnique()** and **zeroMatrix()** because of
their fast lookup time and because hashing has a side effect
of removing duplicates, which can be beneficial to some problems.

## Dictionaries

I learned that all objects in javascript are dictionaries. Before,
I had only had experience using dictionaries in Python. I used
dictionaries in **checkPermutation()** and **palindromePermutation()**
where i used the helper function **stringToDict()** in both challenges
to easily count the occurrences of each letter in a word.

``` javascript
function stringToDict(s) {
  let dict = new Object()
  // iterates through the string
  for (let i = 0; i < s.length; i++) {
    // grabs the current character
    let c = s.charAt(i)
    /* if its not in the dictionary, add it and set its 
    value to 0 */
    if (c in dict === false) {
      dict[c] = 0
    }
    // add another occurrence to the key's value
    dict[c]++
  }
  return dict
}
```

## String Methods

I learned about built in javascript string methods such as
**.charAt()**, **.split()**, **.toLowerCase()**. I also learned
how to turn other data types to strings by using methods like
**.toString()** which turns an int into a string, and **.join()**
which turns an array into a string.

## Different types of For Loops in Javascript

- The classic for loop best used to iterate over the length of something

``` javascript
for (let i = 0; i < s.length; i++)
```

> From 1.1: isUnique()

- The for loop that is great for looping over the keys and values of an object

``` javascript
for (key in dict)
```

> From 1.4: palindromePermutation()

- The for loop that is the equivalent to **enumerate()** in Python, that is best used when you want to use both the index and the value at that index

``` javascript
for(let [rowIndex, row] of matrix.entries())
```

> From 1.8: zeroMatrix()

- The for each loop that allows you to call a function on each element of your iterable

``` javascript
rowsSet.forEach(myFunction)
```

> From 1.8: zeroMatrix()

- The for each loop that allows you to call a function on each element of your iterable

``` javascript
rowsSet.forEach(myFunction)
```

## Different Ways to Write a Function

- The default function, used for making main functions with good readability and comments

``` javascript
function functionName(parameters){
```

> From all challenges

- The fat arrow function, used for very small functions that you want to establish inline

``` javascript
parameters => {
```

> From 1.8: zeroMatrix()
