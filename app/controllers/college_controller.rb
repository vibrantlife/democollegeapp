class CollegeController < ApplicationController

  def index
    colleges = College.all
  end

end
