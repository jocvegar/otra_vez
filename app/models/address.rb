class Address < ApplicationRecord
	belongs_to :source, polymorphic: true

	validates_presence_of :nombre, :apellido, :direccion, :ciudad, :departamento, :pais, :telefono, :correo
end
