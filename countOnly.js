//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count

//This function will return object with the number of instances of a string for a given array
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;


