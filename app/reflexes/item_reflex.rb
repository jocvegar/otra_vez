class ItemReflex < ApplicationReflex

  before_reflex do
     @order_item = OrderItem.find_by(id: element.dataset.id)
  end

  def update
    @order_item.update_attributes(order_item_params)
  end

  private

  def order_item_params
    params.require(:order_item).permit(:quantity)
  end

end
