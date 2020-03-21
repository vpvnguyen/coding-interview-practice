// Write a function called "same" which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in
// the second array.
// The frequency of values must be the same.
// Order does not matter.

// Example:
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

const same = (arr1, arr2) => {
    // check if arr1 length === arr2 length
    if (arr1.length !== arr2.length) {
        return 'arr1 length isnt equal to arr2 length'
    }

    // import array map function
    const charMap1 = arrToMap(arr1);
    const charMap2 = arrToMap(arr2);

    // iterate through each key in first map
    // check if that key squared is in second map
    for (let key in charMap1) {
        // if the key squared is not in charMap2, return false
        if (!(key ** 2 in charMap2)) {
            return 'charMap1 squared is not in charMap2'
        }

        // check vice versa. if key in charMap2 squared is not in charMap1
        if (charMap2[key ** 2] !== charMap1[key]) {
            return 'charMap2 squared is not in charMap1'
        }
    }

    return true
};

const arrToMap = arr => {

    const newMap = {};
    for (let char of arr) {
        newMap[char] = (newMap[char] || 0) + 1;
    }
    console.log(newMap)
    return newMap;
}

console.log(same([1, 2, 3], [1, 4, 9]))