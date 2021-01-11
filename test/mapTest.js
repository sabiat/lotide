const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5,6];
const studentGrades = [95, 35, 80, 75];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, number => number * 2), [2,4,6,8,10,12]);
assertArraysEqual(map(studentGrades, grade => grade + 5), [100, 40, 85, 80]);

