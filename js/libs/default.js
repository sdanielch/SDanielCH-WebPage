$(document).ready(function () {

$(".fbutton").click( function() {
  // alert("Probando");
//$(".main3").fadeOut(500).wait(1000).fadeIn(300);

$( ".main" ).animate({
    "max-height": "800px"
  }, 1000, function() {
    // Animation complete.
  });


});

});
