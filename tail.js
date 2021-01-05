const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);


assertEqual(words.length, 3);
assertEqual(tail(words)[0], "Lighthouse");
console.log(tail([1]));
console.log(tail([]));
