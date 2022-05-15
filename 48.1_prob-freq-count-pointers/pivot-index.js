/** accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right
 * If there are more than one valid pivot index, return the smallest value.
 * Time Complexity: O(N)
 
pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) // -1  no valid pivot index
pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2
 */

function pivotIndex(nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i - 1] || 0;
    sum -= nums[i];
    if (currentSum === sum) {
      return i;
    }
  }
  return -1;
}

// ALTERNATE SOLUTION
//   function pivotIndex(nums) {
//     let rightSum = nums.reduce((a, b) => a + b, 0);
//     let leftSum = 0;
//     let pivotIdx = -1;
//     for (let i = 0; i < nums.length; i++) {
//       leftSum += nums[i];
//       if (leftSum === rightSum) {
//         pivotIdx = i;
//         break;
//       }
//       rightSum -= nums[i];
//     }
//     return pivotIdx;
//   }
