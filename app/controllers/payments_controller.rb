class PaymentsController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_order

	def new
		@order_items = @order.order_items.order("created_at DESC")
		@payment = Payment.new
	end

	def create
		@payment = current_order.build_payment(payment_params)
		@payment.payment_method = "transferencia"
		if @payment.save
			@order.update(submitted: true)
			redirect_to gracias_path(id: @order.slug)
			OrderMailer.confirmation(@order.slug).deliver_later
			OrderMailer.notify_owner(@order.slug).deliver_later
			session.delete(:order_id)
			# SendOrderConfirmationEmailJob.perform_later(@order.slug)
		else
			broadcast_errors @payment, payment_params
		end
	end

	def compra_click
		@payment = current_order.build_payment(payment_method: 'compra_click')

		if @payment.save
			@order.update(submitted: true)
			redirect_to gracias_path(id: @order.slug)
			OrderMailer.confirmation(@order.slug).deliver_later
			OrderMailer.notify_owner(@order.slug).deliver_later
			session.delete(:order_id)
			# SendOrderConfirmationEmailJob.perform_later(@order.slug)
		else
			render :new
		end
	end

	def extend_timer
		if @order.update(end_timer: @order.end_timer + 10.minutes, time_extended: true)
			respond_to do |format|
			  format.html { redirect_to new_payment_path }
			  format.js
			end
		end
	end

	def destroy
		@order.remove_associations
		@order.update(timer_started: false, start_timer: nil, end_timer: nil, time_extended: false)
		redirect_to root_path, notice: 'Muchas gracias por tu visita!'
	end

	def gracias
	end

	private

	def set_order
		@order = current_order
	end

	def payment_params
		params.fetch(:payment, {}).permit(:file)
	end
end
