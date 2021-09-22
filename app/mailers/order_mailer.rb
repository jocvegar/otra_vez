class OrderMailer < ApplicationMailer
	def confirmation(order_slug)
		@order = Order.friendly.find(order_slug)
	  	mail to:  @order.address.correo,
	    subject: "[Otra Vez] Confirmación"
	end

	def notify_owner(order_slug)
		@order = Order.friendly.find(order_slug)
	  	mail to:  ["emanuel.nieto@gmail.com", "jocvegar@gmail.com, info@otravez.shop", "fernando.nieto@24-7intouch.com"],
	    subject: "Orden Nueva"
	end
end
