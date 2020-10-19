require 'rails_helper'

RSpec.describe "Admin::Orders::Shippeds", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/admin/orders/shipped/index"
      expect(response).to have_http_status(:success)
    end
  end

end
