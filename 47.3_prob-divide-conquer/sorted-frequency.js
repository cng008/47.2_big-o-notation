/**sortedFrequency

Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

// LINEAR SEARCH
// function sortedFrequency(arr, target) {
//   let count = 0;
//   for (let i in arr) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// BINARY SEARCH
function sortedFrequency(arr, target) {
  let first = getFirst(arr, target);
  if (first === -1) return first;
  let last = getLast(arr, target);
  return last - first + 1;
}

// index of the first occurrence of val in arr
function getFirst(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    // get the middle index
    let mid = Math.floor((high + low) / 2);
    if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
      return mid;
      // checks if number at mid is less than target
    } else if (target > arr[mid]) {
      // If element is not first val, ignore left side of arr
      return getFirst(arr, target, mid + 1, high);
    } else {
      // else ignore right side of arr
      return getFirst(arr, target, low, mid - 1);
    }
  }
  return -1; // target doesn't occur in the array
}

// index of the last occurrence of val in arr
function getLast(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((high + low) / 2);
    if (
      (mid === arr.length - 1 || target < arr[mid + 1]) &&
      arr[mid] === target
    ) {
      return mid;
    } else if (target < arr[mid]) {
      return getLast(arr, target, low, mid - 1);
    } else {
      return getLast(arr, target, mid + 1, high);
    }
  }
  return -1;
}
module.exports = sortedFrequency;
