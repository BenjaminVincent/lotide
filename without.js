
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


module.exports = without;

