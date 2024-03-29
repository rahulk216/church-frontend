const open = document.querySelector('#open');
const close = document.querySelector('#close');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery-img');
const original = document.querySelector('.full-img');
previews.forEach((preview) => {
	preview.addEventListener('click', () => {
		modal.classList.add('open');
		const originalSrc = preview.getAttribute('data-original');
		body.style.overflow = 'hidden';
		original.src = `${originalSrc}`;
	});
});
modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('open');
		body.style.overflow = 'scroll';
	}
});
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
window.sr = ScrollReveal();
sr.reveal('.headline', {
	duration: 2000,
});

const showPage = () => {
  document.getElementById("preloader").classList.add('done');
  setTimeout(()=>{document.getElementById("preloader").style.display = 'none';}, 3000);
}
