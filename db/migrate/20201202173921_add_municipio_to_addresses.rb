class AddMunicipioToAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :addresses, :municipio, :string
  end
end
