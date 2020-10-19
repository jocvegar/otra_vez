class Address < ApplicationRecord
	belongs_to :source, polymorphic: true

	validates_presence_of :nombre, :apellido, :direccion, :ciudad, :departamento, :pais, :telefono, :correo

	def username
		username = self.nombre.to_s.capitalize + " " + self.apellido.to_s.capitalize
		return username.blank? ? self.correo : username.strip
	end

	def one_line_format
		line  = ""
		line += self.direccion.to_s.strip
		line += ", "
		line += self.ciudad.to_s + ", " unless self.ciudad.blank?
		line += self.departamento.to_s.titleize + " "
		line += self.pais.to_s
		if line.blank?
			return "-"
		else
			return line
		end
	end
end
