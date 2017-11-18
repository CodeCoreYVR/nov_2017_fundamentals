// data structures

// Array
// one-dimensional array
// one piece of information needed to access the data
let christmasList = ["socks", "sweater", "jeans"];
christmasList[0];

// two-dimensional array
// two pieces of information need to access the data
// bingo
// spreadsheet
// tictactoe
// battleship
let twoDimensionalArray = [ [] ];

let row1 = [null, null, null];
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [
                  row1,
                  row2,
                  row3
                ];

let tictactoe = [
                  [null, null, null],
                  [null, null, null],
                  [null, null, null]
                ];

// row2[1] = 'x';
// how do i get to row2 from the tictactoe game board
tictactoe[1]; // gives the middle row
tictactoe[1][1]; // [row][column] zero-based


tictactoe[1][1] = "X"; // middle square
tictactoe[0][2] = "O"; // top right
tictactoe[0][0] = "X"; // top left
tictactoe[2][1] = "O"; // bottom middle

// [
//   ["X", null, "O"],
//   [null, "X", null],
//   [null, "O", null]
// ];

// STRETCH: try to make a tictactoe game in JavaScript

// 3 dimensional ARRAYS
let threeDimensionalArray = [[[]]];
// rubix cube
// face and row and column
//     [  ]
// [  ][  ][  ]
//     [  ]
//     [  ]

// [face][row][column]

// objects
const dog = {
  name: "Summer",
  age: 2,
  breed: "Golden Doodle",
  tricks: ["sit", "roll over", "beg"]
}

// for (of) // <- for ARRAYS
// iterate over the properties of our object
for (let property in dog) {
  console.log(property); // this will print out each property in our object
  if ( Array.isArray(dog[property]) ) {
    // iterate over the array
    for (let trick of dog[property]) {
      console.log(trick);
    }
  } else {
    console.log(dog[ property ]); // will print out each value in our object
  }
}

dog.name; // "Summer", dot operator
dog["name"]; // "Summer", square bracket syntax
// variable
let propertyPicker = "name";
dog[ propertyPicker ]; // "Summer", through a variable


// how do we tell what data type a variable is?

// typeof "Jacob"
// => 'string'
// typeof 38
// => 'number'
// typeof true
// => 'boolean'
// typeof []
// => 'object'
// typeof {}
// => 'object'
// Array.isArray([]); // class method
// => true
// Array.isArray({});
// => false



// player creator
const player = {
  name: "Gretzky",
  sport: "Hockey",
  number: 99
};

player.passing = 100;
player.shooting = 65;
player.skating = 74;
player.jumping = 0;

delete player.jumping;

player.shooting = 96;

// voting
// use my object as a hash table
NDP
Liberals
Conservatives
Green Party
Libertarians

// ballot
[ ] NDP
[ ] Liberals
[ ] Conservatives
[ ] Green Party
[ ] Libertarians

NDP - |||||||
Liberals - |||||||||||||||
Conservatives - |||||||

// abc
"abcdd"

// hash
// key: value;
// a - 1
// b - 1
// c - 1
// d - 2

// "abcdd".split("");

// version 1
// input
let letters = "abcdd";
const occurrences = {};
// occurrences.default = 0; // ruby syntax, not available in javascript

for (let letter of letters) {
  console.log(letter);
  // if this is the first vote for that party
  if (occurrences[ letter ] == undefined) {
    // initialize it to the number 1
    occurrences[ letter ] = 1;
  } else {
    // all subsequent votes can be mathematically calculated
    occurrences[ letter ] += 1;
  }
  // tally up the occurrences
}

// NaN - not a number
// occurences[ letter ] == undefined + 1


// output
// {
//   a: 1,
//   b: 1,
//   c: 1,
//   d: 2
// }

// version 2
let letters = "abcdd";
let chars = letters.split("");

for (let char of chars) {
  console.log(char);
}





// 1. pseudo code out the problem - write it in plain english
// 2. what is my input?  what is the final output?
// 3. create the middle, solve the easy problems first.
// 4. if necessary, brute force out
// 5. refactor, dry your code, make it beautiful
// 6. stack overflow, documentation, use the web

// 7. do what you know, use loops if you that's all you know
// 8. use console.log LOTS!!! visualize out the flow of data and values
// 9. comment comment comment!!! this will help you communicate to yourself and team mates when looking back at the code at a later time.
// 10. TODO: come back and work on this later

















//
