


const eqObjects = (object1, object2) => {
  // want to loop thru each
  let obj1 = Object.getOwnPropertyNames(object1);
  let obj2 = Object.getOwnPropertyNames(object2);
  if (obj1.length !== obj2.length) return false;

  for (const key of Object.keys(object1)) {
    let val1 = object1[key];
    let val2 = object2[key];
    
    console.log(val1, " ", val2);
    if (Array.isArray(val1)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (val1 !== val2) return false;

  }

  return true;
};


module.export = eqObjects;




