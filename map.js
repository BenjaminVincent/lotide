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




const words = ["ground", "control", "to", "major", "tom"];


//const mapWords = words.map(array, callBack => );

const map = function(array, callBack) {
  const results = [];

  for (let item of array) {
    //console.log('item BEFORE:', item);
    //console.log('item AFTER:', callBack(item));
    //console.log('-----');
    results.push(callBack(item));
  }
  
  //console.log('array: ', array);
  //console.log('callback: ', callBack);
  
  return results;
};


// The second parameter is a function that take word and replaces it with word[0]
// map just loops thru
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length > 4);
const results3 = map(words, word => word.length % 2 === 0);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [true, true, false, true, false]);
assertArraysEqual(results3, [ true, false, true, false, false ])


console.log(results1);
console.log(results2);
console.log(results3);