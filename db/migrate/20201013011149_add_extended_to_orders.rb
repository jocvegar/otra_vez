class AddExtendedToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :extended, :boolean
  end
end
