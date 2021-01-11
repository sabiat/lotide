const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([], []);
assertArraysEqual([2,5,7,8], [1,2,3]);
assertArraysEqual(['1','2','3'], [1,2,3]);