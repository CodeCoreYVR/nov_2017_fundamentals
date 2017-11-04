"Tam"
"Hello Tam"
"Goodbye Tam"
"My name is Tam"

const name = "Alex";

`Hello ${name}`
`Goodbye ${name}`
`my name is ${name}`

// use let if you expect the value to change or to be re-set
// use const if you expect the value not change
// var is used with ES5 mostly, so avoid using it

// Note that when you declare a variable using let or const you can't re-declare
// the variable with the same name
// the code below will give you an error:
let number = 1;
let number = 2;

const firstName = 'Wes';
const lastName = 'Corman';
const fullName = firstName + ' ' + lastName;








//
