// good evening fundamentals!

// javascript

// created in 10 days, brendan eich
// netscape

// ecmascript 6.0
// ECMAScript 2016 / 2017

// data
// types
// numbers
10 + 10;
10 - 5;
2 / 3;
4 * 4;
2 ** 3; // exponential
10 % 2; // modulo - remainder

// text
"I like green eggs and ham";
'Sam I am';
`All you need is love`; // back ticks - above your tab key

// strings - "Christmas"
// C-h-r-i-s-t-m-a-s // a string of individual letters or characters
"I'm happy!";
'5 foot 7"';
`"" '' ``


Hello I'm down here!!!!



`;

// boolean - coin, 2 states: heads or tails
// true or false
!true; // ! means not
!false;

// persist
// store it in our memory
// let, const, var

// variable - stores data and sometimes can change
let name = "Jacob";
let result = 5 + 5;

"My name is" + name;
"The answer is: " + result;

name = "Puff";
name = 'Prince';
name = `Brother Luv`;

// constant
const PI = 3.141592654;
const age = 38;

// is legacy
var name = "Jacob";
var PI = 3.141592654;

// logic gating
if (true) {
  // developers tool to communicate
  console.log("Please run this code.");
}

1 > 2; // no, 1 is not greater than 2, therefore this statement is false

if (1 < 2) {
  console.log("Please run this code!");
}

// > < >= <= != == === && ||
(true && true);
(true || false);
(false || true);
(false || false);

let age = 38;

if (age > 35) {
  console.log("old");
} else {
  console.log("new");
}

if (age > 35) {
  console.log("old");
} else if (age > 25) {
  console.log("young");
} else {
  console.log("baby");
}

if (age > 35) {
  console.log("old");
}
if (age > 25) {
  console.log("young");
}
if (age > 1) {
  console.log("baby");
}

// ternary operator
(true) ? "run the code on this side" : "this is run if it is false";

// switch case

// !
let light = true;
light = !light;

//if (light) {
//  light = !light; // toggles the boolean to the opposite state
//}

// if your age is not 2
if (age != 2) {
  console.log("You can come in and play");
}

if (user != "admin") {
  console.log("You must not change anything!!!");
}


// loops
// make the computer do the hard work
// brute force
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

// count to 10,000
let counter = 0;
counter = counter + 1; // counter is 1
counter = counter + 1; // counter is 2
counter = counter + 1; // counter is 3
counter = counter + 1; // counter is 4
counter = counter + 1; // counter is 5
counter = counter + 1; // counter is 6
counter = counter + 1; // counter is 7
counter = counter + 1; // counter is 8
counter = counter + 1; // counter is 9
counter = counter + 1; // counter is 10


let counter = 0;

while (counter < 10) {
  console.log(counter);
  //counter = counter + 1;
  //counter += 1;
  counter++;
}

// countdown to new years
let counter = 10;

while (counter > 0) {
  console.log(counter);
  counter--;
}

// the shorter way to write a loop is to use the FOR statement
// for (init; condition; iterator)
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

// user input string interpolation
// window <- browser
window.alert("I am an annoying popup!");
window.prompt("Do you know how to code?");
let name = window.prompt("What is your name?");
let coin = window.confirm("Heads or tails?");

// console
// document

// injecting an expression into a string
"Jacob" + " " + "Tran"; // "Jacob Tran" <- string concatenation
let firstName = "Jacob";
`${ 10 + 10 } ${ firstName }`;

// + <- mathematical operations
// `${}` for string output


"Jacob" + "Tran";
10 + 10;
`${"Jacob"} ${"Tran"}`;

// 


//
