'This is a String'

"This another String"

// Single quotes and double quotes are effectively the same, it's convenient
// to use double quotes if the string contain '
"He said it's raining"
// 'He said it's raining'  👈 will give an error so we use double quotes or
//                         we can escape the character by putting \ before it
'He said it\'s raining'

`One more way to define a String`
// defining strings with backtick is an ES6 feature, we can do what's called
// String interpolation with backticks which means that we can insert pieces
// of code within the string
`Hello ${5 + 5}`
'Hello ${5 + 5}'

("Hello," + "Erika" + "!").length
