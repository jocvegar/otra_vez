import { Controller } from 'stimulus';


export default class extends Controller {
	static targets = [ "list", "icon" ]

	toggle() {
		const listElement = this.listTarget
		listElement.classList.toggle("show")

		const iconElement = this.iconTarget
		iconElement.classList.toggle("fa-plus")
		iconElement.classList.toggle("fa-minus")
	}
}
