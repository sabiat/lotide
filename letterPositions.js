const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅Assertion Passed: " + JSON.stringify(arr1) + " === " + JSON.stringify(arr2));
  } else {
    console.log("🚫🚫🚫Assertion Failed: " + JSON.stringify(arr1) + " !== " + JSON.stringify(arr2));
  }
};

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

//This function will return all the indices in the string where each character is found

const letterPositions = function(sentence) {
  const results = {
  };
  for (let i = 0; i < sentence.length; i++) {
    console.log(i);
    if (sentence[i] !== " ") {
      console.log(sentence[i]);
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);
