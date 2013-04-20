require 'test_helper'

class JsControllerTest < ActionController::TestCase
  test "should get bookmarklet" do
    get :bookmarklet
    assert_response :success
  end

end
