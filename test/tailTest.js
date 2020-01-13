const assert = require('chai').assert;
const tail = require('../tail');
const assertEquals = require('../assertEqual');


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEquals(words.length, 2);

describe("#Tail", () =>{

  it("returns 0 if a.length <= 1", () => {
    assert.strictEqual(tail([]).length, 0);
  });

  it("returns n-1 when given array of length n", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  })
});

