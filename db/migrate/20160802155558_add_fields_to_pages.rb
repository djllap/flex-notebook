class AddFieldsToPages < ActiveRecord::Migration[5.0]
  def change
    add_column :pages, :name, :string
    add_column :pages, :content, :text
    add_column :pages, :slug, :string
  end
end
