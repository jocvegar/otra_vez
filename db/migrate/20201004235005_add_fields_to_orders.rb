class AddFieldsToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :timer_started, :boolean, default: false
    add_column :orders, :start_timer, :datetime
  end
end
