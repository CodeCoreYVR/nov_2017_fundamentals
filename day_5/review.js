// good evening fundamentals!

// javascript - brains, behaviour, dynamic quality
console.log("Hello from Javascript");

// data structures

// arrays
let name = "Jacob";
let names = ["Jacob", "Tran"]; // create an array

"Hello my name is " + name;
"Hello my full name is " + names;
"Hello my full name is " + names[0] + " " + names[1];

let winningNumbers = [1,2,3,4,5,6];
let sum = 0;

for (let number of winningNumbers) {
  console.log(number);
  sum += number;
}

// functions - is set of instructions that repeated. may have an input, and produce an output
function sayHello() {
  console.log("Hello!");
}

sayHello(); // execute a function

// argument
function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Tim"); // "Hello, Tim"
sayHello("Jim"); // "Hello, Jim"
sayHello("Jane"); // "Hello, Jane"

function add(number1, number2) {
  console.log(number1 + number2);
}

add(5, 6); // 11 is logged to the console

function add(number1, number2) {
  return number1 + number2;
}

add(10, 2); // this statement turns into the number 12
add(10, 2) + add(5, 6); // 12 + 11 = 23

// objects - the fundamental building blocks of anything meaningful in code
let packingList = new Array();
let packingList = [];

// add an item to my array
packingList.push("shorts");
packingList.push("sun tan lotion");
// the packingList variable contains and instance of the array object
// the push method or function belongs to the array class/object

let packingList = [1,2,3,"a","b","c"];

// objects
let city = {
  name: "Vancouver",
  population: 647540
};

packingList[0];

city.name;
city.population;

// how do we iterate through an object?
// for (let property in object)
for (let "name" in city) {
  console.log("name"); // left hand side
  console.log(city[ "name" ]); // right hand side
}

city.name; // dot operator
city["name"]; // square bracket syntax
let propertyPicker = "name";
city[ propertyPicker ]; // using a variable

city[ "smallest suburb" ] = "Delta";

// we can make an array from an object
// const packingList = {
//   0: "shorts",
//   1: "sun tan lotion"
// };
//
// packingList[0];
// packingList.push();







//
