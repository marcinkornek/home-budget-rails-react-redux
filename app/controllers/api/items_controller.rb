class Api::ItemsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    render json: { items: Item.all, sum: sum }
  end

  def create
    item = Item.new(name: params[:name], user: current_user, price: params[:price])
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
    @item ||= Item.find(params[:id])
  end

  def sum
    @sum ||= Item.sum(:price)
  end
end
