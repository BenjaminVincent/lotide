


/*
  search thru object and return first key with value
  if no key found return undefined

*/

const findKeyByValue = function(obj, val) {
  //console.log(value);

  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  } return;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
