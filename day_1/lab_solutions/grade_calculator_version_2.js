// Assignment: [Lab] Grade Calculator

// Alternate Question...
// I did this slightly differently from what the question asks. We know how to
// generate a random number, we have done this alot already.
// I would like you to try this with a while loop.
// Keep asking the user for for a score until you get one that is between 0 and 100
// print out their letter grade just like you did above

// Set the default score
let score = null

// This while loop will go on forever until we "break" it
while (true) {
  // We ask the user for a score between 0 and 100. We save it to the score variable
  score = parseInt(prompt("Please enter your score (0-100)"));

  // Check if the score meets our conditions
  // Is it between 0 and 100? If so, we "break" out of the loop
  // If the user gives a string, or any number out of range, then this will be false
  if (score >= 0 && score <= 100) {
    break;
  }
}

// Check the score against the conditions
if (score >= 86) {
  console.log("A")
} else if (score >= 72) {
  console.log("B")
} else if (score >= 60) {
  console.log("C")
} else if (score >= 50) {
  console.log("D")
} else if (score < 50) {
  console.log("F")
}
