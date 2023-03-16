$(function() {
   $(window).on("scroll", function() {
       if($(window).scrollTop() > 50) {
           $(".header").addClass("active");
       } else {
           //remove the background property so it comes transparent again (defined in your css)
          $(".header").removeClass("active");
       }
   });
});

var scroll = 0;
window.onscroll = onScroll;
function onScroll() {
  var top = window.pageYOffset;
  if (scroll < top) {
    $(".header").addClass("opacity");
  } else if (scroll > top) {
    $(".header").removeClass("opacity");
  }
  scroll = top;
}


