// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return reversedStr = str.split('').reverse().join('');
};

const reverseTwo = (str) => {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
};

const reverseThree = (str) => {
    
    // reduce args = acc / currentval / currentindex / array

    // str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');

    return str.split('').reduce((reverse, character) => character + reverse, '');
};

module.exports = reverse;

module.exports = reverseTwo;

module.exports = reverseThree;
