class CheckoutController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_order, only: [:new, :create]

	def new
		@order_items = @order.order_items.order("created_at DESC")
		@shipping_address = Address.new
	end

	def create
		@shipping_address = @order.build_address(address_params)

		if @shipping_address.save
			format.html { redirect_to root_path, notice: 'Dirección guardada!' }
		else
			format.html { broadcast_errors @shipping_address, address_params }
		end
	end

	private

	def address_params
		params.require(:address).permit(:nombre, :apellido, :direccion, :ciudad, :departamento, :pais, :telefono, :telefono_alternativo, :referencia, :notas, :correo)
	end

	def set_order
		@order = current_order
	end
end
