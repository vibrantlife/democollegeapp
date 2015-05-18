class CreateColleges < ActiveRecord::Migration
  def change
    create_table :colleges do |t|
      t.string  :name
      t.string  :street_address
      t.string  :city
      t.string  :state
      t.integer :zip
      t.text    :application

      t.timestamps
    end
  end
end
