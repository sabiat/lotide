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

module.exports = flatten;
