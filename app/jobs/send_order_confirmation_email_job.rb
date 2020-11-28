class SendOrderConfirmationEmailJob < ApplicationJob
	queue_as :default

	def perform(order_slug)
		OrderMailer.confirmation(order_slug).deliver_now
	end
end
