$(document).ready(function() {
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    $('body').toggleClass("overflow-hide");
    $('.logo-link-light').toggleClass("logo-hide");
    $('.logo-link-dark').toggleClass("logo-show");
    $('.menu-link-container').toggleClass("open");




  });
});


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
