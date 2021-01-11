const assertEqual = require('./assertEqual');

const findKeyByValue = function(objToScan, valueToFind) {
  let keyArrays = Object.keys(objToScan);
  for (let i = 0; i < keyArrays.length; i++) {
    if (objToScan[keyArrays[i]] === valueToFind) {
      return keyArrays[i];
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const desserts = {
  chocolate: "cake",
  fruit: "cake",
  pastry: "croissant"
};

module.exports = findKeyByValue;
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(desserts, "cake"), "chocolate");