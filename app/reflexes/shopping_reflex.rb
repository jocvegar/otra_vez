# frozen_string_literal: true

class ShoppingReflex < ApplicationReflex
  def test(order_id)
    @order = Order.find_by(id: order_id.to_i)
    if @order
      @order.remove_associations
    end
  end
end
