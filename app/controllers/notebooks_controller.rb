class NotebooksController < ApplicationController

  def index
    @notebooks = Notebook.all
  end

  def show
    @notebook = Notebook.find(params[:id])
    @lists = @notebook.lists.all
  end
end
