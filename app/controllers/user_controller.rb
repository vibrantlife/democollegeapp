class UserController < ApplicationController

  respond_to :html, :json

  def index

  end

  def new
    @user = User.new
  end


  def create
    @user = User.new(params[:user])
      if @user.save
        flash[:notice] = 'Acount created.'
      end
        redirect_to '/colleges'
  end

  def show
    @user = User.find(params[:id])

  end

  def edit
    @user = User.find(params[:id])
  end

end
