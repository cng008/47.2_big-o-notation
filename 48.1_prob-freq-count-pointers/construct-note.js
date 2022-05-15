/** accepts two strings, a message and some letters
 * should return true if the message can be built with the letters that you are given; otherwise, it should return false.
 * Time Complexity: O(M + N) - If M is the length of message and N is the length of letters

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true 
 */

function createFrequencyCounter(str) {
  // create empty object to hold char counts
  let frequencies = new Map();
  // loop over each char in str
  for (let char of str) {
    // if key not in frequencies obj
    let charCount = frequencies.get(char) || 0;
    // if char is in object, add 1 to count
    frequencies.set(char, charCount + 1);
  }
  return frequencies;
}

function constructNote(msg, letters) {
  let msgFreq = createFrequencyCounter(msg);
  let letterFreq = createFrequencyCounter(letters);

  // loop over each key in msg object
  for (let key of msgFreq.keys()) {
    if (!letterFreq.has(key)) {
      return false;
    }
    if (
      msgFreq.get(key) !== letterFreq.get(key) &&
      msgFreq.get(key) > letterFreq.get(key)
    ) {
      return false;
    }
  }

  return true;
}
