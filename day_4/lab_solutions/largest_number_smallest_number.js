// Assignment: [lab] Largest number and smallest number
// Write a function that takes in an array and returns another whose first
// element is the smallest number and whose second element is the largest number.

// For example if you call the function with array [3,64,3,56,34,12,5,0]
// you should get back an array [0, 64]

const numbersArray = [3, 64, 3, 56, 34, 12, 5, 0]

function smallestAndLargestNumber(numbers) {
  // I'm setting the default values to the first element in the array
  let max = numbers[0]
  let min = numbers[0]

  // loop over each element of the array, we will refer to it as number
  for(let number of numbers) {
    // if number is greater than max, we set max to number
    if(number > max) {
      max = number
    }

    // if number is less than min, we set min to number
    if(number < min) {
      min = number
    }
  }

  // we simply return an array with min and max inside of it
  return [min, max]
};

smallestAndLargestNumber(numbersArray)



// ES6 Version using Math
// We do not expect you to know this
// Its another example of what you will eventually come across and learn
// the three dots ... is the es6 spread operator
// Read more about it here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// Read about Math here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
function fancyMinMax(numbers) {
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)

  return [min, max];
};

fancyMinMax(numbersArray)
