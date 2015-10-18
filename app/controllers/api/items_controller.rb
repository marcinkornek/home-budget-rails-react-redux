class Api::ItemsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    render json: Item.all
  end

  def create
    item = Item.new(name: params[:name], user: current_user, price: params[:price])
    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages }, status: :not_acceptable
    end
  end
end
