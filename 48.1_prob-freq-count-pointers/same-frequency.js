/** Given two positive integers, find out if the two numbers have the same frequency of digits 
 * Time Complexity - O(N + M)

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function createFreqCounter(num) {
  let frequencies = new Map();
  for (let int of num.toString()) {
    let intCount = frequencies.get(int) || 0;
    frequencies.set(int, intCount + 1);
  }
  return frequencies;
}

function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;

  let num1Freq = createFreqCounter(num1);
  let num2Freq = createFreqCounter(num2);

  for (let key of num1Freq.keys()) {
    if (!num2Freq.has(key)) return false;
    if (num2Freq.get(key) !== num1Freq.get(key)) return false;
  }
  return true;
}
