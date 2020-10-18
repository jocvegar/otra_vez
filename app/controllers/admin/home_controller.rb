class Admin::HomeController < ApplicationController
  	before_action :authenticate_admin!
  	layout "admin"

	def index
		@orders_new = Order.where(submitted: true, shipped: false, declined: false).count
		@orders_total = Order.where(submitted: true).count
	end
end
