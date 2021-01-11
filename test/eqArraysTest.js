const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 5], [1, 4, 6]), false);
assertEqual(eqArrays([], 1), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(['test', 'string'], ['test', 'string']), true);
assertEqual(eqArrays([1,5,7], [2]), false);
