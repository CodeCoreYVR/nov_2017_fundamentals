5 + 5; // 10

let a = 6;
5 + a; // 11

let numbers = [5, 6];
numbers[0] + number[1]; // = 11;

let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

// rubix cube
// row, col, face (plain)

function sayHi() {
  console.log('Hi');
}

function add(number1, number2) {
  return number1 + number2;
}

// functional programming


// higher order functions
// functions in javascript - first class citizens
// when a function takes in a function as an argument OR
// return a function, it is called a higher order function

// say hi 3 times
function sayHi() {
  console.log('Hi');
}

sayHi();
sayHi();
sayHi();

function sayHiThreeTimes( fn ) {
  fn();
  fn();
  fn();
}

sayHiThreeTimes( sayHi );

//sayHi; // [Function]

function sayGoodbye() {}
function sayHowAreYou() {}

function runThreeTimes( fn ) {
  fn();
  fn();
  fn();
}

runThreeTimes( sayHi );
runThreeTimes( sayGoodbye );
runThreeTimes( sayHowAreYou );

//
