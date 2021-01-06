// TEST ASSERTION FUNCTIONS
// Function to check if 2 arrays are equal
const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== 'object' || typeof arr2 !== 'object' || arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  
};
// Functions to log message to console if arrays are the same
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅Assertion Passed: " + JSON.stringify(arr1) + " === " + JSON.stringify(arr2));
  } else {
    console.log("🚫🚫🚫Assertion Failed: " + JSON.stringify(arr1) + " !== " + JSON.stringify(arr2));
  }
};

//ACTUAL FUNCTION
// This function will return the middle-most element of a given array
const middle = function(arr) {
  let middleElement = [];
  let middleIndex;
  if (arr.length <= 2) {
    return middleElement;
  } else if (arr.length % 2 === 0) {
    middleIndex = arr.length / 2 - 1;
    middleElement.push(arr[middleIndex]);
    middleIndex = arr.length / 2;
    middleElement.push(arr[middleIndex]);
  } else {
    middleIndex = Math.floor(arr.length / 2);
    middleElement.push(arr[middleIndex]);
  }
  return middleElement;
};

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(['a', 'b', 'c']), ['b']);
