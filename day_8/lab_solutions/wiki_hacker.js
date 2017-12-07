// Go to http://en.wikipedia.org/wiki/Pug in your browser.

// Write some jQuery to change the title of the article to Your Name.
$('#firstHeading').text('Thug')

// Write some jQuery to hide the body of the article
$('#mw-content-text').hide()

// Write some jQuery to remove the wikipedia logo
$('.mw-wiki-logo').hide()
$('.mw-wiki-logo').css('background-image', 'none')

// Write some jQuery to change the image on the right hand side to a different picture
$("td a.image img").attr('src', 'https://avatars1.githubusercontent.com/u/16989770?s=400&v=4')
// you might have to do this as well...
$("td a.image img").attr('srcset', '')
