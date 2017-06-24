class PagesController < ApplicationController

before_action :set_notebook

  def update
    @page = @notebook.pages.find(params[:id])
    if @page.update(page_params)
      if request.xhr?
        render :json => {page: @page, list: params[:list]}
      end
    end
  end

  def destroy
    @page = @notebook.pages.find(params[:id])

    if @page.destroy
      if request.xhr?
        render :json => params[:list]
      end
    end

  end

  def create
    @page = @notebook.pages.new(page_params)
    @page.save
    @list = @page.lists.first
    @pages = @list.pages.all

    if request.xhr?
      render :json => {page: @page, pages: @pages, list: @list}
    end
  end
end


private

  def set_notebook
    @notebook = Notebook.find(params[:notebook_id])
  end

  def page_params
    params.permit(:name, :content, :list_ids => [])
  end