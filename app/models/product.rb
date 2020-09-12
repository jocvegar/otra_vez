class Product < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_many :order_items
	has_many_attached :images
end
