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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([], []);
assertArraysEqual([2,5,7,8], [1,2,3]);
assertArraysEqual(['1','2','3'], [1,2,3]);