// good evening fundamentals!

// 1
// JavaScript introduction
// Environment
// slack, codemirror, atom, chrome
// variables
// loops
// logic gating

// 2
// html & css
// tags
// forms
// tables
// describing meaning with our html
// search engines and spiders - meta tags

// 3
// html & css
// css for style
// colours, fonts, scale

// 300px
// 100%
// em - emphirical unit
// font size is current set at 10px
// 2em = 2x10px = 20px
// 10em = 10x10px = 100px
// font-size: 10em;
// vh vw
// viewport
// browser window
// 1vh, 1vw: 100% viewport width, 100% viewport height
// 0.5vh

// box model
// position
// margin
// border
// padding
// content

// 4
// arrays
// data structures
// functions
// objects
// complex data structures

// 5
// html & css & javascript
// script tags
// display: block or inline
// float
// position
// flex

// 6
// methods
const dog = {
  // properties of the dog object
  name: "Toto",
  age: 2,
  tricks: ["beg", "rollover", "sleep"],
  puppy: { name: "Spot", age: 0 },
  // methods or behaviours
  sit: function() {},
  // : function remove it
  run() { console.log(this.name + " is running") }
};

dog.name; // "Toto"
dog.run; // this will give me a reference to the function, but will not execute it
dog.run(); // (); will execute the function

// push method on my shoppingList array
shoppingList.push();

// relative reference
// this asks a question. which object is running this method?
// dog.name // absolute reference

// function
function sayHi() {
  console.log("Hi");
}

sayHi();

function sayHi(name) {
  console.log("Hi " + name);
}

sayHi("Jacob");

function add(number1, number2) {
  return number1 + number2;
}

let result = add(5, 6);
add(5, 6); // 11

alert( result );
document.write( result );

// higher order function - it is a function that takes in a function as an argument or
function sayHi() {
  console.log("Hi");
}

sayHi();
sayHi();
sayHi();

function runThreeTimes(fn) {
  fn();
  fn();
  fn();
}

runThreeTimes(sayHi);

function add(number1, number2) {
  return number1 + number2;
}

function calc(operation, number1, number2) {
  operation(number1, number2);
}

let result = calc(add, 5, 6);

// search and replace
function calc(operation, number1, number2) {
  return operation(number1, number2);
  // return 11;
}

// timing functions
// 1000ms = 1sec
setInterval(sayHello, 1000); // runs every second

setTimeout(add(5,6), 3000); // just once after 3 second

// function sayHello() {}
let id = setInterval(function(){
  console.log("Hello!");

  clearInterval(id);
}, 1000);


// countdown
let counter = 10;
let id = setInterval(function() {
  console.log(counter);
  counter--;

  if (counter <= 0) {
    clearInterval(id);
  }

}, 1000);

// classes
// houses
// template, blueprint
// describe the object, it's not physical object itself
class Cookie {
  constructor () {}

  bake() {}
}

// constructs a cookie object
let oreo = new Cookie();
oreo.bake();

// we're making an instance of the array class
let shoppingList = new Array();
shoppingList.pop();

//
