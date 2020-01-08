const assertArraysEqual = function(a1, a2) {
  if (a1.length !== a2.length) {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${a1} !== ${a2}`);
    return;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${a1} !== ${a2}`);
      return;
    }
  }

  console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${a1} === ${a2}`);
};


const letterPositions = function(sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!result[letter]) {
      result[letter] = new Array();
    }
    result[letter].push(i);
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"));
//console.log(letterPositions("the"));
//console.log(assertArraysEqual("test", { t: [0, 3], e: [1], s: [2]}));