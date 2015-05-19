class RemoveColumnFromCollege < ActiveRecord::Migration
  def change
    remove_column :colleges, :application, :text
    add_column    :college_apps, :application, :text
  end
end
