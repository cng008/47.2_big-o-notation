/** Given an array, bubbleSort will sort the values in the array
 * Takes O(n^2) time
 * */

function bubbleSort(array) {
  const arr = array.slice(); // make copy of array to prevent overwriting original array

  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

module.exports = bubbleSort;
