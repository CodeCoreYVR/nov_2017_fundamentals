let counter = 1;

const intervalId = setInterval(function(){
  console.log(`${counter} - Hello`);
  counter++;
  if(counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);

console.log('Hello World');
