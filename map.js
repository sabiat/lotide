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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5,6];
const studentGrades = [95, 35, 80, 75];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, number => number * 2), [2,4,6,8,10,12]);
assertArraysEqual(map(studentGrades, grade => grade + 5), [100, 40, 85, 80]);