class PaymentsController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_order, only: [:new, :create]

	def new
		@order_items = @order.order_items.order("created_at DESC")
		@payment = Payment.new
	end

	def create
		@payment = @order.build_payment(payment_params)
		if @payment.save
			redirect_to root_path, notice: 'NICE!!'
		else
			render :new
		end
	end

	private

	def set_order
		@order = current_order
	end

	def payment_params
	  params.require(:payment).permit(:file)
	end
end
