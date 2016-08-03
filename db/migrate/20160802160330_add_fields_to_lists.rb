class AddFieldsToLists < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :name, :string
    add_column :lists, :slug, :string
  end
end
