class ListsController < ApplicationController

  before_action :set_notebook
  respond_to :html, :js, :xml

  def index
    @lists = @notebook.lists.all

    if request.xhr?
      render :json => @lists
    end
  end

  def show
    @list = @notebook.lists.find(params[:id])
    @pages = @list.pages.all

    if request.xhr?
      render :json => @pages
    end
  end

  def new
    @list = @notebook.lists.new
  end

  def create
    @list = @notebook.lists.new(list_params)
    @list.save
    
    if request.xhr?
      render :json => @list
    end
  end

  def destroy
    @list = @notebook.lists.find(params[:id])
    @list.destroy
    
    if request.xhr?
      render :json => @notebook.lists
    end
  end

  def edit
    @list = @notebook.lists.find(params[:id])    
  end

  def update
    @list = @notebook.lists.find(params[:id])
    if @list.update(list_params)
      if request.xhr?
        render :json => @list
      end
    end
  end
end

private

  def list_params
    params.permit(:name, :page_ids => [])
  end

  def set_notebook
    @notebook = Notebook.find(params[:notebook_id])
  end
