class AddEndTimerToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :end_timer, :datetime
  end
end
