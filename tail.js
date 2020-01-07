const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};


const tail = function(a) {
  let b = a;
  b.shift();
  return b;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEquals(words.length, 3);