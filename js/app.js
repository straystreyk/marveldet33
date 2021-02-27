$(function(){

	const slider = $('.slider');
	const slider2 = $('.slider-2');
	const burger = $('.burger');
	const nav = $('.nav');
	const exitNav = $('.exit-nav');

	slider.slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	})

	slider2.slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    }
		  ]
	})

	burger.click(function() {
		burger.toggleClass('transform-burger');
		nav.toggleClass('nav-open');
		$('body').toggleClass('stop-scrolling');
		if(nav.hasClass('nav-open')) {
			$('.social').css('background', 'transparent');
		}

		if ($(window).innerWidth() < 768) {
			if(nav.hasClass('nav-open')) {
				$('.social').css('background', 'transparent');
			} else {
				$('.social').css('background', '#000');
			}
		}
	});

	exitNav.click(function() {
		burger.toggleClass('transform-burger');
		nav.toggleClass('nav-open');
		$('body').toggleClass('stop-scrolling');
		if ($(window).innerWidth() < 768) {
			if(nav.hasClass('nav-open')) {
				$('.social').css('background', 'transparent');
			} else {
				$('.social').css('background', '#000');
			}
		}
	});

})