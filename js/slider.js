$(document).ready(function() {

	var sliderInner = $('.slider-inner');
	var bodyHTML = $('body');
	var sliderControls = $('.slider-controls');
	var footerIcons = $('.main-footer__item:first-child').find('span');

	var images = [];
	images[0] = new Image();
	images[1] = new Image();
	images[2] = new Image();

	images[0].src = 'img/slide-img1.png';
	images[1].src = 'img/slide-img2.png';
	images[2].src = 'img/slide-img3.png';

	$('.slider-controls').find('a').click(function(e) {
		e.preventDefault();
		clearInterval(newTimerID);
		if (!$(this).hasClass('active-item')) {
			
			sliderControls.find('a').removeClass('active-item');
			$(this).addClass('active-item');
			var indexDot = $(this).index();

			sliderInner.find('li').removeClass('active-slide').fadeOut();

			if (indexDot == 0) {
				sliderInner.find('li').eq(indexDot).addClass('active-slide').fadeIn();
				bodyHTML.css(
					{'background-color' : '#849d8f',
					'background-image' : 'url('+images[0].src+')'
				});
				footerIcons.css('color', '#849d8f');
			} else if (indexDot == 1) {
				sliderInner.find('li').eq(indexDot).addClass('active-slide').fadeIn();
				bodyHTML.css({
					'background-color' : '#8996a6',
					'background-image' : 'url('+images[1].src+')'
				});
				footerIcons.css('color', '#8996a6');
			} else if (indexDot == 2) {
				sliderInner.find('li').eq(indexDot).addClass('active-slide').fadeIn();
				bodyHTML.css({
					'background-color' : '#9d8b84',
					'background-image' : 'url('+images[2].src+')'
				});
				footerIcons.css('color', '#9d8b84');
			}	
		}
		newTimerID = setInterval(goSlides, 7000);
	});//end click

	var newTimerID = setInterval(goSlides, 7000);

	function goSlides() {

		var currentSlide = sliderInner.find('.active-slide');
		var nextSlide = currentSlide.next();
		var currentDot = sliderControls.find('.active-item');
		var nextDot = currentDot.next();

		if ((nextSlide.length == 0) || (nextDot.length == 0)) {
			nextSlide = sliderInner.find('li').first();
			nextDot = sliderControls.find('a').first();
		}

		currentDot.removeClass('active-item');
		currentSlide.removeClass('active-slide').fadeOut();
		nextSlide.addClass('active-slide');
		nextDot.addClass('active-item');
		
		if (nextSlide.index() == 0) {
			nextSlide.addClass('active-slide').fadeIn();
			bodyHTML.css('background', '#849d8f url('+images[0].src+') no-repeat center top');
			footerIcons.css('color', '#849d8f');
		} else if (nextSlide.index() == 1) {
			nextSlide.addClass('active-slide').fadeIn();
			bodyHTML.css('background', '#8996a6 url('+images[1].src+') no-repeat center top');
			footerIcons.css('color', '#8996a6');
		} else if (nextSlide.index() == 2) {
			nextSlide.addClass('active-slide').fadeIn();
			bodyHTML.css('background',  '#9d8b84 url('+images[2].src+') no-repeat center top');
			footerIcons.css('color', '#9d8b84');
		}
	}
}); //end ready