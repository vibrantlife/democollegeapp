class CreateCollegeApps < ActiveRecord::Migration
  def change
    create_table :college_apps do |t|
      t.belongs_to :user, index: true
      t.belongs_to :college, index: true
      t.datetime   :date_submitted

      t.timestamps
    end
  end
end
