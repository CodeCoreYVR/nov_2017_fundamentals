// bring in an external class
const Cookie = require('./cookie.js');

class Oreo extends Cookie {
  constructor(sugar, flour, glutten) {
    super(sugar, flour, glutten);
  }

  eat() {
    console.log("dip in milk...");
    super.eat(); // run your parents equivalent
  }
}

let oreo = new Oreo(20, 10, false);
oreo.eat();

// class Object {}
// class Array extends Object {}
Math.random();
Math.round();
Math.abs();
Math.ceil();
Math.PI;
