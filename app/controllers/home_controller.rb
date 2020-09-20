class HomeController < ApplicationController
	def index
		@order_item = current_order.order_items.new
		@products = Product.existing.all.order("created_at DESC").first(10)
	end
end
