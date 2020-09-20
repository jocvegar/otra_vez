class AddFieldsToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :category, :string
    add_column :products, :option, :string
    add_column :products, :quantity, :integer
  end
end
