class WishlistController < ApplicationController
  
	before_filter :authenticate_user!, except: :add_product
  
  def show
    @user = current_user
    @products = @user.products
  end

  def add_product      
      
      unless current_user
        respond_to do |format|
          format.js { render partial: '/wishlist/fail.js.erb' }
        end
      else

        wishlist = current_user.wishlist.id
        title = params[:title]
        image = params[:image]
        price = params[:price]
        # link_url = params[:link_url]

        @product = Product.create(wishlist_id: wishlist, title: title, image: image, price: price)#, url: link_url)
        
        if @product.save          
          respond_to do |format|
            format.js
          end
        end
      # else
      #   redirect_to new_user_session_path, error: 'You need to be logged in to use Bookmarklet. Please log in and try again.'
      # end
      end
  end

  def delete_product
    @product = Product.find(params[:id])
    @product.destroy

    respond_to do |format|
      format.js
    end
  end
end