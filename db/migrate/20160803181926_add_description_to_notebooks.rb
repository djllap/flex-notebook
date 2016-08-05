class AddDescriptionToNotebooks < ActiveRecord::Migration[5.0]
  def change
    add_column :notebooks, :description, :string
  end
end
