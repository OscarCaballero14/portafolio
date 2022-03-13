$(".carousel").owlCarousel({
	margin: 10,
	loop: true,
	autoplay: true,
	autoplayTimeout:2000,
	autoplayHoverPause: true,
	responsive:{
		0:{
			items:1,
			nav: false
		},
		600:{
			items: 2,
			nav: false
		},
		1000:{
			items:3,
			nav: false
		}
	}
});

ScrollReveal().reveal('.presentacion');
ScrollReveal().reveal('.educacion',{delay:500});
ScrollReveal().reveal('.intereses',{delay:500});
ScrollReveal().reveal('.habilidades',{delay:500});
ScrollReveal().reveal('.trabajos', {delay:500});