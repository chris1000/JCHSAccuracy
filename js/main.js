

$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 1
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
(function() {

  // get's all video wrapper divs
  var youtube = document.querySelectorAll(".youtube");

  // iterates through all the divs
  for (var i = 0; i < youtube.length; i++) {


    youtube[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();



$(".single-faq").click(function () {
			$(".single-faq.active").removeClass("active");

			$(this).addClass("active");
		});

  $(document).ready(function(){
  var resize = new Array('p','.resizable');
  resize = resize.join(',');
  
  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
    $("#reset").click(function(){
      $(resize).css('font-size', resetFont);
    });
  
  //increases font size when "+" is clicked
  $("#increase").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*1.1;
    $(resize).css('font-size', newFontSize);
    return false;
  });
  
  //decrease font size when "-" is clicked
  
  $("#decrease").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });
  
});

  var doubleTouchStartTimestamp = 0;
$(document).bind("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 1000 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});

(function($) {
    "use strict";
     $(document).on('ready', function() {
	
		
		
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
			autoplayHoverPause:true,
			autoplayTimeout:4000,
			smartSpeed:600,
			merge:true,
			dots:true,
			loop:true,
			
		});
		
		
		
	});
	
})(jQuery);