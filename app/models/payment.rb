class Payment < ApplicationRecord
	belongs_to :order
	has_one_attached :file

	validate :correct_file_type

	private

	def correct_file_type
		if file.attached? && !file.content_type.in?(%w(image/jpeg image/jpg image/png))
			errors.add(:imagen, 'tiene que ser en formato JPG o PNG')
		elsif file.attached? == false
			errors.add(:imagen, 'requerida')
		end
	end
end
