/** accepts two sorted arrays and returns a new array with values from both arrays sorted
 * Takes O(n + m) time and O(n + m) space
 */

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  // while both arrays still have space for our pointer to move
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++; // increment pointer
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // prints the rest of the unbalanced array
  // runs if j broke loop
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++; // increment to stop loop
  }
  // runs if i broke loop
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

/** sort the values in the array
 * Break up the array into halves until you can compare one value with another
 * Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
 * Once the array is merged back together, return the merged (and sorted!) array
 */
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
