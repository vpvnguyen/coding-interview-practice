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
  // create a character map to store character and count (property : value)
  const charMap = {};
  // initialize max num as 0 to add to this num while iterating through the character map for highest value
  let max = 0;
  // initialize string to store character thats most common
  let maxChar = "";

  // iterate through the given string and store its properties and occurrences in the character map
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  console.log(charMap);

  // iterate through character map and find the max number
  // if character in character map is greater than max, set the max as its value and set the maxChar string to that charater
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxChar("abcccccccd"));
