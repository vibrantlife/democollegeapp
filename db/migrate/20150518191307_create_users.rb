class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string  :password
      t.datetime  :last_visited

      t.timestamps
    end
  end
end
