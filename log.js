// jQuery preloading?
$(document).ready(function(){
  // will first fade out the loading animation
  jQuery("#status").fadeOut(4000);
        // will fade out the whole DIV that covers the website.
  jQuery("#preloader").delay(1000).fadeOut("slow");
  // jQuery(window).resize(function(){
  //   resizeWin();
  // });
  // load menu
  $('.menu_content').load('templates/menu.html');
});

// makes sure the whole site is loaded
jQuery(window).load(function() {
});

var myModel = Skull.model({
  title: 'Title',
  content: 'Donald Trump'
});
