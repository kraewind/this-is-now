class ValueSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :value_activities
    has_many :activities, through: :value_activities
    has_many :value_users
    has_many :users, through: :value_users
end
