

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected}`);
};


/*
  ### TODO ###
  use for of loop to iterate thru sentence
  add key if new letter, increment value by 1
  if occurence of letter exists already and see again, increment by 1
*/


const countLetters = function(sentence) {
  // remove white space
  let copy = sentence.replace(/\s+/g, '');

  // IF IGNORE CASE?
  //let copy = sentence.replace(/\s+/g, '').toLowerCase();

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


console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Testing this"));
//console.log(countLetters("abcdddddd a"));
/*
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
*/