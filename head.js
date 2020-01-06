const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(a) { 
  return a[0];
};

assertEquals(head([5,6,7]), 5);
assertEquals(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEquals(head([], 5));