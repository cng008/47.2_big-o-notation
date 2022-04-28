/**findFloor

Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Time Complexity: O(log N)

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints
 */

// LINEAR SEARCH
function findFloor(arr, target) {
  for (let i in arr) {
    while (target > arr[i]) {
      if (arr[i] === target) {
        return arr[i];
      } else {
        return arr[i - 1];
      }
    }
    return arr[i - 1];
  }
  return -1;
}

// BINARY SEARCH
function findFloor(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let midIdx = Math.floor((high + low) / 2);
    let mid = arr[midIdx];

    if (mid === target) {
      return mid;
    } else if (mid < target && arr[midIdx + 1] > target) {
      return mid;
    } else if (arr[high] < target) {
      return arr[high];
    } else if (mid > target) {
      return findFloor(arr, target, low, midIdx - 1);
    } else {
      return findFloor(arr, target, midIdx + 1, high);
    }
  }
  return -1;
}

module.exports = findFloor;
