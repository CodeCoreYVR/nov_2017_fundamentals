// objects - the building blocks for anything meaningful in programming

// table - four legs, has a flat surface, white
// people - 2 legs, name, face, eyes
// cups - opening, holds a liquid
// computers - keyboard, monitor

// arrays
let shoppingList = ["sweater", "socks", "tie"];
shoppingList[0]; // this is a numerical address to access the data

// objects
let me = new Object(); // constructor method

let me = {
  // property: value,
  name: "Jacob",
  age: 38,
  hairColour: "black",
  shoeSize: 9,
  hobbies: ["Gardening", "Jiu Jitsu", "Coding"],
  10: "goodbye"
}; // object initializer

// access our objects
// dot operator
me.name; // "Jacob" - what's the property and it's associated value
// me.hobby; // "Gardening"
me.hobbies; // returns an array: []

me.hobbies[0]; // retrieves a specific
me.hobbies[1];
me.hobbies[2];

// square bracket syntax
me["name"]; // "Jacob"

// access the value using a variable
let propertyPicker = "age";
// me.propertyPicker;
me[propertyPicker];

// square bracket syntax
me["age"]; // 38

// dot operator
me.age;

// can we do it with numbers?
// YES!

let me = {
  // property: value,
  name: "Jacob",
  age: 38,
  hairColour: "black",
  shoeSize: 9,
  hobbies: ["Gardening", "Jiu Jitsu", "Coding"],
  10: "goodbye"
};

me[10] = "Hello!";

let number = 10;
me[ number ] = "How are you?";

// make a car object
// give the relevant properties: year, make, model
// place this object in a constant location
const car = {
  year: 2018,
  make: "Tesla",
  model: "Model 3",
  capacity: 5
};

// const pi = 3.14159;
car.year;
car.year = 2019; // getter and a setter, accessor

console.log(`The ${car.year} ${car.make} ${car.model} has the capacity of ${car.capacity}.`);
// try creating a meaningful sentence about the car
// e.g. "The 2018 Tesla Model 3 has a capacity of 5."

// complex data structures
const me = {
  name: "Jacob",
  age: 38,
  hobbies: ["gardening", "bjj", "rock climbing"],
  baby: {
    name: "Junior",
    age: 1
  }
};

// what is my first hobby?
me.hobbies[0];

let hobbies = me.hobbies;
hobbies[0];
// what is my babies name?
me.baby.name;

let baby = me.baby;
baby.name;

let name = "Jacob";
let names = ["Jacob", "Tran"];
const me = { firstName: "Jacob", lastName: "Tran" };

lyric.split(" ").join(",");

let words = lyrics.split(" ");
let rejoinedLyric = words.join(",");

const jacob = { age: 38 };
const jason = { age: 21 };
const tam = { age: 35 };

let teachers = [jacob, jason, tam];
// display each teacher's age
teachers[0].age; // this will give the age of the first teacher in the array

teachers[0]; // what does this return?  jacob object
// what properties does the jacob object have?
teachers[0].age;

// JSON - JavaScript Object Notation

// 1. prompt for a sentence
let sentence = prompt("Please enter a sentence");
// "How are you?";
// {
//   "How": 3,
//   "are": 3,
//   "you?": 4
// }

let words = sentence.split(" ");
const wordLengths = {};

// brute force
// wordLengths["How"] = "How".length;
// wordLengths["are"]; = "are".length;
// wordLengths["you?"] = "you".length;

for (let word of words) {
  console.log(word);
  wordLengths[ word ] = word.length;
}
// let word = "How";
// word.length; // 3

// hash - kinda like a dictionary
// pulp - soft pieces of wood, mixed with water and hammered into a sheet
// fiction - a literary work that is made up

// postal codes
// elections
// "how are you?"
// h - 1
// o - 2




// Exercise: Prompt for a sentence, and create an object with the words as properties and their lengths as the values.
let sentence = prompt("Please enter a sentence");
let words = sentence.split(" ");
const wordLengths = {};

// brute force
// wordLengths["How"] = "How".length;
// wordLengths["are"]; = "are".length;
// wordLengths["you?"] = "you".length;

for (let word of words) {
  console.log(word);
  wordLengths[ word ] = word.length;
}
