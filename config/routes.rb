Rails.application.routes.draw do
  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :letters, only: [:index, :create]
    end
  end
end
