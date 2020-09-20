class Product < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_many :order_items
	has_one_attached :main_image

	scope :existing, lambda { where("quantity > ?", 0) }
	scope :sold_out, lambda { where("quantity <= ?", 0) }

	def should_generate_new_friendly_id?
		title_changed? || super
	end
end
