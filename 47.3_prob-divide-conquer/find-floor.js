/**findFloor

Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Time Complexity: O(log N)

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
Constraints
 */

// BINARY SEARCH
function findFloor(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (arr[high] < target) return arr[high];

  let mid = Math.floor((high + low) / 2);

  if (arr[mid] === target) return arr[mid];

  if (arr[mid] < target && arr[mid + 1] > target) {
    return arr[mid];
  }

  if (arr[mid] > target) {
    return findFloor(arr, target, low, mid - 1);
  }

  return findFloor(arr, target, mid + 1, high);
}

module.exports = findFloor;
