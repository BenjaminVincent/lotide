# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @benjaminvincent/lotide`

**Require it:**

`const _ = require('@benjaminvincent/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: counts occurences of each letter in sentence
* `countOnly(allItems, itemToCount)`: counts itemToCount occurences in obj allItem
* `eqArrays(a1, a2)`: checks a1 equal to a2
* `eqObjects(object1, object2)`: checks object1 equal to object2
* `findKey(obj, callback)`: finds a value of key given obj
* `findKeyByValue(obj, value)`: returns key given a value
* `flatten(arr)`: flattens n-dimensional array to 1-dimension
* `head(a)`: returns the first element of a
* `letterPosition(sentence)`: returns each index of occurence of each letter in sencent
* `map(array, callBack)`: maps a callback function output to array
* `middle(arr)`: returns the middle element of an array
* `tail(a)`: returns the tail of a
* `takeUntil(array, callback)`: copies array up until callback
* `without(arr, toRemove)`: removes toRemove from arr