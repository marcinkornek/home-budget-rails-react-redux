class Api::ItemsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    render json: { items: current_user.items, sum: sum }
  end

  def create
    item = current_user.items.new(name: params[:name], user: current_user, price: params[:price])
    if item.save
      render json: { item: item, sum: sum }
    else
      render json: { errors: item.errors.full_messages }, status: :not_acceptable
    end
  end

  def destroy
    item.destroy
    render json: { item: item, sum: sum }
  end

  private

  def item
    @item ||= current_user.items.find(params[:id])
  end

  def sum
    @sum ||= current_user.items.sum(:price)
  end

  def current_user
    @current_user ||= User.find(params[:user_id])
  end
end
