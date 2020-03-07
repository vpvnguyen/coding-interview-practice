const validAnagram = (str1, str2) => {
  // if lengths of strings do not match, return false
  if (str1.length !== str2.length) {
    return false;
  }

  // create an empty object to store each character of string
  const lookup = {};

  // loop through the first string and add to lookup
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // loop through second string and compare each character of second string in the lookup object
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    // if character is not in the object, return false
    if (!lookup[letter]) {
      return false;
    } else {
      // if character is found, remove that letter
      lookup[letter] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("racecar", "carrace"));
