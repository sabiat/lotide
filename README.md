# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sabiat/lotide`

**Require it:**

`const _ = require('@sabiat/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array

* `tail(array)`: returns the end of an array excluding the first element

* `middle(array)`: returns the middle-most element of a given array

* `map(array, callback)`: returns a new array with the results of performsing a callback function on each element of array passed to it

* `letterPositions(sentence)`: takes in a string and returns all indices in the string where each character is found

* `findKey(object, callback)`: scans a given object and returns the first key for which a given callback returns a truthy value

* `countOnly(allItems, itemToCount)`: takes in a array of items  and returns a count for a specific subset of items specified with a given object

* `countLetters(sentence)`: takes in a string and returns a count of each of the letters in the string

* `without(source, itemsToRemove)`: takes in a source array and itemsToRemove array and returns a filtered source array without any element from the itemsToRemove array

* `takeUntil(array, callback)`: takes in an array and returns a slice of the array with callback function performed on each element from the beginning until callback function returns truthy value

* `findKeyByValue(objectToScan, valueToFind)`: takes in an object to scan and returns the first key which matches a given value

* `assertEqual(actual, expected)`: logs message to console stating if actual is equal to expected

* `assertArraysEqual(arr1, arr2)`: logs message to console stating if 2 arrays are equal

* `assertObjectsEqual(actual, expected)`: logs message to console stating if 2 objects are equal

* `eqArrays(arr1, arr2)`: checks if given arrays are equal and returns boolean

* `eqObjects(object1, object2)`: checks if given objects are equal and returns boolean


