$(document).ready(function() {
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    $('body').toggleClass("overflow-hidden");
    //$('.logo-link-light').toggle();
    //$('.logo-link-dark').toggle();
    $('.mobile-nav').toggleClass("open");

  });
});






let servicesHeight = $('.nissi-services').height();
let servicesHeightAdj = servicesHeight - 120;

$(document).ready(function(){
    $('.nissi-home').css('height', $(window).height());
    //$('.services-outer').css('height', servicesHeightAdj);

    // Comma, not colon ----^
});
$(window).resize(function(){
    $('.nissi-home').css('height', $(window).height());
    //$('.services-outer').css('height', servicesHeightAdj);

    // Comma, not colon ----^
});


$(".year").text( (new Date).getFullYear() );
