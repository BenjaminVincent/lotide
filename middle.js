

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

  [] if size is 1 or 2 return empty array
  [] ODD: return middle of a
  [] EVEN: return both middle values

*/

const middle = function (arr) {
  let result = [];
  
  if (arr.length < 3) return result;
  //even
  else if (arr.length % 2 === 0) {
    result[0] = arr[Math.floor(arr.length/2) - 1];
    result[1] = arr[(Math.floor(arr.length/2))];
    return result;
  } else {
    result[0] = arr[Math.floor(arr.length/2)];
    return result;
  }
};




console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

