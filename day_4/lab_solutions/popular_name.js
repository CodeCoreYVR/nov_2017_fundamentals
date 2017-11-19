// Assignment: [lab] Popular Name

// Given an object that looks like:
// names = { mike: 2, john: 3, jen: 5, eli: 1}
// Write a function that takes an object above and returns a string noting the
// most popular name. It should return a string that looks like "the most popular name is jen"

let names = { mike: 2, john: 3, jen: 5, eli: 1 }

function popularName(names) {
  // we need to create 2 variable to hold the result for the name and occurences
  let mostPopular = ""
  let occurences = 0

  // we loop over each person in the names object
  for(let person in names) {
    // we check the value of the name
    // if the value is greater than the occurences variable...
    // we set that person as mostPopular and the value to occurences
    if (names[person] > occurences) {
      mostPopular = person
      occurences = names[person]
    }
  }

  // Note since we are in a function, we need to return the result
  // Once we are done the loop we return the following string
  return `the most popular name is ${mostPopular}`
}
