const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail([1]).length, [].length);
assertEqual(tail([]).length, [].length);