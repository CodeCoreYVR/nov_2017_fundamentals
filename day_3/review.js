// good evening everyone!

// day 1

// exercise - make a countdown to new years.
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, HAPPY NEW YEAR!

// brute force solution
console.log(10);
console.log(9);
console.log(8);
console.log(7);
console.log(6);
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);
console.log("Happy New Year!");

// use a while loop to countdown from 10 to 1

// let counter = 10;
// console.log(counter);
// counter = 9;
//
// counter = counter - 1;
// counter -= 1;
// counter--;
//
// console.log(counter);


// version 1
let counter = 10;

while (counter > 0) {
  console.log(counter);
  counter--;
}

console.log("Happy New Year!");

// version 2
let counter = 10;

while (counter >= 0) {
  if (counter === 0) {
    console.log("Happy New Year!");
  } else {
    console.log(counter);
  }

  counter--;
}

// double equals
// triple equals - value and type
2 == "2"; // true
2 === "2"; // false


// countdown from 10 to 5 and then prematurely shout "Happy New Year!"
let counter = 10;

while (counter > 0) {
  console.log(counter);

  if (counter === 5) {
    console.log("Happy New Year!");
    break; // allows you to exit out of a loop early
  }

  counter--;
}

// day 2
// HTML & CSS
<html>
  <head>
    <meta />
    <title></title>
  </head>
  <body>
    <!-- document -->
    <h1>Oliver Twist</h1>
    <h2>by Charles Dickens</h2>
    <p></p>
    <table></tables>
    <form action="http://www.italy.com/">
      <input type="text" />
      <input type="radio" name="crust" />
      <input type="radio" name="crust" />
      <input type="radio" name="crust" />
      <input type="checkbox"><label>Extra Cheese</label>
      <input type="checkbox"><label>Pepperoni</label>
      <input type="checkbox"><label>Mushrooms</label>
      <input type="submit">
    </form>
  </body>
</html>














//
