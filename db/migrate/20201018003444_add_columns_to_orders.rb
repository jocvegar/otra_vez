class AddColumnsToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :shipped, :boolean, default: false
    add_column :orders, :submitted, :boolean, default: false
    add_column :orders, :declined, :boolean, default: false
  end
end
