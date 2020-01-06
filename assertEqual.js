
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑 Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`✅ Assertion Failed: ${actual} !== ${expected}`);
};
// remember to place semicolons at the end of const functions


assertEquals("Lighthouse Labs", "Bootcamp");
assertEquals(1, 1);
assertEquals(5, 10);
assertEquals("hello", "hello");
