class ListsController < ApplicationController

  before_action :set_notebook
  respond_to :html, :js, :xml

  def index
    @lists = @notebook.lists.all

    if request.xhr?
      render :json => {
        :lists => @lists
      }
    end
  end

  def show
    @list = @notebook.lists.find(params[:id])
    @pages = @list.pages.all
  end

  def new
    @list = @notebook.lists.new
  end

  def create
    @list = @notebook.lists.new(list_params)
    @list.save
    redirect_to @notebook
  end

  def destroy
    @list = @notebook.lists.find(params[:id])
    @list.destroy
    redirect_to @notebook
  end

  def edit
    @list = @notebook.lists.find(params[:id])    
  end

  def update
    @list = @notebook.lists.find(params[:id])
    if @list.update(list_params)
      redirect_to notebook_list_path(@notebook, @list)
    else
      render :edit
    end   
  end
end

private

  def list_params
    params.require(:list).permit(:name, :page_ids => [])
  end

  def set_notebook
    @notebook = Notebook.find(params[:notebook_id])
  end