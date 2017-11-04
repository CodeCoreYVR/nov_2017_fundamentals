const age = Math.random() * 100;

// to construct a conditional in Javascript we can use the if statement
// you should provide an expression to the statement that ideally returns
// true or false.
// you can have as many `else if` as you wish and they all take conditions
// you can optionally have an `else` at the end that takes no condition
if(age > 80) {
  console.log('You are very wise!');
} else if(age > 50) {
  console.log('You are getting wiser');
} else if(age > 20) {
  console.log('You are young');
} else {
  console.log('You are very young');
}




const number = Math.random();

if(number >= 0.5) {
  console.log('Today is a lucky day');
} else {
  console.log('Today is an unlucky day');
}
