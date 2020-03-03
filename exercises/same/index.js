// Write a function called "same" which accepts two arrays.
// The function should return true if every value in the array has its corresponding value squared in
// the second array.
// The frequency of values must be the same.
// Order does not matter.

// Example:
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// Naive solution O(n^2)
// using indexOf to check values in arrays nested within a loop is n * n
const same = (arr1, arr2) => {
  console.log(arr1, arr2);

  // check if length of array is the same. if it is not, this already fails.
  console.log(`arr1 has length of: ${arr1.length}`);
  console.log(`arr2 has length of: ${arr2.length}`);
  if (arr1.length !== arr2.length) {
    console.log("Both arrays do not have the same length. Return FALSE");
    return false;
  }

  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // check which index of arr2 is arr1's index squared. if -1, it's out of range.
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    // if index is out of range, it's a fail. return FALSE.
    if (correctIndex === -1) {
      console.log(`arr1's current index: ${arr1[i]}`);
      console.log(`arr2's current index: ${arr2[i]}`);
      console.log("Index is out of range. Return FALSE");
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  // all checks passed. return true since after squaring array1 and comparing to array2 is the same.
  console.log('Arrays are the same after squaring the values of arr1. TRUE.');
  return true;
};

same([1, 2, 3], [4, 1]); // false - fails on length check
same([1, 2, 3], [4, 1, 5]); // false - fails on index check
same([1, 2, 3], [4, 1, 9]); // true

console.log('\n ================ \n');

// refactored solution with time complexity of O(n)
const same2 = (arr1, arr2) => {
    // compare lengths of arrays. if mismatch, return false\
    if (arr1.length !== arr2.length) {
        console.log(`arr1 length: ${arr1.length}`);
        console.log(`arr2 length: ${arr2.length}`);
        console.log('Lengths are not equal. return FALSE');
        return false;
    }


    // create objects for values of both arrays
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // loop through arr1 and set frequency of each value of the array
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            console.log('value squared of arr1 does not match in arr2. return FALSE');
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            console.log('value squared of arr2 does not match in arr1. return FALSE');
            return false;
        }
    }

    console.log('Arrays are the same after squaring the values of arr1. TRUE.');
    return true;
};

same2([1, 2, 3], [4, 1]); // false - fails on length check
same2([1, 2, 3], [4, 1, 5]); // false - fails on index check
same2([1, 2, 3], [4, 1, 9]); // true