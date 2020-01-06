// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// =====================================================
// common string questions uses this type of solution
// what is the most common character in a string?
// Does a string have the same characters as another string? (anogram)
// Does the given string have any reapeated characters in it?


function maxChar(str) {
    // iterate through string, and assign a property to each value
    // helper variables
    // iterate through charMap and set max
    const charMap = {};
    let max = 0;
    let maxChar = '';

    // create character map for the occurrences of each value seen
    for (let char of str) {
        // for every character, add entry to charMap
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    console.log(charMap);

    // iterate through charMap and find the characters with the highest count
    for (let char in charMap) {
        if (charMap[char] > max) {

            // max is now this position in the charMap
            // set the max char as the one found since it will always count up and filter out the small ones
            max = charMap[char];
            maxChar = char;
        }
    }

    return  maxChar;
}

module.exports = maxChar;
