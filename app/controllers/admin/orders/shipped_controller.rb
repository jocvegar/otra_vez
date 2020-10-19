class Admin::Orders::ShippedController < ApplicationController
	layout "admin"

	def index
		@orders = Order.where(shipped: true).order("updated_at DESC")
	end
end
