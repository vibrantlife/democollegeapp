class User < ActiveRecord::Base
  has_many :college_apps
  has_many :colleges, :through => :college_apps
end
