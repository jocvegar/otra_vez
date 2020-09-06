class OrderItemsController < ApplicationController
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
    @order_item = @order.order_items.new(order_item_params)
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

  def update
    # respond_to do |format|
    #   if @order_item.update(order_item_params)
    #     format.html { redirect_to @order_item, notice: 'Order item was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @order_item }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @order_item.errors, status: :unprocessable_entity }
    #   end
    # end

    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
  end

  def destroy
    # @order_item.destroy
    # respond_to do |format|
    #   format.html { redirect_to order_items_url, notice: 'Order item was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
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
