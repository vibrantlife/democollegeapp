class UserController < ApplicationController

  respond_to :html, :json

  def index

  end

  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
      if @user.save
        flash[:notice] = 'Acount created.'
      end
        render_to @user, :location => '/'
  end

  def show
    @user = User.find(params[:id])

  end

  def edit
    @user = User.find(params[:id])
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end


end
