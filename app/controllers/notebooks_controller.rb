class NotebooksController < ApplicationController

  def index
    @notebooks = Notebook.all
  end
end
