class PagesController < ApplicationController

before_action :set_notebook

  def show
    @page = @notebook.pages.find(params[:id])
  end

  def show_list_page
    @list = List.find(params[:list_id])
    @page = @notebook.pages.find(params[:id])
  end

  def index
    @pages = @notebook.pages.all
  end

  def edit
    @page = @notebook.pages.find(params[:id])
  end

  def update
    @page = @notebook.pages.find(params[:id])
    if @page.update(page_params)
      redirect_to notebook_page_path(@notebook, @page)
    else
      render :edit
    end   
  end

  def destroy
    @page = @notebook.pages.find(params[:id])
    @page.destroy
    redirect_to notebook_pages_path(@notebook)
  end

  def new
    @page = Page.new
  end

  def create
    @page = @notebook.pages.new(page_params)
    @page.save
    redirect_to notebook_page_path(@notebook, @page)
  end
end


private

  def set_notebook
    @notebook = Notebook.find(params[:notebook_id])
  end

  def page_params
    params.require(:page).permit(:name, :content, :list_ids => [])
  end