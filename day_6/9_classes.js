// objected oriented programming - OOP

// classes
class Animal {
  constructor(name, numOfLegs, canFly) {
    // instance variable or property
    this.name = name;
    this.numOfLegs = numOfLegs;
    this.canFly = canFly;
  }

  run() {
    console.log(`${this.name} is running!`);
  }
}

class Reptile extends Animal {
  constructor(name, numOfLegs, canFly, blood) {
    super(name, numOfLegs, canFly);
    this.blood = blood;
  }
}

// create an instance of the animal class and store it in the dog variable
let dog = new Animal("fido", 4, false);
let cat = new Animal("tom", 4, false);
let bird = new Animal("tweety", 2, true);
dog.run();
cat.run();
bird.run();

let lizard = new Reptile("max", 4, false, "cold");
lizard.run();

cat.name;
dog.name;
bird.name;

// let dog = {
//   name:
// };
// let cat = {
//   name:
// };
// let bird = {
//   name:
// }

// create an instance of the array class and store it in the shoppingList variable
let shoppingList = new Array();

// create an instance of the object class and store it in the car variable
const car = new Object();

// real estate
// class blueprint
// general contractor
// trades people
// permit
// constructing
// object house1
// object house2
// object house3
// object house4
