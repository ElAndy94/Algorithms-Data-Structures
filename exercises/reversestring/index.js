// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
  /////////////////////
  return str.split('').reverse().join('');
}

/////////////////////////////
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    // debugger;
  }
  return reversed;
}
/////////////////////////////
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}
////////////////////////////
function reverse(str) {
  return str.split('').reduce((rev, char) =>  char + rev, '');
}

// reverse('asdf');

module.exports = reverse;
