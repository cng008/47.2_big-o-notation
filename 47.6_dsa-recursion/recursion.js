/** product: calculate the product of an array of numbers.
 * product([2, 3, 4])  // 24
 * Takes O(n) time
 */

function product(nums, i = 0) {
  // Base case
  if (nums.length === i) return 1;
  // Normal case
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words.
 * longest(["hello", "hi", "hola"])  // 5
 * Takes O(n) time
 */

function longest(words, i = 0, longestWord = 0) {
  // Base case
  if (words.length === i) return longestWord;
  // Normal case
  longestWord = Math.max(words[i].length, longestWord);
  return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter.
 * everyOther("hello")  // "hlo"
 * Takes O(n) time
 */

function everyOther(str, i = 0) {
  // Base case
  if (str.length <= i) return '';
  // Normal case
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not.
 * isPalindrome("tacocat")  // true
 * isPalindrome("tacodog")  // false
 * Takes O(n) time
 */

function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base case
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  // Normal case
  return isPalindrome(str, start + 1, end - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present).
 * let animals = ["duck", "cat", "pony"];
 * findIndex(animals, "cat");  // 1
 * findIndex(animals, "porcupine");   // -1
 * Takes O(n) time
 */

function findIndex(arr, val, i = 0) {
  // Base case
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  // Normal case
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse.
 * revString("porcupine") // 'enipucrop'
 * Takes O(n) time
 */

function revString(str, i = str.length - 1) {
  // Base case
  if (i < 0) return '';
  // Normal case
  return str[i] + revString(str, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. 
 * let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
 * Takes O(n) time
*/

function gatherStrings(obj) {
  let stringArr = [];
  // Degenerate case
  for (let key in obj) {
    if (typeof obj[key] === 'string') stringArr.push(obj[key]);
    if (typeof obj[key] === 'object')
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * Takes O(log n) time
 * */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  // Base case
  if (arr.length === 0) return -1; // only one element left
  if (val < arr[low] || val > arr[high]) return -1; // target not in arr

  // Normal case
  while (high >= low) {
    // find middle value
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] > val) {
      return binarySearch(arr, val, low, mid - 1);
    } else if (arr[mid] < val) {
      return binarySearch(arr, val, mid + 1, high);
    } else {
      return mid;
    }
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
