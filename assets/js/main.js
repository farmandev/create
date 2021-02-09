(function($) {
    "use strict";

    //Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    //Hamburger menu open
    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('open');
        $('.main-menu').toggleClass('open');

    });
   
    // Show or hide the scroll-to-top button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


})(jQuery);