Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :jokes, only: [:show, :index, :create, :update, :destroy]
  end

end
