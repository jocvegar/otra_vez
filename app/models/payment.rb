class Payment < ApplicationRecord
	belongs_to :order
	has_one_attached :file

	validates :file, attached: true, content_type: [:png, :jpg, :jpeg]
end
