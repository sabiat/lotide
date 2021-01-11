/*
PSEUDOCODE:
Function will go through array
  if callback performed on each element is false
    element is pushed to new array
  when callback is true, don't push and return newArr to stop function
*/
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


//ACTUAL FUNCTION:
const takeUntil = function(array, callback) {
  let newArr = [];
  for (item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }
};

module.exports = takeUntil;

//TEST CASES:

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood' ]);
