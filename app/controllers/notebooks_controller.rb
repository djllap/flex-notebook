class NotebooksController < ApplicationController
  before_action :set_user

  def index
    @notebooks = Notebook.all
    @nav = {notebook: nil, list: nil, page: nil}
  end

  def show
    @notebook = Notebook.find(params[:id])
    @lists = @notebook.lists.all
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.save

    if request.xhr?
      render :json => {
        :notebook => @notebook
      }
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy

    if request.xhr?
      render :json => {
        :notebooks => Notebook.all
      }
    end


  end
end


private

  def set_user
    @user = current_user
  end

  def notebook_params
    params.require(:notebook).permit(:name)
  end