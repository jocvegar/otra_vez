class Order < ApplicationRecord
	extend FriendlyId
	friendly_id :slug_it, use: :slugged

	has_many :order_items, dependent: :destroy
	has_many :products, through: :order_items

	has_one :address, as: :source, dependent: :destroy
	has_one :payment, dependent: :destroy

	before_save :set_subtotal
	before_save :set_shipping

	def subtotal
		order_items.collect { |order_item| order_item.valid? ? (order_item.unit_price * order_item.quantity) : 0 }.sum
	end

	def subtotal_net
		order_items.collect { |order_item| (order_item.unit_price * order_item.quantity) }.sum
	end

	def shipping
		address&.municipio == "distrito_central" ? 80 : 0
	end

	def remove_associations
		# we are doing this when purchase time has expired or denied
		self.address.destroy
		return_products
		self.order_items.map(&:destroy)
	end

	def reserve_products
		self.order_items.each do |order_item|
			availability = order_item.product.quantity - order_item.quantity
			allowed_order_quantity = availability < 0 ? order_item.product.quantity : order_item.quantity
			order_item.product.update_attributes(quantity: order_item.product.quantity - allowed_order_quantity)
			order_item.update_attributes(quantity: allowed_order_quantity)
		end
	end

	def return_products
		self.order_items.each do |order_item|
			order_item.product.update_attributes(quantity: order_item.product.quantity + order_item.quantity)
		end
	end

	private

	def set_subtotal
		self[:subtotal] = subtotal
	end

	def set_shipping
		self[:shipping] = shipping
	end

	def slug_it
		slugs = []
		3.times do
			slugs << "orden" + "-" + SecureRandom.urlsafe_base64(7).parameterize.downcase
		end
		slugs
	end
end
