// What header model would need?
/**
 *
 */
// TODO: design document structure

// Header template
// http://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
// document.getElementById("content").innerHTML = '<>'
// http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file

/*var headerModel = new Skull.Model({
  title: '',
  completed: ''
});*/

// document.getElementById('header').innerHTML = 'It is just a header';

$(function() {
  $('.menu_content').load("templates/header.html");
});
