import AOS from 'aos';
import 'aos/dist/aos.css';

const aos = () => {
	AOS.init({
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 50, // the delay on throttle used while scrolling the page (advanced)
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 500, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		mirror: false, // whether elements should animate out while scrolling past them
		once: true, // whether animation should happen only once - while scrolling down
	});
}

// export default aos;
document.addEventListener('turbolinks:load', () => {
	aos();
})
