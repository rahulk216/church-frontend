const open =document.querySelector('#open');
const close =document.querySelector('#close');
const body = document.querySelector('body');

open.addEventListener('click', ()=>{
    body.classList.add('open');
})

close.addEventListener('click', ()=>{
    body.classList.remove('open');
})

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
	if (document.getElementById('gallery-slider') != null) {
	}
	if (document.getElementById('team-slider') != null) {
		new Splide('#team-slider', {
			width: '100%',
			arrows: false,
			autoplay: true,
			infinite: true,
		}).mount();
	}
});
