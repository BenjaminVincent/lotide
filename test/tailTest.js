const tail = require('../tail');
const assertEquals = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEquals(words.length, 2);