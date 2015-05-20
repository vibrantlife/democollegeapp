class College < ActiveRecord::Base
  has_many :college_apps
  has_many :users, :through => :college_apps

  # attr_accessible :name, :city, :state

  def index
    render :json => College.all
  end

  def show
    render :json => College.find(params[:id])
  end

  def create
    college = College.create! params
    render :json => college
  end

  def update
    college = College.find(params[:id])
    college.update_attributes! params
    render :json => college
  end

  def to_json(options = {})
    super(options.merge(:only => [:id, :name, :city, :state]))

  end
end
