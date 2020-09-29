class OrderItemsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_order_item, only: [:show, :edit, :update, :destroy]

  def index
    @order_items = OrderItem.all
  end

  def show
  end

  def new
    @order_item = OrderItem.new
  end

  def edit
  end

  def create
    @order = current_order
    @order_item = @order.order_items.find_or_initialize_by(product_id: order_item_params[:product_id].to_i)

    if @order_item.new_record?
      @order_item.quantity = order_item_params[:quantity].to_i
    else
      @order_item.update_attributes(quantity: @order_item.quantity + order_item_params[:quantity].to_i)
    end

    respond_to do |format|
      if @order.save
        session[:order_id] = @order.id
        format.html { redirect_to @order_item, notice: 'Order item was successfully created.' }
        format.js
      else
        format.html { render :new }
        format.js
      end
    end
  end

  # def update
  #   called from reflex
  #   @order = current_order
  #   @order_item = @order.order_items.find(params[:id])
  #   @order_item.update_attributes(order_item_params)
  #   @order_items = @order.order_items
  # end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items

    respond_to do |format|
      format.html { redirect_to order_items_url, notice: 'Order item was successfully destroyed.' }
      format.js
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_item
      @order_item = OrderItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_item_params
      params.require(:order_item).permit(:product_id, :quantity)
    end
end
