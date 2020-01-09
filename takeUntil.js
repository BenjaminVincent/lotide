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




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];





// the call back should only be 1 value
// returns when callback item is met
const takeUntil = function(array, callback) {
  // ...
  let result = [];

  for (const item of array) {
    console.log("ITEM: ", item);
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
    return result;
}




const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);