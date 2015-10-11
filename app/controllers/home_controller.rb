class HomeController < ApplicationController
  before_filter :authenticate_user!

  def index
    @items = Item.all
  end
end
