require 'rails_helper'

RSpec.describe "Admin::SoldoutProducts", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/admin/soldout_products/index"
      expect(response).to have_http_status(:success)
    end
  end

end
