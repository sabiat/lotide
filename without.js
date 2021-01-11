const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {
  let correctArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      correctArr.push(source[i]);
    }
    
  }
  return correctArr;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(['hello', 'world', 'test'], ['world']), ['hello', 'test']);
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);