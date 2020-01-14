
const countLetters = function(sentence) {
  // remove white space
  let copy = sentence.replace(/\s+/g, '');

  let result = {};
  
  for (const letter of copy) {
    if (result[letter]) {
      result[letter] ++;
    } else {
      result[letter] = 1;
    }

  }
  return result;
};


// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;