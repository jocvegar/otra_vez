require 'rails_helper'

RSpec.describe "Categorias", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/categorias/index"
      expect(response).to have_http_status(:success)
    end
  end

end
