class WishlistController < ApplicationController
  
	before_filter :authenticate_user!
  
  def show
    @user = current_user
    @products = @user.products
  end

  def add_product      
    if current_user
      wishlist = current_user.wishlist.id
      title = params[:title]
      image = params[:image]
      price = params[:price]
      link_url = params[:link_url]

      @product = Product.create(wishlist_id: wishlist, title: title, image: image, price: price, url: link_url)
      # redirect_to wishlist_path(current_user), notice: 'Product successfully added.'
    else
      redirect_to new_user_session_path, error: 'You need to be logged in to use Bookmarklet. Please log in and try again.'
    end
  end

end