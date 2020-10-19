class Admin::OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]
  layout "admin"

  def index
    @orders ||= Order.where(submitted: true, shipped: false, declined: false).order("updated_at DESC")
  end

  def show
  end

  def edit
  end

  def update
    respond_to do |format|
      if @order.update(shipped: true)
        format.html { redirect_to admin_orders_path, notice: 'Preparar orden para envío' }
      else
        flash[:alert] = "Por favor tratar de nuevo, #{@order.errors.full_messages.to_sentence}"
        redirect_back(fallback_location: admin_orders_path)
      end
    end
  end

  def destroy
    @order.update(admin_order_params)
    respond_to do |format|
      format.html { redirect_to admin_orders_path, error: 'Orden cancelada' }
    end
  end

  private

  def set_order
    @order = Order.friendly.find(params[:id])
  end

  def admin_order_params
    params.require(:order).permit(:reason_for_decline, :declined)
  end
end
