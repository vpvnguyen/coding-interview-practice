// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // set result as the capitalized first character of string
    // you can read index of a string using [i]
    let result = str[0].toUpperCase();

    // iterate from 1, to the length of the string
    for (let i = 1; i < str.length; i++) {

        // look to left of current character
        // if it is a space, then take current character we are looking at, uppercase it, and add it on to the result string 
        if (str[i - 1] === ' ') {
            // add uppercase to result
            result += str[i].toUpperCase();
        } else {
            // add unmodified character back to result
            result += str[i];
        }
    }

    console.log(`returned result: ${result}`);
    return result;
}

module.exports = capitalize;
