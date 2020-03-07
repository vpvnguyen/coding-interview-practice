// Frequency Counter - validAnagram

// Given two strings, write a fucntion to determin if the second string is an anagram of the first.

// Examples:
// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true

// Note: You may assume the string contains only lowercase alphabets
// Time Complexity - O(n)

// =========================

// create a helper function that will build a character map and count all the characters by frequency of the given string

const str1 = "anagram";
const str2 = "nagaram";

const buildMap = str => {
  const charMap = {};

  // loop through string and add it to charMap. Increment if a character for each occurrence
  for (let char of str) {
    // if character in map exists, increment the count of that character. else, add the character with a count of 1
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

console.log(buildMap(str1));
console.log(buildMap(str2));

// create a function that will compare the two character maps. return true if they are anagrams

const validAnagram = (str1, str2) => {
  // use helper buildMap to create maps of both strings to be compared
  const charMap1 = buildMap(str1);
  const charMap2 = buildMap(str2);

  // check if lengths are equal. if they are not, return false
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    console.log("lengths do not match");
    return false;
  }

  // loop through a charMap and check if it is equal to the other charMap
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      console.log("character frequency do not match. return false");
      return false;
    }
  }

  console.log("character frequency matches. TRUE");
  return true;
};

validAnagram("aaz", "aza");
