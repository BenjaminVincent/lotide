const assert = require('chai').assert;
const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6]);

describe("#middle", () => {

  it("returns [2] when given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // arrays/objects use deepEquals
  });

  it("returns [5, 6] when given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
});
