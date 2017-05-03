class PagesController < ApplicationController

before_action :set_notebook

  def update
    @page = @notebook.pages.find(params[:id])
    if @page.update(page_params)
      if request.xhr?
        render :json => @page
      end
    end
  end

  def destroy
    @page = @notebook.pages.find(params[:id])
    @page.destroy
    redirect_to notebook_pages_path(@notebook)
  end

  def create
    @page = @notebook.pages.new(page_params)
    @page.save

    if request.xhr?
      render :json => @page
    end
  end
end


private

  def set_notebook
    @notebook = Notebook.find(params[:notebook_id])
  end

  def page_params
    params.permit(:name, :content, :list_ids, :page => [])
  end