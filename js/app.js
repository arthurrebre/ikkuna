// Main Header animation on scroll
var scrolled = false;
$(window).scroll(function() {
    if($(window).scrollTop() > 40 && scrolled == false){
      $('.main-header').addClass('scrolled');
      scrolled = true;
    } else if($(window).scrollTop() == 0) {
      $('.main-header').removeClass('scrolled');
      scrolled = false;
    }
});

// Menu
$('#btnMenu').click( function() {
    $('.main-menu').toggleClass('active');
    $('#btnMenu').toggleClass('change');
})

$('.main-wrapper').click( function() {
    if($('.main-menu').hasClass('active')){
        $('.main-menu').removeClass('active');
        $('#btnMenu').removeClass('change');
    }
})

// Smooth scrolling for menu links
$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});