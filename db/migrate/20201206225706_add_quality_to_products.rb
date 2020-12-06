class AddQualityToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :quality, :string
  end
end
