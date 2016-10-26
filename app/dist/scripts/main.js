// Configured with Greg Franko jQuery best practices.
// http://gregfranko.com/jquery-best-practices


(function($, window, document) {

// page-load effect

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('.into-subtitle-rotatingPhrase').html('magic carpet.');
    } else {
      $('.into-subtitle-rotatingPhrase').html('yellow brick road.');
    }
    if ($(this).scrollTop() > 350) {
      $('.into-subtitle-rotatingPhrase').html('portal gun.');
    }
    if ($(this).scrollTop() > 450) {
      $('.into-subtitle-rotatingPhrase').html('helper monkey.');
    }
    if ($(this).scrollTop() > 550) {
      $('.into-subtitle-rotatingPhrase').html('escape tunnel.');
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
