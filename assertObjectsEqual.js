const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key in object1) {
      if (typeof object1[key] === 'object') {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

//This function will log message to console stating if 2 objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CASES

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: 2, b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({}, {});
