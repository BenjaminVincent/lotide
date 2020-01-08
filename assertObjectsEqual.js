

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) return false;
  
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  } return true;

};

const eqObjects = (object1, object2) => {
  // want to loop thru each
  let obj1 = Object.getOwnPropertyNames(object1);
  let obj2 = Object.getOwnPropertyNames(object2);
  if (obj1.length !== obj2.length) return false;

  for (const key of Object.keys(object1)) {
    let val1 = object1[key];
    let val2 = object2[key];
    
    if (Array.isArray(val1)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (val1 !== val2) return false;

  }

  return true;
};


const assertObjectsEqual = (actual, expected) => {
  
  if (eqObjects(actual, expected)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const ab = {
  a: "1",
  b: "2"
};

const ba = {
  b: "2",
  a: "1"
};



const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(cd, dc) ,true);
assertObjectsEqual(eqObjects(cd, cd2), false);

