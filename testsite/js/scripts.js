




$(document).ready(function() {
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    $('body').toggleClass("overflow-hide");
    $('.menu_items').toggleClass("reveal");


  });
});