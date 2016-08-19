Rails.application.routes.draw do
  
  
  resources :notebooks do
    resources :lists do
      resources :pages
    end
  end
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
