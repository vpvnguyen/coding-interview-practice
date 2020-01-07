// make an empty array 'words'
// split the input string by spaces to get an array; pass in a space to split by space
// for each word in the array
// - split each item from string into an array
// - uppercase the first letter of the word
// - join first letter with rest of the string
// - push result into 'words' array
// return joined 'words' into a string

// Example
const string = 'Hi there it is me';

// make an empty array 'words'
const words = [];

// split the input string by spaces to get an array; pass in a space to split by space
const splitString = string.split(' ');
console.log(`string to array: ${splitString}`);

// for each word in the array
splitString.forEach(item => {

    // split item (string) to array
    const array = item.split('');

    // split string into an array; shift (first item) to isolate and make uppercase
    const firstCharacerUpperCase = item.split('').shift().toUpperCase();
    console.log(`first character uppercase: ${firstCharacerUpperCase}`);

    // my_array.splice(start_index, number_of_elements_to_remove, NUM TO INSERT);
    // put firstCharacterUpperCase back into array index [0], 1 value to remove, with the firstCharacterUppercase
    array.splice(0, 1, firstCharacerUpperCase);
    console.log(`new array: ${array}`); // [H,i] [T,h,e,r,e]

    // join new item array back into string
    const arrayToString = array.join('');
    console.log(`joined array: ${arrayToString}`);

    // push all new group of words into words array
    words.push(arrayToString);
});

const wordsToString = words.join(' ');
console.log(`Answer: ${wordsToString}`);
console.log(typeof wordsToString);