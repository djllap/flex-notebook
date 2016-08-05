Rails.application.routes.draw do
  root "notebooks#index"
  
  resources :notebooks do
    resources :lists do
    end
    resources :pages do
    end
  end

#  get "notebooks/:notebook_id/lists/:list_id/pages/new" => "pages#new_list_page", as: :new_list_page
#  post "notebooks/:notebook_id/lists/:list_id/pages" => "pages#create_list_page"
#  get "notebooks/:notebook_id/lists/:list_id/pages/:id" => "pages#show_list_page", as: :show_list_page
#  get "notebooks/:notebook_id/lists/:list_id/pages/:id/edit" => "pages#edit_list_page", as: :edit_list_page
#  put "notebooks/:notebook_id/lists/:list_id/pages/:id" => "pages#update_list_page"
#  patch "notebooks/:notebook_id/lists/:list_id/pages/:id" => "pages#update_list_page"



  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
