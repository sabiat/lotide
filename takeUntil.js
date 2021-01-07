/*
PSEUDOCODE:
Function will go through array
  if callback performed on each element is false
    element is pushed to new array
  when callback is true, don't push and return newArr to stop function
*/

const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅Assertion Passed: " + JSON.stringify(arr1) + " === " + JSON.stringify(arr2));
  } else {
    console.log("🚫🚫🚫Assertion Failed: " + JSON.stringify(arr1) + " !== " + JSON.stringify(arr2));
  }
};

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

//TEST CASES:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood' ]);
