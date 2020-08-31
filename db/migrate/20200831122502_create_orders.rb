class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.float :subtotal
      t.float :total
      t.float :tax
      t.float :shipping
      t.string :slug

      t.timestamps
    end
    add_index :orders, :slug, unique: true
  end
end
