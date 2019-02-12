$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 1
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//Size Scaling
function getSize() {
    size = $( "p" ).css( "font-size" );
    size = parseInt(size, 10);
    $( "#font-size" ).text(  size  );
  }
  
  //get inital font size
  getSize();
  
  $( "#up" ).on( "click", function() {
  
    // parse font size, if less than 50 increase font size
    if ((size + 2) <= 22) {
      $( "p" ).css( "font-size", "+=2" );
      $( "#font-size" ).text(  size += 2 );
    }
  });
  
  $( "#down" ).on( "click", function() {
    if ((size - 2) >= 12) {
      $( "p" ).css( "font-size", "-=2" );
      $( "#font-size" ).text(  size -= 2  );
    }
  });

(function($) {
    "use strict";
     $(document).on('ready', function() {
	
		
		/*====================================
		03. Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
		04. Home Slider JS
		======================================*/
		$('.hero-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause:true,
			autoplayTimeout:4000,
			smartSpeed:600,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:true,
			lazyload: true,
			loop:true,
			responsive:{
				300: {
					nav:false,
				},
				480: {
					nav:false,
				},
				768: {
					nav:false,
				},
				1170: {
					nav:true,	
				},
			}
		});
		
		/*===============================
		05. Service Slider JS
		=================================*/ 
		$(".service-slider").owlCarousel({
			autoplay:true,
			smartSpeed: 200,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			dots:false,
			nav:true,
			loop:true,
			margin:10,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					nav:true,
					items:4,
				},
			}
		});	
		
		/*====================================
		07. Service Popular Slider JS
		======================================*/		
		$('.more-service-slider').owlCarousel({
			items:1,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});	
		
		/*====================================
		08. Testimonials Slider JS
		======================================*/
		$('.testimonials-slider').owlCarousel({
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:true,
			items:1,
		});			
		
		/*====================================
		10. Blog Slider JS
		======================================*/
		$('.blog-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:3000,
			smartSpeed:500,
			margin:0,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:true,
		});	
		
		
		/*===============================
		17. Text Rotating JS
		=================================*/ 
		$("#text-rotating").Morphext({
			// The [in] animation type. Refer to Animate.css for a list of available animations.
			animation: "flipInX",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 2500,
			complete: function () {
				// Called after the entrance animation is executed.
			}
		});		

	});
	
})(jQuery);