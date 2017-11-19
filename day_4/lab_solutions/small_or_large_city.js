// Assignment: Small or Large city
// Write a function that takes an object that looks like:
// cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }
// and prints if the city is large (more than 150,000) or small (otherwise).
// The printout should look something like: vancouver is a large city

// [Stretch] Print the city name capitalized

const citiesInBC = { vancouver: 603502, burnaby: 223220, langley: 104177 }

function citySize(cities) {
  // to loop over an object we use a... for in loop
  for(const city in cities) {
    // we check the value which is the population and see if it is greater than 150000
    if (cities[city] > 150000) {
      // we return a string because we are in a function
      return `${city} is a large city`
    } else {
      return `${city} is a small city`
    }
  }
}

// with stretch
function citySize(cities) {
  for(const city in cities) {
    if (cities[city] > 150000) {
      return `${capitalize(city)} is a large city`
    } else {
      return `${capitalize(city)} is a small city`
    }
  }
}

// we simply create a capitalize function and use it in the for in loop
function capitalize(word) {
  // word[0] gives us the first letter of the string, and we make it uppercase
  // word.substr(1) gives us everything from the string at index 1 to the end
  word[0].toUpperCase() + word.substr(1)
}
