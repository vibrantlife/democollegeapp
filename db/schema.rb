# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150520105925) do

  create_table "college_apps", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "college_id"
    t.datetime "date_submitted"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "application"
  end

  add_index "college_apps", ["college_id"], name: "index_college_apps_on_college_id"
  add_index "college_apps", ["user_id"], name: "index_college_apps_on_user_id"

  create_table "colleges", force: :cascade do |t|
    t.string   "name"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.string   "name"
    t.text     "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "last_visited"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
