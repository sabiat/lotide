const assertEqual = require("./assertEqual");

const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (array) {
  let newArr = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        newArr.push(nestedElement);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, [2, [3, [4]], 5]]));
