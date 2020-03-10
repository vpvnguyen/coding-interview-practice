// Write a function which takes in a string and returns counts of each character in the string
let str = "Your PIN number is 1234";

const charCount = str => {
  // make an object to be returned at the end
  // loop through string
  // - if the char is a number/letter and is a key in object, add one to count
  // - if the char is a number/letter and is NOT in object, add it to the object and set value to 1
  // - if char is anything else (space, period, etc.) dont do anything
  // afterwards, return the object

  const result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] > 0) {
      // means its already in there. since its in there, increment the count of that char
      result[str[i]]++;
      console.log(
        `incrementing "${str[i]}" because it is already in the object`
      );
    } else {
      result[str[i]] = 1; // means its not in there yet. put the char in there and set it to 1
      console.log(`"${str[i]}" isnt in there, setting it to 1`);
    }
  }

  return result;
};

console.log(charCount(str));
