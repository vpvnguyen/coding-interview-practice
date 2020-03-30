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

const maxChar = str => {
  const charMap = createCharMap(str);
  let maxNum = 0;
  let maxChar = "";
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

// helper function to create a characer map of string
const createCharMap = str => {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
};

console.log(maxChar("aabbbcccccdddddddddddd"));
