// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let reversedStr = str
    .split("")
    .reverse()
    .join("");
  return reversedStr;
};

console.log(reverse("apple"));
console.log(reverse("hello"));
console.log(reverse("Greetings!"));
