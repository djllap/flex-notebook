class AddNotebookIdToPages < ActiveRecord::Migration[5.0]
  def change
    add_column :pages, :notebook_id, :integer
  end
end
