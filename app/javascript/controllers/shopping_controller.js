import ApplicationController from './application_controller'

export default class extends ApplicationController {
	static targets = [ "output", "endTimer", "banner", "moreTime", "submitButton", "orderSlug"]

	connect() {
		super.connect()
		this.startTimer()
	}

	startTimer() {
		var countDownDate = new Date(this.endTimerTarget.textContent).getTime();
		let _this = this
		// Every second
		var x = setInterval(function() {
			// Get today's date and time
			var now = new Date().getTime();

			var distance = countDownDate - now;

			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			_this.outputTarget.textContent = minutes + "m " + seconds + "s ";

			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(x);
				_this.outputTarget.textContent = "Tiempo expirado";
				_this.bannerTarget.innerHTML = "";
				_this.submitButtonTarget.style.display = "none";
				_this.moreTimeTarget.textContent = "";
				_this.stimulate('Shopping#clean_order', _this.orderSlugTarget.textContent)
				document.location.href="/";
			}
		}, 1000);
	}

	checkFile() {
		if (event.target.value) {
			this.submitButtonTarget.disabled = false
		} else {
			this.submitButtonTarget.disabled = true
		}
	}
}
