class Notebook < ApplicationRecord

  validates :name, presence: true, uniqueness: true
    
  has_many :lists, dependent: :destroy
  has_many :pages, dependent: :destroy

  def main
    @notebooks = Notebook.all
  end
  
end
