/**findRotatedIndex

Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
 */

/** LINEAR SEARCH */
// function findRotatedIndex(arr, target) {
//   for (let i of arr) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

/** BINARY SEARCH */

function findRotatedIndex(arr, target) {
  let pivot = findPivot(arr);
  if (pivot > 0 && target >= arr[0] && target <= arr[pivot - 1]) {
    return binarySearch(arr, target, 0, pivot - 1); // search left side
  } else {
    return binarySearch(arr, target, pivot, arr.length - 1); // search right side
  }
}

function binarySearch(arr, target, start, end) {
  if (arr.length === 0) return -1; // only one element left
  if (target < arr[start] || target > arr[end]) return -1; // target not in arr

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid; // end loop
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

/* Function to get pivot.*/
function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

module.exports = findRotatedIndex;
