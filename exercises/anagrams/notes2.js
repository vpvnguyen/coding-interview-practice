// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const string1 = 'race car';
const string2 = 'car race';

// SOLUTION 1 - create a character map and check if each character matches the keys in the map
function anagrams(stringA, stringB) {
    // use helper function and build a map for each string
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    console.log(`charMapA ${charMapA}`);
    console.log(`charMapB ${charMapA}`);

    // first, check if the length is equal. if it is not equal, we already know that it cannot be an anagram
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    console.log(`object.keys ${Object.keys(charMapA)}`);
    console.log(`object.keys ${Object.keys(charMapB)}`);


    // iterate through charMap
    console.log(`start loop`)
    for (let char in charMapA) {
        console.log(`char: ${char}`);
        console.log(`charMapA[char]: ${charMapA[char]}`);
        console.log(`charMapB[char]: ${charMapB[char]}`);

        if (charMapA[char] !== charMapB[char]) {
            // if these do not line up, return false because its not an anagram
            return false;
        }
    }


    // if all conditions are met, return true for anagram
    return true;
};

// helper function to build a character map
const buildCharMap = str => {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
};

// SOLUTION 2 - create a function to clean up the string and sort it; compare both strings after passing through function
const anagramsTwo = (stringA, stringB) => {
    console.log(`\nanagrams2`);
    console.log(`cleanStr(stringA): ${cleanStr(stringA)}`);
    console.log(`cleanStr(stringB): ${cleanStr(stringB)}`);

    return cleanStr(stringA) === cleanStr(stringB);
};

// helper function to clean string using regex and sort method
const cleanStr = string => {
    console.log(`\ncleanStr`);
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

anagrams(string1, string2);

console.log(anagramsTwo(string1, string2))

