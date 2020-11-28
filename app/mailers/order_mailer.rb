class OrderMailer < ApplicationMailer
	def confirmation(order_slug)
		@order = Order.friendly.find(order_slug)
	  	mail to:  @order.address.correo,
	    subject: "[Otra Vez] Confirmación"
	end
end
