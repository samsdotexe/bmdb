Rails.application.routes.draw do
  root 'homes#index'

  get "/movies", to: "homes#index"
  get "/movies/new", to: "homes#new"
  get "/movies/:id", to: "homes#show"

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show, :new, :create] do
        resources :reviews, only: [:index, :create]
      end
    end
  end
end
