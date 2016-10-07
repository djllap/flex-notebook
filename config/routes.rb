Rails.application.routes.draw do
  root "notebooks#index"
  
  resources :notebooks do
    resources :lists do
    end
    resources :pages do
    end
  end

  devise_for :users

  get '/users/:id' => "users#show", as: :user


end
