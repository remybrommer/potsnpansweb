// Configured with Greg Franko jQuery best practices.
// http://gregfranko.com/jquery-best-practices


(function($, window, document) {

// page-load effect

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.intro-subtitle-rotatingPhrase').html('magic carpet.');
    } else {
      $('.intro-subtitle-rotatingPhrase').html('escape pod.');
    }
    if ($(this).scrollTop() > 400) {
      $('.intro-subtitle-rotatingPhrase').html('portal gun.');
    }
    if ($(this).scrollTop() > 500) {
      $('.intro-subtitle-rotatingPhrase').html('helper monkey.');
    }
    if ($(this).scrollTop() > 600) {
      $('.intro-subtitle-rotatingPhrase').html('jetpack.');
    }
  });
});

// fade-in effect

  $(document).ready(function() {
    $(window).scroll( function(){
      $('.fade-in').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
        }
      });
    });
  });


}(window.jQuery, window, document));
