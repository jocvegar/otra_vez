class AddReasonForDeclineToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :reason_for_decline, :string
  end
end
