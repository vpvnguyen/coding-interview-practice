// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // use helper function and build a map for each string
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    // iterate through charMap
    for (let char in charMapA) {
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

module.exports = anagrams;

