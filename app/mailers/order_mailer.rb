class OrderMailer < ApplicationMailer
	def confirmation(order_slug)
		@order = Order.friendly.find(order_slug)
	  	mail to:  @order.address.correo,
	    subject: "[Otra Vez] Confirmación"
	end

	def notify_owner(order_slug)
		@order = Order.friendly.find(order_slug)
	  	mail to:  ["Fnieto@knoah.com", "jocvegar@gmail.com, info@otravez.shop"],
	    subject: "Orden nueva"
	end
end
