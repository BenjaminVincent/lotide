

const tail = function(a) {

  if (a.length <= 1) return [];
  else return a.slice(1); 
  
};


module.exports = tail;