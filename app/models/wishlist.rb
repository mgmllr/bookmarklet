class Wishlist < ActiveRecord::Base
  attr_accessible :user_id

  has_many :products
end
