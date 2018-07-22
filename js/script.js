$(function ($) {
    "use strict";

    //    global variable declare
    var $window = $(window);
    var html_body = $('html, body');

    //    preloader js start 
    $window.load(function () {
        setTimeout(function () {
            $('#preloader').fadeOut('slow', function () {});
        }, 600);
    });
    //    preloader js end


    // navbar js start
    $('header ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
                return false;
            }
        }
    });
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 65
    });

    $window.scroll(function () {
        if ($window.scrollTop()) {
            $(".navigation").addClass('navbaraddcolor');
        } else {
            $(".navigation").removeClass('navbaraddcolor');
        }
    })
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    // navbar js end


    //service part js start
    $('.serviceslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //serviec part js end

    //ourcreativework part js start


    //team_slider js
    $('.team_slider').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: false,
        speed: 1000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //clientpart js start
    $('.clientslide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //clientpart js end

    //testimonial part js start
    $('.testimonialslider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    //testimonial js end

    //video part js start
    $('.venobox').venobox();
    //video part js end

    //    bottom to top js start
    var amountScrolled = 300;
    var bootomclass = $('.bottomtotop');
    bootomclass.hide();
    $window.scroll(function () {
        if ($window.scrollTop() > amountScrolled) {
            bootomclass.fadeIn('slow');
        } else {
            bootomclass.fadeOut('slow');
        }
    });

    bootomclass.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600);
        return false;
    });
        /*---------------------------------------------
     Portfolio Activation
    --------------------------------------------- */

    $('.food-menu-list').mixItUp();

     
        // counter js start
        $('.counter').counterUp({
            delay: 20,
            time: 3000
        });  

        	/*--google maps
	-------------------------------------*/
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(34.1015097, -117.5464075)
			
		};
		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.BOUNCE,
			position: new google.maps.LatLng(34.1015097, -117.5464075)
		});
		marker.setAnimation(google.maps.Animation.BOUNCE);
	};


});

/*
Template Name:Bprime - Business Consulting and Professional Services HTML Template.
Author: Envatoprime.
Designed by: Envatoprime.
Version: 1.00.
*/
