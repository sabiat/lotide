const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');


//This function will return all the indices in the string where each character is found

const letterPositions = function(sentence) {
  const results = {
  };
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').l, [2,3]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
