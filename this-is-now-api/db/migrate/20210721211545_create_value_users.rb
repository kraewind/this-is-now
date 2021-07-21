class CreateValueUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :value_users do |t|
      t.references :value, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
