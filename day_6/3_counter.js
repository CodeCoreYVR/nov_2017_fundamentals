// counter
let counter = 0;
counter = 1;
counter = counter + 1;
counter += 1;
counter++;

// let decrement = function() {
// }

const counter = {
  count: 0,
  step: 1,
  // methods
  setStep(number) {
    //if (number < 5) {
      this.step = number;
    //}
  },
  inc() {
    if (this.count < 10) {
      this.count += this.step;
    }
  },
  dec() {
    if (this.count > 0) {
      this.count -= this.step;
    }
  },
  reset() {
    this.count = 0;
    this.step = 1;
  }
};

// counter.step = 2;
counter.setStep(2);
// ADD 2 METHODS: dec(), reset()
// dec can't go below zero
// change the step
// chaning the inc and dec

counter.inc(); // 1
counter.inc(); // 2
counter.inc(); // 3
counter.setStep(2);
counter.inc(); // 5
counter.inc(); // 7
counter.dec(); // 5

counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.dec();
counter.dec();
counter.dec();
counter.reset();
counter.count;

// counter.count = 1;
// counter.count++;
// counter.count+=1;
//
// counter.count = 10;
// counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;counter.count++;
