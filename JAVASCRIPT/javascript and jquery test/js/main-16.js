'use strict';


$(function() {

	// configuration
	var width = 720;
	var animationSpeed = 1500;
	var pause = 3000;
	var currentSlide = 1;

	// DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentSlide++;
				console.log(currentSlide, $slides.length);
				if(currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider (){
		clearInterval(interval);
	}

	startSlider();

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

});

