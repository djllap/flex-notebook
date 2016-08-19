class AddNotebookToLists < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :notebook_id, :integer
  end
end
