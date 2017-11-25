
// jump function - declaritive function
// scope - global, global namespace
function jump() {

}

jump();

// anonymous
// function expression, expressive syntax
let swim = function() {
  console.log("i am swimming");
};
// function are values
// 10 is a value
// "Hello" is a value

swim; //[Function]
swim(); // executes that function

const mario = {
  swimming: swim // sharing a method
  //swimming() {} // this is a seperate method
};
const luigi = {
  swimming: swim // sharing a method
  //swimming() {} // this is a seperate method
};

// demo
let swim = function() {
  console.log("i am swimming");
};

const mario = {
  swimming: swim // sharing a method
  //swimming() {} // this is a seperate method
};
const luigi = {
  swimming: swim // sharing a method
  //swimming() {} // this is a seperate method
};

mario.swimming();
luigi.swimming();
