class UserController < ApplicationController
  skip_before_filter :verity_authenticity_token
  respond_to :json, :html

  def index
  end

  def new
    @user = User.new
  end



  def create
    @user = User.new(user_params)
      if @user.save
        render :json => @user
        else
        render :json => {:errors => @user.errors}, :status => 422
      end
  end

  def show
  end

  def edit
    @user = User.find(params[:id])
  end


  private
  def user_params
    params[:user][:password] = params[:password]
    params[:user][:password_confirmation] = params[:password_confirmation]
    params.require(:user).permit(:username, :password, :email, :password_confirmation)

  end

end
