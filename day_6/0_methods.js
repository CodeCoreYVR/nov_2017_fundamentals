// methods - a function that exists within a class or object
// method acting is where you embody the character you are playing 24/7

let mario = {
  profession: "plumber",
  favouriteFood: "pizza",
  weight: 185,
  // defining behaviour
  run: function() { console.log("Am I running?") },
  jump: function() { console.log("Am I jumping?") },
  fly: function() { console.log("Am I flying?") }
};

mario.profession; // "plumber"
mario.run; // [function]
mario.run();

// (); <- execute a function
// add();

// array
let shoppingList = ["bread", "cheese", "butter"];
shoppingList.sort();
shoppingList.length;

const array = {
  length: 3,
  sort: function() {
    // algorithm to sort array
  }
}

// make a car object
// give it 3 properties: make, model, capacity, colour
// give it 3 methods: drive, stop, park
const car = {
  make: "Tesla",
  model: "Model 3",
  capacity: 5,
  colour: "red",
  // methods
  drive: function() { console.log("car is driving") },
  stop: function() { console.log("car is stopping") },
  park: function() { console.log("car is parking") },
  wipeWindows: function() { console.log("car is wiping windows") },
  radio: function() { console.log("play music") }
};

// test out our Tesla
// Test Driven Development
car.colour; // "red"
car.drive; // [Function]
car.stop(); // console.log...
car.park(); // console.log...
car.wipeWindows(); // console.log...

// if i turn on the radio, i want to hear sound
car.radio();

const cookie = {
  // properties of the cookie
  type: "chocolate chip",
  sugar: 10,
  flour: 15,
  glutten: false,
  // methods, behaviours assoc with cookie
  bake: function() { console.log("baking cookie...") },
  // removing ": function"
  eat() { console.log("eating cookie...") },
  share() { console.log("sharing cookie...") }
  // garbage => {}
};

// test your cookie
cookie.glutten; // false
cookie.eat();



//
// [
//   {
//     sort() { console.log("sorting") }
//   },
//   {},
//   {}
// ]
//
// for (let item of array) {
//   // if my item is an object
//   // loop through it's properties
//
// }
