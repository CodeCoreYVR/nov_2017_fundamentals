// timing functions are another example of higher order functions

//setInterval();

// setTimeout( fn, delay );
// delay is specified in milliseconds, 1000ms == 1sec
function sayHi() {
  console.log("Hi!");
}

setTimeout( sayHi, 3000 );

setTimeout( function() {
  console.log("Hi!");
  console.log("How are you?");
}, 3000 );


setInterval( function() {
  console.log("Hi!");
  console.log("How are you?");
}, 3000 );

// return a unique id
let intervalId = setInterval( function() {
  console.log("Hi!");
  console.log("How are you?");

  clearInterval(intervalId);
}, 3000 );


//
console.log("a");
console.log("b");
console.log("c");

console.log("a");

setTimeout( function() {
  console.log("b");
}, 2000);

console.log("c");


// asynchronization
// event loop
let counter = 0;
while (counter < 10) {
  counter++;
}

// more complex counter
let counter = 0;
let intervalId = setInterval( function(){
  console.log(counter);
  counter++;

  if (counter > 10) {
    clearInterval(intervalId);
    //break; only uses for: for loops, while loops, do while loops
  }
}, 1000);


//
let _ = "Jacob";
let $ = 38;

car.drive();

_.filter();










//
