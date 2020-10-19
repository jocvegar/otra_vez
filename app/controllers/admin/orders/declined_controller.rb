class Admin::Orders::DeclinedController < ApplicationController
	layout "admin"

	def index
		@orders = Order.where(declined: true).order("updated_at DESC")
	end
end
