class Admin::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  layout "admin"

  def index
    @products = Product.existing.all.order("created_at DESC")
  end

  def show
  end

  def new
    @product = Product.new
  end

  def edit
  end

  def create
    if !Rails.env.development? && admin_product_params[:main_image].present?
      path = admin_product_params[:main_image].tempfile.path
      ImageProcessing::MiniMagick.source(path)
        .resize_to_limit(900, 900)
        .call(destination: path)
      ImageOptim.new.optimize_image!(path)
    end

    @product = Product.new(admin_product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to admin_products_path, notice: 'Salvado' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    if admin_product_params[:main_image].present?
      path = admin_product_params[:main_image].tempfile.path
      ImageProcessing::MiniMagick.source(path)
        .resize_to_limit(900, 900)
        .call(destination: path)
    end

    respond_to do |format|
      if @product.update(admin_product_params)
        format.html { redirect_to admin_products_path, notice: 'Producto modificado' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to admin_products_path, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.friendly.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_product_params
      params.require(:product).permit(:title, :price, :main_image, :quantity, :category, :option, :size,
        :fit, :brand, :quality, :subcategory)
    end
end
