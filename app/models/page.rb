class Page < ApplicationRecord

  validates :name, presence: true
  validates :notebook_id, presence: true

  belongs_to :notebook
  has_and_belongs_to_many :lists
end
