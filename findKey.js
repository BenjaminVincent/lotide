
const findKey = function(obj, callback) {
  let result;

  for (const key in obj) {
     if (callback(obj[key])) {
       result = key;
       return result;
     }
  }
};


module.exports = findKey;


