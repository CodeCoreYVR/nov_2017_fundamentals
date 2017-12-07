// In the jQuery Lab: http://bit.ly/jquery-lab
// Do the following exercises:

// Part 1
// 1. Select all red shapes inside the orange container
$("#orange-container .red.shape")

// 2. Select all medium or small shapes inside the green container
$("#green-container .medium, #green-container .small")

// 3. Select all shapes inside any container
$(".container .shape")

// 4. Select all link tags
$("a")

// 5. Select all the link tags inside an "li" tag
$("li a")

// 6. Count the number of small blue circles
$(".blue.circle")


// Part 2
// 1. When "button 1" is clicked, remove all shapes.
$("button#button-1").on("click", function(event) {
  $(".shape").each(function(index, element) {
    $(element).hide()
  })
})

// 2. When "button 2" is clicked, disable button 2. (Set the "disabled" attribute to true)
$("button#button-2").on("click", function(event) {
  $(this).attr('disabled', true);
})

// 3. When "button 3" is clicked, set the button message to "Button 3 was clicked"
$("button#button-3").on("click", function(event) {
  $("p#button-message").text("Button 3 was clicked")
})


// Part 3
// 1. When any button is clicked, set the button message to "Button [button id] was clicked"
$("button").on("click", function(event) {
  var buttonText = $(this).text()
  $("p#button-message").text(buttonText + " was clicked")
})
