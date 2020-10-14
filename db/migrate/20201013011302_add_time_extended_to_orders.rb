class AddTimeExtendedToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :time_extended, :boolean, default: false
  end
end
