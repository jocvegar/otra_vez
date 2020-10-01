class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :nombre
      t.string :apellido
      t.string :direccion
      t.string :ciudad
      t.string :departamento
      t.string :codigo_postal
      t.string :pais
      t.string :telefono
      t.string :telefono_alternativo
      t.text :referencia
      t.text :notas
      t.string :correo
      t.references :source, polymorphic: true, null: false

      t.timestamps
    end
  end
end
