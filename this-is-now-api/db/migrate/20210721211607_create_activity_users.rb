class CreateActivityUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_users do |t|
      t.references :activity, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
