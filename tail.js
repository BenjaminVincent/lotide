

const tail = function(a) {
  let b = a;
  b.shift();
  return b;
};


module.exports = tail;