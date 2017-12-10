$('a').click(function(event){
  // this will prevent the default behaviour of the element which is in the case
  // of <a> is going to to the page with the anchor link
  event.preventDefault();
  alert('You are staying here :D !');
});

$('#search').submit(function(event){
  event.preventDefault();
  alert('No submissions!');
});


// Class Exercise
$('#form-1').submit(function(event){
  event.preventDefault();
  let color = $('input[type=text]').val();
  $('.circle').css('background-color', color);
});
