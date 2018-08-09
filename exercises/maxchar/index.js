// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] ++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;


  // for (let char of str) {
  //   chars[char] = chars[char] + 1 || 1;
  // }

  // for (let char of str) {
  //   if (!chars[char]) {
  //     chars[char] = 1;
  //   } else {
  //     chars[char]++;
  //   }
  // }

}

module.exports = maxChar;
