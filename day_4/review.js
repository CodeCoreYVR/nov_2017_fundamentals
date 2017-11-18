// good morning fundies!
// review

// javascript
// web applications - frontend, backend
// mobile applications - react native
// robotics - ev3 mindstorms

// persistence
// making the computer remember
5 + 5;
let result = 5 + 5;

// numeric data type
// integer - whole number
// floats - decimals numbers
// double - decimal number
// N.N
// pi = 3.14159

// text based data types
// string
"";
'';
``;
// c-h-r-i-s-t-m-a-s
// manipulate / mutate

// boolean - has 2 states
// coin - heads or tails
// true or false
// javascript is a truthy language

if ("Jacob") {}

if (90283409) {}

// "", null, undefined
if (0) {

}

// operands
if (5 > 6) {}
if ("a" > "b") {

}

// >, <, >=, <=, !=, ==, ===
// &&, ||

// loops - allow the computer to iterate
// doing the hard work

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

// programatic
// init; condition; iterator
let counter = 0;
while (counter < 10) {
  counter++;
}

// concise
for (counter = 0; counter < 10; counter++) {
  console.log(counter);
}

// ternary
if (5 > 6) {
  console.log("five is greater than six");
} else {
  console.log("five is less than six");
}

(5 > 6) ? console.log("five is greater than six") : console.log("five is less than six");


// Question 2:
//Write a javascript program that prompts the user for the length of the
//sides of a triangle and then prints out the area of the triangle.

//Look up Heron's Formula for the area of the triangle

//For example if your three sides are 3, 4, and 5 you should get 6 as the area
let first = parseInt(prompt('Give me the first side length'));
let second = parseInt(prompt('Give me the second side length'));
let third = parseInt(prompt('Give me the third side length'));
let s = parseInt((first +second+third)/2);
let a = parseInt(s-first);
let b = parseInt(s-second);
let c = parseInt(s-third);
let sum = (a * b * c);
let mult = (sum *s);
let triArea = (Math.floor)(Math.sqrt(mult))
console.log('The area of the triangle is ' + triArea + ' units squared');
