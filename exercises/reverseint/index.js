// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// example of converting a number to sting, splitting into an array, and back to str
const myNumber = 200;
const numToStr = myNumber.toString().split('').join('');
console.log(typeof numToStr);

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    // return the reversed string as a number * the sign of the original n input
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
