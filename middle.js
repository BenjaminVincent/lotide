
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


module.exports = middle;


