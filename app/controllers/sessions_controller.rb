class SessionsController < ApplicationController
  skip_before_filter :verity_authenticity_token
  respond_to :html, :json


  def new
  end

  def create
    @user = User.authenticate(user_params)

    if @user
      create_user_session(user_params)
      respond_with @user, :location => '/', :notice => "Welcome! Your Login was Successful"
    else
      respond_to do |format|
        format.html {render 'new'}
        format.json {rener :json => {:error => "Try again. Invalid email or password"}}
      end
  end

   def destroy
      signed_out =
      destroy_user_session
      redirect_to '/', :notice => "logged out"
    end
  end

  private
  def user_params
    params[:user][:password] = params[:password]
    params[:user][:password_confirmation] = params[:password_confirmation]
    params.require(:user).permit(:username, :password, :email, :password_confirmation)
  end

end
