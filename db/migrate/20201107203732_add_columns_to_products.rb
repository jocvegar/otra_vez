class AddColumnsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :brand, :string
    add_column :products, :fit, :string
    add_column :products, :subcategory, :string
  end
end
