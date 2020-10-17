import { Controller } from 'stimulus';

export default class extends Controller {
	static targets = ["source"]

	copy(event) {
		event.preventDefault()
		const el = document.createElement('textarea');
		el.value = this.sourceTarget.textContent;
		el.setAttribute('readonly', '');
		el.style.position = 'absolute';
		el.style.left = '-9999px';
		document.body.appendChild(el);
		const selected =
			document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		if (selected) {
			document.getSelection().removeAllRanges();
			document.getSelection().addRange(selected);
		}
	}
}
