class Address < ApplicationRecord
	belongs_to :source, polymorphic: true

	validates_presence_of :nombre, :apellido, :direccion, :ciudad, :departamento, :municipio, :pais, :telefono, :correo

	def username
		username = self.nombre.to_s.capitalize + " " + self.apellido.to_s.capitalize
		return username.blank? ? self.correo : username.strip
	end

	def one_line_format
		line  = ""
		line += self.direccion.to_s.strip
		line += ", "
		line += self.ciudad.to_s + ", " unless self.ciudad.blank?
		line += self.municipio.to_s + ", " unless self.municipio.blank?
		line += self.departamento.to_s.titleize + " "
		line += self.pais.to_s
		if line.blank?
			return "-"
		else
			return line
		end
	end

	def self.departamentos
		%w(Atlántida Colón Comayagua Copán Cortés Choluteca El_Paraíso Francisco_Morazán Gracias_a_Dios Intibucá Islas_de_la_Bahía La_Paz Lempira Ocotepeque Olancho Santa_Bárbara Valle Yoro)
	end
end
