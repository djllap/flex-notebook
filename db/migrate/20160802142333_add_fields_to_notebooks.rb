class AddFieldsToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :name, :string
  end
end
