(function ($) {
	'use strict';

	// ----------------------------------------
	// Sticky Menu
	// ---------------------------------------- 
	window.addEventListener('scroll', function () {
		var navigation = document.querySelector('.navigation');
		if (this.document.documentElement.scrollTop > 100) {
			navigation.classList.add('nav-bg');
		} else {
			navigation.classList.remove('nav-bg');
		}
	});

	// ----------------------------------------
	// Background Color
	// ---------------------------------------- 
	var elementsWithDataColor = document.querySelectorAll('[data-color]');
	for (var i = 0; i < elementsWithDataColor.length; i++) {
		var element = elementsWithDataColor[i];
		var backgroundColor = element.getAttribute('data-color');
		element.style.backgroundColor = backgroundColor;
	}

	// ----------------------------------------
	// Progress Bar
	// ---------------------------------------- 
	let progress = document.querySelectorAll('[data-progress]');
	for (let i = 0; i < progress.length; i++) {
		let element = progress[i];
		let progressValue = element.getAttribute('data-progress');
		element.style.bottom = progressValue;
	}

	// ----------------------------------------
	// Hero Parallax
	// ---------------------------------------- 
	window.onload = function () {

		var parallaxBox = document.getElementById('parallax');
		/*
		 Fix js error, occurred at pages other than the home page. 
		 When there're no parallax, just ignore the below
		 other operations, as below elements are bingding to the parallax.
		*/
		if (!parallaxBox) {
			return;
		}

		var
			/* c1left = document.getElementById('l1').offsetLeft,
			c1top = document.getElementById('l1').offsetTop, */
			c2left = document.getElementById('l2').offsetLeft,
			c2top = document.getElementById('l2').offsetTop,
			c3left = document.getElementById('l3').offsetLeft,
			c3top = document.getElementById('l3').offsetTop,
			c4left = document.getElementById('l4').offsetLeft,
			c4top = document.getElementById('l4').offsetTop,
			c5left = document.getElementById('l5').offsetLeft,
			c5top = document.getElementById('l5').offsetTop,
			c6left = document.getElementById('l6').offsetLeft,
			c6top = document.getElementById('l6').offsetTop,
			c7left = document.getElementById('l7').offsetLeft,
			c7top = document.getElementById('l7').offsetTop,
			c8left = document.getElementById('l8').offsetLeft,
			c8top = document.getElementById('l8').offsetTop,
			c9left = document.getElementById('l9').offsetLeft,
			c9top = document.getElementById('l9').offsetTop;

		parallaxBox.onmousemove = function (event) {
			event = event || window.event;
			var x = event.clientX - parallaxBox.offsetLeft,
				y = event.clientY - parallaxBox.offsetTop;

			/*  mouseParallax('l1', c1left, c1top, x, y, 5); */
			mouseParallax('l2', c2left, c2top, x, y, 25);
			mouseParallax('l3', c3left, c3top, x, y, 20);
			mouseParallax('l4', c4left, c4top, x, y, 35);
			mouseParallax('l5', c5left, c5top, x, y, 30);
			mouseParallax('l6', c6left, c6top, x, y, 45);
			mouseParallax('l7', c7left, c7top, x, y, 30);
			mouseParallax('l8', c8left, c8top, x, y, 25);
			mouseParallax('l9', c9left, c9top, x, y, 40);
		};

	};
	function mouseParallax(id, left, top, mouseX, mouseY, speed) {
		var obj = document.getElementById(id);
		var parentObj = obj.parentNode,
			containerWidth = parseInt(parentObj.offsetWidth),
			containerHeight = parseInt(parentObj.offsetHeight);
		obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
		obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
	}

	// ----------------------------------------
	// Testimonial Slider 
	// ----------------------------------------  
	new Swiper(".testimonial-slider", {
		loop: true,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	// ----------------------------------------
	// Clients Logo Slider
	// ----------------------------------------  
	new Swiper(".client-logo-slider", {
		loop: true,
		autoHeight: true,
		spaceBetween: 20,
		speed: 1500,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			},
		},
	});

	// ----------------------------------------
	// Shuffle js filter and masonry
	// ---------------------------------------- 
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		document.querySelectorAll('input[name="shuffle-filter"]').forEach(btn => {
			btn.addEventListener("change", () => {
				if (btn.checked) {
					myShuffle.filter(btn.value);
				}
			});
		});
	}
})();