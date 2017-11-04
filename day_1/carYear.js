const carYear = parseInt(prompt('What year is your car?'));

if(carYear > 2010) {
  console.log('Your car is fairly new');
} else if(carYear > 2000) {
  console.log('Your car is starting to get old');
} else if(carYear > 1990) {
  console.log('Your car is starting pretty old');
}  else {
  console.log('The car is ancient');
}
