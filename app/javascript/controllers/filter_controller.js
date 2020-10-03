import { Controller } from 'stimulus';

export default class extends Controller {
	static targets = [ "optionList", "optionIcon", "sizeList", "sizeIcon" ]

	toggle_option() {
		const listElement = this.optionListTarget
		listElement.classList.toggle("show")

		const iconElement = this.optionIconTarget
		iconElement.classList.toggle("fa-plus")
		iconElement.classList.toggle("fa-minus")
	}

	toggle_size() {
		const listElement = this.sizeListTarget
		listElement.classList.toggle("show")

		const iconElement = this.sizeIconTarget
		iconElement.classList.toggle("fa-plus")
		iconElement.classList.toggle("fa-minus")
	}
}
