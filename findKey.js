const assertEqual = require('./assertEqual');

/* function should scan object and return the first key for which the callback returns a truthy value
PSEUDOCODE
loop through each key in object 
  perform callback fxn on each key 
  return key when callback(key) = true
*/
//FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5);

module.exports = findKey;
// assertEqual(result1, "noma");
// assertEqual(result2, undefined);

