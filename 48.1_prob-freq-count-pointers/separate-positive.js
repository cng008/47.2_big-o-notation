/** accepts an array of non-zero integers
 * Separate the positive integers to the left and the negative integers to the right
 * Time Complexity: O(N)

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -8, -1]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
 */

function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;

  // loop over each number in nums
  while (start < end) {
    if (nums[start] < 0 && nums[end] > 0) {
      // swap start and end numbers if start is - AND end is +
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    } else {
      if (nums[start] > 0) start++;
      else end--;
    }
  }

  return nums;
}
