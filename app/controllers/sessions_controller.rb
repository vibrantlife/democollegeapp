class SessionsController < ApplicationController

respond_to :html, :json

  def create
    @user = User.authenticate(params[:username], params[:password])

    if @user
      create_user_session(@user)
      respond_with @user, :location => '/colleges', :notice => "Welcome! You're Login was Successful"
    else
      respond_to do |format|
        format.html {render 'new'}
        format.json {rener :json => {:error => "Try again. Invalid email or password"}}
      end
  end

  def destroy
    destroy_user_session
    redirect_to '/', :notice => "logged out"
  end
end
