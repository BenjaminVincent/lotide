

const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) return false;
  
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  } return true;

};


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


/*
  ### TODO ###
  

*/
const without = function (arr, toRemove) {

  let result = [];
  let count = 0;

 for (let i = 0; i < arr.length; i++) {
   if (toRemove.indexOf(arr[i]) === -1) {
     result.push(arr[i]);
   }
 }
 return result;
};


console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 2, 3], [1, 2]));


