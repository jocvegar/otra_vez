import ApplicationController from './application_controller'

export default class extends ApplicationController {
	static targets = [ "output", "endTimer", "moreTime", "banner", "submitButton"]

	connect() {
		super.connect()
		this.startTimer()
	}

	startTimer() {
		var countDownDate = new Date(this.endTimerTarget.textContent).getTime();
		console.log("I got called");
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
			// if (distance < 0) {
			// 	clearInterval(x);
			// 	_this.outputTarget.textContent = "Tiempo expirado";
			// 	_this.moreTimeTarget.innerHTML = "";
			// 	_this.bannerTarget.innerHTML = "";
			// 	_this.submitButtonTarget.disabled = true
			// }
		}, 1000);
	}
}
