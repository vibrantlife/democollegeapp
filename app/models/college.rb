class College < ActiveRecord::Base
  has_many :college_apps
  has_many :users, :through => :college_apps
end
