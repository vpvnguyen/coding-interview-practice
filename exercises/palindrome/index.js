// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // function will return a true / false
    // take string and reverse it
    const reversedStr = str.split('').reverse().join('');

    // check if reversedStr is the same as str
    if (reversedStr === str) {
        return true;
    } else {
        return false;
    };

    // nicer way
    return reversedStr === str;
};

module.exports = palindrome;
