// Takes O(n^2) time

function selectionSort(array) {
  const arr = array.slice(); // make copy of array to prevent overwriting original array

  // looks for first smallest element in arr
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // continues looking for smallest element in arr
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // updates min index and ignores alread found minIndex
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

module.exports = selectionSort;
