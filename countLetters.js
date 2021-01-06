const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const count = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters('lighthouse in the house'));

const result1 = countLetters('lighthouse in the house');
const result2 = countLetters('testing     sentence');

assertEqual(result1["h"], 4);
assertEqual(result2[' '], undefined);
assertEqual(result1["i"], 2);