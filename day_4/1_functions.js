// function - a collection of instructions
// you can provide some input, and it might deliver some output

// morning routine
// saturday
console.log("woke up");
console.log("ate breakfast");
console.log("got changed");
console.log("commuted to work");
console.log("played on the piano");
console.log("teach coding");
// sunday
console.log("woke up");
console.log("ate breakfast");
console.log("got changed");
console.log("commuted to work");
console.log("played on the piano");
console.log("teach coding");
// monday
console.log("woke up");
console.log("ate breakfast");
console.log("got changed");
console.log("commuted to work");
console.log("played on the piano");
console.log("teach coding");

// function
function morning() {
  console.log("woke up");
  console.log("ate breakfast");
  console.log("got changed");
  console.log("commuted to work");
  console.log("played on the piano");
  console.log("teach coding");
}

// call my function, use the name and add (); to execute it
morning; // returns a reference to the function
// sunday
morning(); // executes the instructions inside the function
// monday
morning();
// tuesday
morning();
// wednesday
morning();

// function that takes in arugments
function greet() {
  console.log("Hi");
}
greet();
greet();
greet();

function greet(name) {
  // console.log("Hi " + name);
  console.log(`Hi ${name}`);
}

greet("James");
greet("Francis");
greet("Forrest");

// mathematics

// make me a function that adds 2 numbers together
function add() {
  5 + 5;
}

add();

function add(number) {
  console.log( number + 5 );
}

add(6); // 11
add(30); // 35
add(12); // 17

// add 2 different numbers together of your own choosing
function add(number1, number2) {
  console.log(number1 + number2);
}

add(5, 6);
add(1289.1293, 12093.1231);

// console - developer tool. allows you to see what your code is doing

// window.prompts
// window.alert - create a popup
// window - is the browswer application

// document - body tag
// <body></body>
// document.write
// document.getElementById

// return - this is a keyword we can use in a function to turn the function into a meaningful value

function add(number1, number2) {
  console.log(number1 + number2);
  // return number1 + number2;
}

let age = 38;
let result = 11;
let result = add(5, 6);
// result = undefined

add(5, 6) + add(10, 12);
    11    +     22 ; // return method

  // undefined + undefined; // console.log method

// write the remaining mathematical functions
// *
// /
// -
// **, 2 ** 3 = 8
// %
function subtract(number1, number2) {
  console.log(number1 - number2);
  return number1 - number2;
}

subtract(10, 2);  // 8
let result = subtract(10, 2);

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function power(number1, number2) {
  return number1 ** number2; // to the power of
}

// string functions, method
// array functions, method

let holiday = "New Years";
holiday.split(); // [ 'New Years' ]
// the split method will turn a string into an Array
holiday.split(" ");



let holiday = "New Years";
holiday.split(); // [ 'New Years' ]
// the split method will turn a string into an Array
holiday.split(" "); [ 'New', 'Years' ]
holiday.split(""); // if you pass in an empty string, it will split the string into an array of individual characters

let names = 'Jacob-Jason-Steve-Tam';
names.split("-");

holiday.split("e"); // [ 'N', 'w Y', 'ars' ]


let character = ["N", "e", "w"]; // array of characters
character.join(); // bring it back together into a single string



let holiday = "Christmas";
// holiday = "Christmos";

let characters = holiday.split(""); // this will create an array of characters
characters[7] = "o";
holiday = characters.join("");


// change it to "Christmos"
let holiday = "Christmas";
// holiday = "Christmos";

let characters = holiday.split(""); // this will create an array of characters
characters[7] = "o";
holiday = characters.join(""); // by default it will join it using a comma




function replaceLetter(word, originalCharacter, replaceCharacter) {
  let characters = word.split("");
  for (let character of characters) {
    if (character == originalCharacter) {
      // replace it with replaceCharacter
    }
  }
}



// create a prompt that takes in a string
// function should take in: "All you need is love"
// function should return: 5

// window.prompt();
let lyric = prompt("Please enter a sentence: ");

function countWords(sentence) {
  // "All you need is love"
  let sentence = "All you need is love";
  let words = sentence.split(" ");
  return words.length;
}

countWords(lyric);

// trim
// replace
// regular expression
















//
