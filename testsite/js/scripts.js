// Hamburger
$(document).ready(function() {

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    $('body').toggleClass("overflow-hidden");
    $('.mobile-nav').toggleClass("open");
  });


  $('.mobile-link').click(function(){
    $('.mobile-nav').removeClass("open");
    $('.hamburger').removeClass("is-active");
    $('body').removeClass("overflow-hidden");
  });

});




// Home Page Height
$(document).ready(function(){
    $('.nissi-home').css('height', $(window).height());
});
$(window).resize(function(){
    $('.nissi-home').css('height', $(window).height());
});


// Copyright Year
$(".year").text( (new Date).getFullYear() );



// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
