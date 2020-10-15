class RemoveExtendedFromOrders < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders, :extended, :boolean
  end
end
