// data types
// integers
// floats
// strings
// booleans

// ARRAYS!
// list of data
// indexed list of data


// packing list
let packingList = new Array();

let name = "Jacob";
let age = 38;
let fullName = ["Jacob", "Tran"];
let bankData = ["Jacob", 38, 1930.94, "Canadian", true];

let packingList = ["binoculars", "mosquito repellent", "shorts", "sandals", "imodium"];
name;
age;
// zero-based:           0                 1               2         3          4
let packingList = ["binoculars", "mosquito repellent", "shorts", "sandals", "imodium"];
packingList[0]; // "binoculars"
packingList[4]; // "imodium"

packingList.push("Sapien"); // adds this string to the end of our list
packingList.pop(); // removes the last item on our packingList
// unshift
// shift
// slice
// splice

// unpacking using the brute force methods
packingList[0];
packingList[1];
packingList[2];
packingList[3];
packingList[4];

// loops
// for (of)
// iterate over an Array
for (let item of packingList) {
  console.log(item); // the first time through, item is equal to "binoculars"
  // the first item on our list
}

// for (let i=0; i<packingList.length; i++) {
//  packingList[i];
// }


packingList.length; // this will return an integer containing the number of items in your list


let winningNumbers = [13, 38, 42, 8, 7, 11];

for (let number of winningNumbers) {
  console.log(number);
}

for (let number of numbers) {}
for (let name of names) {}
for (let item of items) {}
for (let product of products) {}

// what is the sum of all the numbers?
13 + 38 + 42 + 8 + 7 + 11; // 119

let total = 0;

for (let number of winningNumbers) {
  total += number;
  // total = total + number;
}

// strings
// c-h-r-i-s-t-m-a-s
let holiday = "Christmas";

for (let letter of holiday) {
  console.log(letter);
}

holiday[0]; // "C"
holiday[1]; // "h"
holiday[2]; // "r"
holiday[3];
holiday[4];
holiday[5];

holiday.length;

// Chirstmos
holiday[7] = "o";

// string are immutable

// let and var
let name = "Jacob";
let name = "P Diddy";
// will throw

var name = "Jacob";
var name = "P Diddy";
// will not throw error










//




//
