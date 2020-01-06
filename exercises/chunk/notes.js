// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// pseudo
// create an empty array to hold chunks called 'chunked'
// for each element in the 'unchunked' array,
// - retrieve the last element in 'chunked'
// - if last element does not exist, or if its length is equal to chunk size,
// -- push a new chunk into 'chunked' with the current element
// - else, add the current element into the chunk

const array = [1, 2, 3];
const size = 2;

// solution 1 - iterate through array
function chunk(array, size) {
    // array to hold all chunks of data
    const chunked = [];
  
    // iterate through array
    for (let element of array) {
      const last = chunked[chunked.length - 1];
  
      // if last chunk does not exist or if index of array is the same as the chunk size, push a new element into chunked
      if (!last || last.length === size) {
        // rather than put new chunk inside, we can do both at the same time
        // push new chunk and the element we are iterating through
        chunked.push([element]);
      } else {
          // have chunk but not yet full
          // last is the current chunk we are working with
        last.push(element);
      }
    }
    return console.log(chunked);
  }
  
  chunk(array, size);
  
// solution 2 - slice

// slice example
const letters = ['a', 'b', 'c', 'd', 'e'];
const sliced = letters.slice(1, 3);
console.log(sliced); // ['b', 'c']

// create empty 'chunked' array
// create 'index' start at 0
// while index is less than array length,
// - push a slice of length size from array into chunked
// - add size to index

const chunkTwo = (array, size) => {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        // slice statement - take a slice out of the array
        // index = 0, 0 + 2 = 2
        chunked.push(array.slice(index, index + size));

        // set new position using size for next iteration
        index += size;
    }

    return console.log(chunked);
};

chunkTwo(array, size);