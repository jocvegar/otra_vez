# frozen_string_literal: true

class ShoppingReflex < ApplicationReflex
	def clean_order(order_slug)
		@order = Order.friendly.find(order_slug.strip)
		@order.remove_associations if @order
	end
end
