(function($){
	"use strict";
	jQuery(document).on('ready', function () {

	var wind = $(window);
		  var wHeight = window.innerHeight;
		  //search bar middle alignment
		  $('#mk-fullscreen-searchform').css('top', wHeight / 2);
		  //reform search bar
		  jQuery(window).resize(function() {
			wHeight = window.innerHeight;
			$('#mk-fullscreen-searchform').css('top', wHeight / 2);
		  });
		  // Search
		  $('#search-button').click(function() {
			console.log("Open Search, Search Centered");
			$("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
		  });
		  $("a.mk-fullscreen-close").click(function() {
			console.log("Closed Search");
			$("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
		  });
		  
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
		
        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });
		
		var nav = $('nav');
		var navHeight = nav.outerHeight();
		//  Star Scrolling nav
		$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 0)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});
		
        // Button Hover JS
        $(function() {
            $('.default-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });


	// Product Shop Now owl
	$('#product-shop-slide').owlCarousel({
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 700,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				dotsEach: 2,
				items: 3
			}
		}
	});
        // Testimonial Slider
		$('.testimonial-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 20,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });


        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
        

    });
	

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader Area
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});

}(jQuery));