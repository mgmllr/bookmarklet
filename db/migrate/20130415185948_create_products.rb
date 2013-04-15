class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :wishlist_id
      t.string :title
      t.string :url
      t.string :image
      t.decimal :price

      t.timestamps
    end
  end
end
