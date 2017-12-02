$('.shape');
$('.shape.black');
$('.shape').length;
$('.black.shape').length;

$('.shape.black').length + $('.shape.blue').length;
$('.shape.black, .shape.blue').length;
// <div class="shape black">
// <div class="shape blue">

// <div class="shape black blue">
// $('.shape.black.blue').

$('h1');
$('.small.circle');

// how we access items in our list of jquery
$('.small.circle').eq(0);


// gets only the first item in your list of anchor tags
$('a').attr('href');

// get a specific item in a wrapped set
$('a').eq(1).attr('href');

// sets all the items that were selected
$('a').attr('href', 'http://reddit.com');

// eq will allow you to set a specific item in your selected list
$('a').eq(0).attr('href', 'http://reddit.com');

// <a href="http://www.google.com">Google</a>

<div class="large black square shape highlight">


$('a').attr('class', 'highlight');
<a class="highlight" href="http://www.google.com/">Google</a>


<div class="small black square shape"></div>
$('.shape').attr('class', 'highlight');
<div class="highlight"></div>

$('.shape').addClass('highlight');
<div class="small black square shape highlight"></div>
$('.shape').removeClass('highlight');

// " " means all the instances of .shape inside #orange-container
$('#orange-container .shape');
$('#orange-container .shape').remove();
// <div id="orange-container">
//   <div class="shape">
//     <div class="shape"></div>
//   </div>
// </div>

// direct descendant
$('#orange-container > .shape');
$('#orange-container > .shape').remove();
// <div id="orange-container">
//   <div class="shape">

// <button id="reset">Reset</button>
// $('button#reset')
$('#reset').html('Launch Missles');


//
$('#purple-container').children().fadeOut();
$('.shape.red.diamond').parent();
$('.shape.red.diamond').parent().addClass('highlight');

$('.shape.red.diamond').parent().parent();

$('#orange-container').slideUp(10000);
$('#orange-container').slideDown(10000);

//$(document).ready(function() {});
//$(function(){}); // ready event

//$('span').click(function() {});

$('.shape').click(function() {
  console.log('A shape was clicked!');
});

$('.shape').click( function(){
  // callback instructions go here
});

// when i click on a shape it gets removed

// Event.MOUSEMOVE = 23903;
// mousemove
$('.shape').click(function(){

   $(this).fadeOut(1000);
});

//
$('.shape').mouseenter(function(){
	$(this).addClass('highlight');
});

$('.shape').mouseleave(function(){
	$(this).removeClass('highlight');
});



$('tr').mouseover(function(){
	$(this).addClass('highlight');
});

$('tr').mouseleave(function() {
	$(this).removeClass('highlight');
});




// append
// prepend
// css manipulation
// position example
// game example







//
