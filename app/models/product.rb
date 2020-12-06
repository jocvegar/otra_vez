class Product < ApplicationRecord
	extend FriendlyId
	friendly_id :title, use: :slugged

	has_many :order_items, dependent: :destroy
	has_one_attached :main_image

	scope :existing, lambda { where("quantity > ?", 0) }
	scope :sold_out, lambda { where("quantity <= ?", 0) }
	scope :hombre, lambda { where("category = ?", "hombre").or(where("category = ?", "unisex")) }
	scope :mujer, lambda { where("category = ?", "mujer").or(where("category = ?", "unisex")) }
	scope :youth, lambda { where("category = ?", "youth").or(where("category = ?", "unisex")) }
	scope :otro, lambda { where("category = ?", "otro") }

	def should_generate_new_friendly_id?
		title_changed? || super
	end

	def self.options
	  return %w(polo manga_larga camiseta gorra camisa shorts sin_mangas pantalon otro)
	end

	def self.sizes
	  return %w(fits_all xxs xs s m l xl 2xl 3xl 4xl 00 0 2 4 6 8 10 12 14 16 26 28 30 32 34 36 38 40)
	end

	def self.fits_like
	  return %w(real xxs xs s m l xl 2xl 3xl 4xl 00 0 2 4 6 8 10 12 14 16 26 28 30 32 34 36 38 40)
	end

	def self.quality
	  return %w(usado nuevo)
	end

	def self.categories
		return %w(hombre mujer youth unisex otro)
	end

	def self.subcategories
		return %w(adulto niño youth otro)
	end
end
