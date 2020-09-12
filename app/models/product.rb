class Product < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_many :order_items
	has_one_attached :main_image

	def should_generate_new_friendly_id?
		title_changed? || super
	end
end
