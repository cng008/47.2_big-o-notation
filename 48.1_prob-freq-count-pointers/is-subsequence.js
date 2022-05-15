/** takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string
 * Time Complexity - O(N + M)
 
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
 */

function isSubsequence(str1, str2) {
  let str1Idx = 0;
  if (!str1) return true;

  //go through every char of str2
  for (let i = 0; i < str2.length; i++) {
    //if current index of str2 is the beginning of a squence, check off str1Idx and move to next char
    if (str2[i] === str1[str1Idx]) {
      str1Idx++;
      if (str1Idx === str1.length) {
        // if at the last index of str1, return true
        return true;
      }
    }
  }
  return false;

  // ALTERNATIVE SOLUTION
  //   let str1Idx = 0;
  //   let str2Idx = 0;

  //   while (str2Idx < str2.length) {
  //     //go through every element of str1
  //     if (str2[str2Idx] === str1[str1Idx]) {
  //       str1Idx++;
  //     }
  //     if (str1Idx === str1.length) return true;
  //     str2Idx += 1;
  //   }
  //   return false;
}
