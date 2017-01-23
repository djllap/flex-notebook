class NotebooksController < ApplicationController
  before_action :set_user

  def index
    @notebooks = Notebook.all
    @nav = {notebook: nil, list: nil, page: nil}

    if request.xhr?
      render :json => @notebooks
    end
  end

  def show
    @notebook = Notebook.find(params[:id])
    @lists = @notebook.lists.all
  end

  def create
    @notebook = @user.notebooks.new(notebook_params)
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
      render :json => @user.notebooks.all
    end
  end

  def update
    @notebook = Notebook.find(params[:id])

    if @notebook.update(notebook_params)
      if request.xhr?
        render :json => @user.notebooks.all
      end
    end
  end
end


private

  def set_user
    @user = current_user
  end

  def notebook_params
    params.permit(:name, :user_id)
  end