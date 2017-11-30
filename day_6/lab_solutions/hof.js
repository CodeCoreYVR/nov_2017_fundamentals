// Assignment: [lab] Higher-Order Functions
// Write a function named "call" which takes a number and two functions as
// parameters, and returns the result of calling the two functions on the number.

// const doubleIt = function (x) {
//  return 2 * x;
// }

// const addOne = function(x) {
//   return x + 1;
// }

// Write a function so you can use:
// call(5, doubleIt, addOne); // => 11


const call = function(number, fn1, fn2) {
  // We store the result of fn1 to a variable
  let result = fn1(number)
  // We return the result of fn2
  return fn2(result)
}

const doubleIt = function (x) {
 return 2 * x;
}

const addOne = function(x) {
  return x + 1;
}

call(5, doubleIt, addOne)
