class NotebooksController < ApplicationController

  def index
    @user = current_user
    @notebooks = Notebook.all
  end

  def show
    @user = current_user
    @notebook = Notebook.find(params[:id])
    @lists = @notebook.lists.all
  end
end
