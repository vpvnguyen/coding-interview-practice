// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True (punctuation should not affect anagram)
//   anagrams('Hi there', 'Bye there') --> False

// NOTES ======================================================
// regex - regular expressions
const words = "HI THERE!!!!!";
// replace special characters using regex \w
const replacedWords = words.replace(/[^\w]/g, "").toLowerCase();
console.log(replacedWords);

// pull out keys inside object
const object = {
    a: 1,
    b: 2,
    c: 3,
};

const getKeys = Object.keys(object).length;
console.log(getKeys);

// SOLUTION 1 ==================================================
// character maps
// if we build a character map of hello, we will have the same map as if all the words were scrambled
const stringA = 'hello';
const stringB = 'olleh';

// solution
// can build 2 for loops for stringA and stringB but you can also write a helper function to build a character map
const buildCharMap = str => {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
};

// use helper function in solution function
const anagram = (stringA, stringB) => {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    // check if keys for both maps have the same keys and length
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        // return false if it is not an anagram
        return false;
    }

    // iterate over a map and compare to other map
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            // if doesnt match or not in position, return false - not an anagram
            return false;
        }
    }

    // return true if cases above does not match - must be anagram
    return true;
};

console.log(anagram(stringA, stringB));


// SOLUTION 2 ==================================================
// create array 
const numbers = [10, 20, 5, -90, 1];
const sortedNums = numbers.sort();
console.log(sortedNums); // [-90, 1, 5, 10, 20]

// sort method can be used with characters as well
const characters = ['z', 'c', 'b', 'a'];
const sortedChars = characters.sort();

// solve anagram using sort. start by helper function
const cleanStr = str => {
    return str.replace(/[^\w]/g, '')/toLowerCase().split('').sort().join('');
};

console.log(cleanStr(stringA));
console.log(cleanStr(stringB));

const anagramTwo = (stringA, stringB) => {};
