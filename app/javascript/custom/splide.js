import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';


const splide = () => {
	new Splide( '#image-slider', {
		type   : 'loop',
		perPage: 3,
		autoplay: 'playing',
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
		gap: '1rem',
		lazyLoad: true
	} ).mount();
}

// export default splide;
document.addEventListener('turbolinks:load', () => {
  splide();
})
