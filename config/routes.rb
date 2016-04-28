Rails.application.routes.draw do
  root to: 'site#index'
  namespace :api do
    namespace :letters do
      resources :letters, only: [:index, :create]
    end
  end
end
