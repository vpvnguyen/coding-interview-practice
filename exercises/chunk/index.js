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
  return chunked;
}


// solution 2 - slice
const chunkTwo = (array, size) => {
    // create empty array to hold chunks
    const chunked = [];

    // set position of index each time we iterate through array
    let index = 0;

    // while - index position is less than the array length,
    // push the index position compared to the index position + chunk size (to get to chunk position)
    // add size to index to make a new index position after iteration
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
};

module.exports = chunk;

module.exports = chunkTwo;