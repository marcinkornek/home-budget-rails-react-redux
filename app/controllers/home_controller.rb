class HomeController < ApplicationController
  def index
    @items = Item.all
    @sum = sum
  end

  private

  def sum
    @sum ||= current_user.items.sum(:price)
  end
end
