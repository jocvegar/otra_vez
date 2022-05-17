class Admin::BulkTasksController < ApplicationController
  before_action :authenticate_admin!
  layout "admin"

  def index
  end

  def create
    category = params["category"]
    price = params["price"]
    @products = Product.where(category: category).where.not(quantity: 0)

    respond_to do |format|
      if category.present? && price.present? && @products.update_all(price: price)
        format.html { redirect_to admin_path, notice: "Actualizaciones hechas" }
      else
        format.html { redirect_to admin_path, error: "Error: #{@products.errors.full_messages}" }
      end
    end
  end
end
