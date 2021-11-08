const open = document.querySelector('#open');
const close = document.querySelector('#close');
const body = document.querySelector('body');

open.addEventListener('click', () => {
	body.classList.add('open');
});

close.addEventListener('click', () => {
	body.classList.remove('open');
});

document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('gallery-slider-left') != null) {
		var sec = new Splide('#gallery-slider-left', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
			pagination: false,
		}).mount();

		var primary = new Splide('#gallery-slider', {
			width: '100%',
			autoplay: true,
			arrows: false,
			infinite: true,
		});

		primary.sync(sec).mount();
	}
	if (document.getElementById('footer-slider') != null) {
		var sec = new Splide('#footer-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
			pagination: true,
		}).mount();
	}
});

/*Scroll animation*/

window.sr = ScrollReveal();
sr.reveal('.headline',{
	duration: 2000,
});
sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '20rem',
	delay: 0,
});
sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '20rem',
	delay: 0,
});

