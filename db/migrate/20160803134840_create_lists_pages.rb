class CreateListsPages < ActiveRecord::Migration[5.0]
  def change
    create_table :lists_pages do |t|
      t.references :list, foreign_key: true
      t.references :page, foreign_key: true
    end
  end
end
