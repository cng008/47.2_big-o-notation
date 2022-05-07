/** product: calculate the product of an array of numbers.
 * product([2, 3, 4])  // 24
 * Takes O(n) time
 */

function product(nums) {
  let product = 1;
  for (let i of nums) {
    product *= i;
  }
  return product;
}

/** longest: return the length of the longest word in an array of words.
 * longest(["hello", "hi", "hola"])  // 5
 * Takes O(n) time
 */

function longest(words) {
  let longestWord = '';
  for (let i in words) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length;
}

/** everyOther: return a string with every other letter.
 * everyOther("hello")  // "hlo"
 * Takes O(n) time
 */

function everyOther(str, i = 0) {
  let newStr = '';
  while (i <= str.length - 1) {
    newStr += str[i];
    i += 2;
  }
  return newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not.
 * isPalindrome("tacocat")  // true
 * isPalindrome("tacodog")  // false
 * Takes O(n) time
 */

function isPalindrome(str) {
  if (str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present).
 * let animals = ["duck", "cat", "pony"];
 * findIndex(animals, "cat");  // 1
 * findIndex(animals, "porcupine");   // -1
 * Takes O(n) time
 */

function findIndex(arr, val) {
  for (let i in arr) {
    if (arr[i] === val) {
      return parseInt(i);
    }
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse.
 * revString("porcupine") // 'enipucrop'
 * Takes O(n) time
 */

function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  return Object.values(obj);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * Takes O(n) time
 * */

function binarySearch(arr, val) {
  for (let i in arr) {
    if (arr[i] === val) {
      return parseInt(i);
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
