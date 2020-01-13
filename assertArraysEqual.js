
const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${a1} !== ${a2}`);
  }
};




module.exports = assertArraysEqual;

