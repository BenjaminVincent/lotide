const assert = require('chai').assert;
const countLetters = require('../countLetters');

// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("Testing this"));
// //console.log(countLetters("abcdddddd a"));
// /*
// assertEqual(countLetters("lighthouse in the house"), {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// });
// */


describe('#countLetters', () => {
  it("given lighthouse in the house should return: { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});