class Product < ActiveRecord::Base
  attr_accessible :image, :price, :title, :url, :wishlist_id

  belongs_to :wishlist
end
