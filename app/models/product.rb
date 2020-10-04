class Product < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_many :order_items, dependent: :destroy
	has_one_attached :main_image

	scope :existing, lambda { where("quantity > ?", 0) }
	scope :sold_out, lambda { where("quantity <= ?", 0) }
	scope :hombre, lambda { where("category = ?", "hombre") }
	scope :mujer, lambda { where("category = ?", "mujer") }
	scope :otro, lambda { where("category = ?", "otro") }

	def should_generate_new_friendly_id?
		title_changed? || super
	end

	def self.options
	  return %w(polo manga_larga camiseta gorra camisa shorts sin_mangas)
	end

	def self.sizes
	  return %w(xs s m l xl fits_all)
	end
end
