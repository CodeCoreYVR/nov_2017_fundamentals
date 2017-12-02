// good morning fundamentals!

// square function
function square(number) {
  return number * number;
}

// mapping a data structure
[1,2,3,4,5]
// mapping: +1, addOne
[2,3,4,5,6]

[1,2,3,4,5]
// mapping: square
[1,4,9,16,25]

// programatic solution
// pseudo coding
// loop through the array
// for each item in the array we are going apply our function
// for (let element of array)
let numbers = [1,2,3,4,5];
let results = [];

for (let number of numbers) {
  results.push( square(number) );
}

results; // [1,4,9,16,25]

// doing it with a higher order function
function map(fn, array) {
  let results = [];

  for (let item of array) {
    results.push( fn(item) );
  }

  return results;
}

// timing functions
// util: lodash or underscore
