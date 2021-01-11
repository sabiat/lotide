// This function will return the middle-most element of a given array
const middle = function(arr) {
  let middleElement = [];
  let middleIndex;
  if (arr.length <= 2) {
    return middleElement;
  } else if (arr.length % 2 === 0) {
    middleIndex = arr.length / 2 - 1;
    middleElement.push(arr[middleIndex]);
    middleIndex = arr.length / 2;
    middleElement.push(arr[middleIndex]);
  } else {
    middleIndex = Math.floor(arr.length / 2);
    middleElement.push(arr[middleIndex]);
  }
  return middleElement;
};

module.exports = middle;

