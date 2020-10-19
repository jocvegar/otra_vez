# frozen_string_literal: true

class OrderReflex < ApplicationReflex
  # Add Reflex methods in this file.
  #
  # All Reflex instances expose the following properties:
  #
  #   - connection - the ActionCable connection
  #   - channel - the ActionCable channel
  #   - request - an ActionDispatch::Request proxy for the socket connection
  #   - session - the ActionDispatch::Session store for the current visitor
  #   - url - the URL of the page that triggered the reflex
  #   - element - a Hash like object that represents the HTML element that triggered the reflex
  #   - params - parameters from the element's closest form (if any)

  def ship(order_slug)
    @order = Order.friendly.find(order_slug.strip)
    @order.update(shipped: true) if @order
    @orders = Order.where(submitted: true, shipped: false, declined: false).order("updated_at DESC")
  end
end
