Rails.application.routes.draw do
  root "notebooks#index"
  devise_for :users, :paths => 'users'

  resources :users do
    resources :notebooks do
      resources :lists do
      end
      resources :pages do
      end
    end
  end



  get "/test" => 'application#test', as: :test


end
