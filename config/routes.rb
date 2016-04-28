Rails.application.routes.draw do
  namespace :api do
    namespace :letters do
      resources :letters, only: [:index, :create]
    end
  end
end
