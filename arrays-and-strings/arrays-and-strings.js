/* 1.1: Is Unique: Implement an algorithm to determine if a 
string has all unique characters. What if you cannot use 
additional data structures?*/


function isUnique(s) {
    let characters = new Set()
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i)
        if(characters.has(c)) {
            return false
        }
        characters.add(c)
    }
    return true
}

console.log(isUnique('abca'))
console.log(isUnique('kevin'))

