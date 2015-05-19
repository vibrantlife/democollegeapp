require 'faker'

def seed_user(count)
  count.times {User.create(username: Faker::Internet.user_name, email: Faker::Internet.safe_email, password: "devbootcamp1")}
end

def seed_schools(count)
  count.times{College.create(name: Faker::Company.name, city: Faker::Address.city, state: Faker::Address.state, zip: Faker::Address.zip)}
end

def seed_apps(count, college_id, user_id)
  count.times{CollegeApp.create(application: Faker::Hacker.say_something_smart,date_submitted: Faker::Date.forward(31), college_id: college_id, user_id: user_id)}
end

seed_user(10)
seed_schools(10)
seed_apps(1, 1, 4)
seed_apps(1, 3, 5)
seed_apps(1, 5, 9)
