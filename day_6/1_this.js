
// what is this?
// who called you?
// who was responsible for this?

// "this" is a keyword in javascript
// relative referencing

const vehicle = {
  // properties
  make: "Honda",
  model: "Civic",
  year: 2015,
  capacity: 5,
  colour: "silver",
  seatType: "bucket",
  speed: 10,
  // methods
  drive() {
    // absolute referencing
    console.log(`you are driving at ${ car.speed } km/h`);

    // relative referencing
    console.log(`you are driving at ${ this.speed } km/h`)
  },
  stop() {},
  park() {},
  wipeWindows() {}
};

// absolute reference
vehicle.speed;
vehicle.drive();
