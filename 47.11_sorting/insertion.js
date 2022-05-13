//  Takes O(n^2) time

function insertionSort(array) {
  const arr = array.slice(); // make copy of array to prevent overwriting original array

  // start at index 1 so that we have something to compare to
  for (let i = 1; i < arr.length; i++) {
    // stops at first index
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
