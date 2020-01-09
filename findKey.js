const places = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }

};

const test1 = {
 a: 1,
 b: 2,
 c: 3
};

const test2 = {
 l: {a: 1},
 m: {a: 2},
 n: {a: 3}
 };


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log("\x1b[31m%s\x1b[0m", `🛑 Assertion Failed: ${actual} !== ${expected}`);
};


/*
  ### TODO ###
  takes object and callback
  scan the object and return first key that contains callback value

*/

const findKey = function(obj, callback) {
  let result;

  for (const key in obj) {
     if (callback(obj[key])) {
       result = key;
       return result;
     }
  }
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }}, 
  x => x.stars === 2));


//console.log(findKey(places, x => x.stars === 2));

assertEqual(findKey(places, x => x.stars === 2), "noma");

assertEqual(findKey(test1, x => x === 1), "a");

assertEqual(findKey(test2, x => x.a === 2), "m");