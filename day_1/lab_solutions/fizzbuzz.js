// Assignment: [Lab] FizzBuzz

// Step 1: Write a loop that prints numbers from 1 to 100

// Step 2: Inside the loop, write code that prints "fizz" instead of the
//         number if it is divisible by 3

// Step 3: Add to the condition in Step 2, write some more code that prints
//         "buzz" instead of the number if it is divisible by 4

// Step 4: Now still in the loop. If the number is divisible by 3 and 4,
//         print "fizzbuzz"

// Step 5: Outside of the loop, prompt the user for a firstNumber and then
//         a SecondNumber, replace 3 with firstNumber and replace 4 with
//         secondNumber.


// Completed Solution
let firstNumber = parseInt(prompt('Give me a number'))
let secondNumber = parseInt(prompt('Give me another number'))

// This is just a loop. We are looping from 1 to 100
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  // Condition check, is the currentNumber by the firstNumber and the seconNumber?
  if (currentNumber % firstNumber === 0 && currentNumber % secondNumber === 0) {
    console.log('fizzbuzz')

  // Condition check, is the currentNumber by the firstNumber?
  } else if (currentNumber % firstNumber === 0) {
    console.log('fizz')

  // Condition check, is the currentNumber by the secondNumber?
  } else if (currentNumber % secondNumber === 0) {
    console.log('buzz')

  // If none of the above if statements evaluate to true, then just print the currentNumber
  } else {
    console.log(currentNumber)
  }
}
