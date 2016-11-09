// jQuery preloading?
$(document).ready(function(){
  // will first fade out the loading animation
  jQuery("#status").fadeOut(4000);
        // will fade out the whole DIV that covers the website.
  jQuery("#preloader").delay(1000).fadeOut("slow");
  // jQuery(window).resize(function(){
  //   resizeWin();
  // });

});

// makes sure the whole site is loaded
jQuery(window).load(function() {
});

$(function() {
  $('.menu_content').load('templates/header.html');
});
