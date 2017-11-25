// simple functions
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}
function power(number1, number2) {
  return number1 ** number2;
}
function modulo(number1, number2) {
  return number1 % number2;
}

// higher order function
// function calc(multiply, 5, 6) {
//   return multiply(5, 6);
//   // add(5, 6);
//   // return 11;
// }

function calc(operation, number1, number2) {
  return operation(number1, number2)
}

calc(add, 2, 4);
calc(subtract, 2, 4);
calc(multiply, 2, 4);



//
