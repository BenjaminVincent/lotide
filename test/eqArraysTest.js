
const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


describe('#eqArrays', () => {
  
  it("returns true when given [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false when given [1, 2, 3] and [3, 2, 1]", () =>{
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns false when given [\"1\", \"2\", \"3\"] and [\"1\", \"2\", 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
  });

});