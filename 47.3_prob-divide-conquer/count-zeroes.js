/**countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
 */

// LINEAR SEARCH
function countZeroes(arr) {
  let count = 0;
  for (let num of arr) {
    if (num === 0) {
      count++;
    }
  }
  return count;
}

// BINARY SEARCH
function countZeroes(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    // get the middle index
    let mid = Math.floor((high + low) / 2);

    // check if the element at middle index is first 0
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return arr.length - mid;
    } else if (arr[mid] === 1) {
      // If element is not first 0, recur for right side
      return countZeroes(arr, mid + 1, high);
    } else {
      // else recur for left side
      return countZeroes(arr, low, mid - 1);
    }
  }
  return 0;
}

module.exports = countZeroes;
