# frozen_string_literal: true

class ShoppingReflex < ApplicationReflex
	def clean_order(order_slug)
		@order = Order.find_by(slug: order_slug.strip)
		@order.remove_associations if @order
	end
end
