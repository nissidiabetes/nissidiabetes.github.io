$(document).ready(function() {
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    $('body').toggleClass("overflow-hide");
    $('.mobile-nav').css('z-index', '25');
    $('.mobile-nav').toggleClass("open");

  });
});









let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



let imgHeight = $('.main-image').height();
let imgMargin = (imgHeight / 1.8) * -1;

$(document).ready(function(){
    $('.nissi-home').css('height', $(window).height());
  //  $('.main-image').css('margin-top', imgMargin);
    // Comma, not colon ----^
});
$(window).resize(function(){
    $('.nissi-home').css('height', $(window).height());
  //  $('.main-image').css('margin-top', imgMargin);

    // Comma, not colon ----^
});
