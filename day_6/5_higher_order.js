// calculator
// math functions
// add, subtract, divide, multiply
function add(number1, number2) {
  return number1 + number2;
}

add(10, 2); // 12
add(5, 6); // 11

// higher order function
function calc(operation, number1, number2) {
  return operation(number1, number2);
}

// why do we get back undefined
calc(add, 5, 6);

// doubleIt
function doubleIt(number) {
  return number * 2;
}

function call(fn, number) {
  return fn(number);
}

doubleIt(13); // 26 - regular function
call(doubleIt, 13); // 26 - higher order function

// make the rest of the calculator and test it out
