class CategoriasController < ApplicationController
	def index
		@order_item = current_order.order_items.new

		case params[:cat]
		when "hombre"
			@products = Product.hombre.existing.order("created_at DESC")
		when "mujer"
		  	@products = Product.mujer.existing.order("created_at DESC")
		when "otro"
			@products = Product.otro.existing.order("created_at DESC")
		else
			redirect_to root_url
		end

		if params[:option]
			@products = @products.where(option: params[:option])
		end
	end
end
