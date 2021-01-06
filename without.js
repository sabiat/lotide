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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("✅✅✅Assertion Passed: " + JSON.stringify(arr1) + " === " + JSON.stringify(arr2));
  } else {
    console.log("🚫🚫🚫Assertion Failed: " + JSON.stringify(arr1) + " !== " + JSON.stringify(arr2));
  }
};

const without = function(source, itemsToRemove) {
  let correctArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      correctArr.push(source[i]);
    }
    
  }
  return correctArr;
};



assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(['hello', 'world', 'test'], ['world']), ['hello', 'test']);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);