class User < ActiveRecord::Base
  has_many :college_apps
  has_many :colleges, through: :college_apps

  attr_accessor :password


  validates :username, :presence => true
  validates :email, :presence => true, :uniqueness => true
  validates :password, :presence => true, :confirmation => true
  validates :password_confirmation, :presence => {:if => :password}

  def password=(pass)
    return if pass.blank?
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end
end
