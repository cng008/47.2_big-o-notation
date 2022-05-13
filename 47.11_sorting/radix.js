// Takes O(n * m) time

/** takes a number and a place */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/** counts how many digits are in each number */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/** take an array of numbers, loop over them and keep track of the digit count of the largest number */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// For each loop iteration:

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // Create an array of ten empty arrays: [[], [], [], [], [], [], [], [], [], []] - a bucket for each possible digit, from 0 to 9.
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);
      // Put each number in its corresponding bucket based on its digit at the kth place.
      digitBuckets[digit].push(num);
    }
    // Replace the existing array of numbers with the values in the buckets, starting from 0 and going up to 9. New order after each loop
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

module.exports = radixSort;
