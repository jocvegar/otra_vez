class Payment < ApplicationRecord
	belongs_to :order
	has_one_attached :file

	validates :file, attached: true, content_type: [:png, :jpg, :jpeg], :unless => :compra_click_method?

	private

	def compra_click_method?
		self.payment_method == "compra_click"
	end
end
