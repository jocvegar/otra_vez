class CategoriasController < ApplicationController
	def index
		@order_item = current_order.order_items.new
		case params[:cat]
		when "hombre"
			@products = Product.hombre.all.order("created_at DESC")
		when "mujer"
		  	@products = Product.mujer.all.order("created_at DESC")
		when "otro"
			@products = Product.otro.all.order("created_at DESC")
		else
			redirect_to root_url
		end
	end
end
