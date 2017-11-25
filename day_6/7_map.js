function addOne(number) {
  return number + 1;
}

addOne(5); // 6

// higher order function
function call(fn, number) {
  return fn(number);
}

call(addOne, 5); // 6

let numbers = [1, 2, 3, 4];
// mapping [1+1, 2+1, 3+1, 4+1];
// [2, 3, 4, 5]
//
let result = [];

for (let number of numbers) {
  console.log(number);
  //result.push( number + 1 );
  //result.push( addOne(number) );
  result.push( call(addOne, number) );
}

result;

// operation is a functions
// numbers is an array
// it will return a data struction remapped
function map(operation, numbers) {
  let result = [];

  for (let number of numbers) {
    result.push( operation(number) );
  }

  return result;
}

let numbers = [1,2,3,4];
let newArray = map(addOne, numbers); // creates a new array
numbers = map(addOne, numbers); // mutate the array

// call(flatten, numbers)

// let numbers = [1,2,3];
// numbers.forEach(function() {});

//
function sayHello() {
  console.log('Hi!');
}

function call( fn ) {
  fn();
}

call( sayHello );
call( function() { console.log("Hi!") } );

// example of a built in higher order function
let numbers = [10,20,30];
numbers.forEach(function(i) { console.log(i) });





//
