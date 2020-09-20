class Admin::SoldoutProductsController < ApplicationController
	layout "admin"

	def index
		@products = Product.sold_out.all.order("updated_at DESC")
	end
end
