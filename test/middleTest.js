const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5,6]);