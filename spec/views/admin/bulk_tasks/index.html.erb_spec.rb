require 'rails_helper'

RSpec.describe "admin/bulk_tasks/index", type: :view do
  before(:each) do
    assign(:admin_bulk_tasks, [
      Admin::BulkTask.create!(),
      Admin::BulkTask.create!()
    ])
  end

  it "renders a list of admin/bulk_tasks" do
    render
  end
end
