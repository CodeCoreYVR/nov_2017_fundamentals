// Assignment: Decaying Count
// Write some code that writes "1" to the console,
// then 1 second later writes "2" to the console,
// then 2 seconds after that writes "3" to the console,
// ...until it gets to "10".

function decayingCount() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}
decayingCount()


// -----------------------------------------------------------------------------
function decayingCount() {
  let delay = 0
  for (let i = 0; i <= 10; i++) {
    delay += i
    setTimeout(function() {
      console.log(i);
    }, delay * 1000);
  }
}
decayingCount()


// -----------------------------------------------------------------------------


function decayingCount() {
  let delay = 0
  for (let i = 0; i <= 10; i++) {
    delay += i
    counter(i, delay);
  }
}

function counter(i, delay) {
  setTimeout(function() {
    console.log(i);
  }, delay * 1000);
}

decayingCount()


// -----------------------------------------------------------------------------


function decayingCount() {
  var cycle = 1;

  function counter() {
    setTimeout(function() {
      if (cycle <= 10) {
        console.log(cycle++);
        counter();
      } else {
        console.log('Counter Complete');
      }
    }, cycle * 1000);
  }
  counter();

  return 'Counter Started'
}

decayingCount();


// -----------------------------------------------------------------------------


function decayingCount(cycle) {
  setTimeout(function() {
    if (cycle <= 3) {
      console.log(cycle++);
      decayingCount(cycle);
    } else {
      console.log('Counter Complete');
    }
  }, cycle * 1000);
  return 'Counter Started'
}

decayingCount(1);


// -----------------------------------------------------------------------------


let decay = (cycle = 1) => {
  setTimeout(() => {
    if (cycle <= 10) {
      console.log(cycle ++)
      decay(cycle)
    }
  }, cycle * 1000)

  return 'Counter Started'
}

decay();
