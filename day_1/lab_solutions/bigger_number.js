// Assignment: [Demo] Bigger number
// Write a Javascript code that defines two variables x and y with numbers and
// then prints to the console the larger of the two number printing.
// For instance print "The larger number is x"

let firstNumber = parseInt(prompt('Give me a number'))
let secondNumber = parseInt(prompt('Give me another number'))

if (firstNumber > secondNumber) {
  console.log(`The first number ${firstNumber} is larger`)
} else {
  console.log(`The second number ${secondNumber} is larger`)
}
