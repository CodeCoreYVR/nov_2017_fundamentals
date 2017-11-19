// Assignment: Sort your books
// Write some code that keeps asking the user for book names until the user
// enters "exit". After typing exit the program should display all the entered
// book names sorted by the book name.

// We create a container to hold all or our results...
// We call it library because it makes sense
let library = []

// Passing in true to a while loop will create an infinite loop
// If we want to stop this loop we need to call break inside of it
while (true) {
  // prompt the user for a book title
  let book = prompt('What is your book?')

  // we check if the book title is 'exit'
  if (book.toLowerCase() === 'exit') {
    // if so we stop asking the user for a book title, by breaking out of the loop
    break;
  } else {
    // if the user input is not 'exit'
    // we add the book to our library by pushing it into it
    library.push(book)
  }
}

// Once we break out of the loop we log the result
// Sort is useful for Strings not as much for Numbers
console.log(library.sort())
