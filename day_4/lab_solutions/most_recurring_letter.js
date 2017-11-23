// Prompt the user for an input sentence and then alert the user with the most
// recurring letter in the input. You should alert something like
// "the most recurring letter in your sentence is 'o'"


// Ask the user for input
let sentence = prompt("Please enter a sentence...")

// This variable is an empty object, it will contain all of our unitque letters
let occurrences = {}

// We can interate over a string just like an array
// for example, the string "hello" will have the following location indexes
// "hello"
//  01234
// "hello"[1] will give us 'e'
// "hello"[4] will give us 'o'

// for each letter of the sentence we will do something...
for (let letter of sentence) {
  // If the letter is an empty space... we skip the letter
  // I just wanted to show you we can skip a cycle of a loop
  // In a very similar exercise frequency_of_letter.js, I handle this empty
  // spece situation differently
  if (letter === ' ') { continue }

  // check if the letter exists in the occurences object
  if (occurrences[letter] == undefined) {
    // if it does NOT we set it to 1
    occurrences[letter] = 1;
  } else {
    // if it already exists, we add one to the value
    occurrences[letter] += 1;
  }
}

console.log(occurrences)
