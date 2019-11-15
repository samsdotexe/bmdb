class Movie < ApplicationRecord
  validates :title, presence: true

  has_many :reviews
  has_many :users, through: :reviews
end
