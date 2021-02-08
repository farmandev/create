(function($) {
    "use strict";

    //===== Prealoder
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

    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('open');
        $('.main-menu').toggleClass('open');

    });
    /*=========================
      OwlCarousel START
    ===========================*/

    // $(".showcase_slider").owlCarousel({
    //     items: 3,
    //     nav: true,
    //     dot: false,
    //     autoplayTimeout: 2000,
    //     loop: false,
    //     navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    //     margin: 4,
    //     smartSpeed: 450,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false,
    //             dot: true

    //         },

    //         768: {
    //             items: 2,

    //         },
    //         1000: {
    //             items: 3,

    //         }
    //     }


    // });
        $('.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            slideSpeed: 2000,
            autoplay: true,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
        });

    /* -------------------------------------
                  Responsive menu
          -------------------------------------- */
    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        setTimeout(function() {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function() {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

    };
    siteMenuClone();


    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


})(jQuery);