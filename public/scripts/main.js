
$(window).scroll(function() {

  if ($(this).scrollTop()>500) {
      $( ".fade" ).fadeIn();
  } else {
    $( ".fade" ).fadeOut();
  }

});
